"""Diktat-Brücke: empfängt Nachrichten via ntfy und fügt sie auf Hotkey-Druck
an der aktuellen Cursor-Position ein. Läuft unter Windows."""

from __future__ import annotations

import json
import sys
import threading
import time
from pathlib import Path

import keyboard
import pyperclip
import requests

CONFIG_PATH = Path(__file__).parent / "config.json"
EXAMPLE_PATH = Path(__file__).parent / "config.example.json"


def load_config() -> dict:
    if not CONFIG_PATH.exists():
        print(f"[setup] Keine config.json gefunden unter {CONFIG_PATH}")
        print(f"[setup] Kopiere {EXAMPLE_PATH.name} zu config.json und setze ein eigenes 'topic'.")
        sys.exit(1)
    return json.loads(CONFIG_PATH.read_text(encoding="utf-8"))


class Bridge:
    def __init__(self, topic: str, server: str, hotkey: str) -> None:
        self.topic = topic
        self.server = server.rstrip("/")
        self.hotkey = hotkey
        self.latest: str = ""
        self.lock = threading.Lock()

    def subscribe(self) -> None:
        url = f"{self.server}/{self.topic}/json"
        backoff = 2
        while True:
            try:
                print(f"[ntfy] Verbinde mit {url}")
                with requests.get(url, stream=True, timeout=None) as resp:
                    resp.raise_for_status()
                    print("[ntfy] Verbunden. Warte auf Nachrichten.")
                    backoff = 2
                    for line in resp.iter_lines(decode_unicode=True):
                        if not line:
                            continue
                        try:
                            msg = json.loads(line)
                        except json.JSONDecodeError:
                            continue
                        if msg.get("event") != "message":
                            continue
                        text = msg.get("message", "")
                        if not text:
                            continue
                        with self.lock:
                            self.latest = text
                        preview = text.replace("\n", " ")[:70]
                        print(f"[ntfy] Empfangen ({len(text)} Zeichen): {preview}")
                        self._notify()
            except requests.exceptions.RequestException as exc:
                print(f"[ntfy] Verbindungsfehler: {exc}. Reconnect in {backoff}s.")
                time.sleep(backoff)
                backoff = min(backoff * 2, 30)

    def _notify(self) -> None:
        try:
            import winsound

            winsound.MessageBeep(winsound.MB_OK)
        except Exception:
            pass

    def paste_latest(self) -> None:
        with self.lock:
            text = self.latest
        if not text:
            print("[hotkey] Noch keine Nachricht empfangen.")
            return

        saved_clipboard = ""
        try:
            saved_clipboard = pyperclip.paste()
        except Exception:
            pass

        try:
            pyperclip.copy(text)
            time.sleep(0.05)
            keyboard.send("ctrl+v")
            print(f"[hotkey] Eingefügt ({len(text)} Zeichen).")
        except Exception as exc:
            print(f"[hotkey] Fehler beim Einfügen: {exc}")

        def restore() -> None:
            time.sleep(1.0)
            try:
                pyperclip.copy(saved_clipboard)
            except Exception:
                pass

        threading.Thread(target=restore, daemon=True).start()

    def run(self) -> None:
        threading.Thread(target=self.subscribe, daemon=True).start()
        keyboard.add_hotkey(self.hotkey, self.paste_latest)
        print(f"[hotkey] {self.hotkey.upper()} drücken, um das letzte Diktat einzufügen.")
        print("[hotkey] Strg+C im Fenster zum Beenden.")
        keyboard.wait()


def main() -> None:
    cfg = load_config()
    topic = cfg.get("topic", "").strip()
    if not topic or topic.startswith("AENDERE"):
        print("[setup] Bitte ein eigenes, langes 'topic' in config.json setzen.")
        sys.exit(1)
    server = cfg.get("server", "https://ntfy.sh")
    hotkey = cfg.get("hotkey", "f9")
    Bridge(topic=topic, server=server, hotkey=hotkey).run()


if __name__ == "__main__":
    main()
