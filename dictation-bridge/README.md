# Diktat-Brücke (Android → Windows)

Sendet Text vom Android-Handy an den Windows-PC und fügt ihn dort per Hotkey
(`F9`) an der aktuellen Cursorposition ein – egal in welchem Programm
(RIS, Word, Mail, Browser).

```
[Android]                [ntfy.sh]                [Windows]
PWA / Share-Menü  ──POST──► Pub/Sub  ──Stream──►  listener.py
                                                    │
                                                    └── F9 → tippt an Cursor
```

## Voraussetzungen

- Windows-PC mit Python 3.10+ ([python.org](https://www.python.org/) – bei der
  Installation **„Add Python to PATH"** aktivieren)
- Android-Handy mit Chrome (oder anderem Chromium-Browser)
- Internetverbindung auf beiden Geräten

Du brauchst **kein** Konto bei irgendeinem Dienst.

## Schritt 1 – Topic festlegen

Ein „Topic" ist quasi dein Geheimnis bei `ntfy.sh`. Jeder, der den Topic-Namen
kennt, kann mitlesen/senden. Wähle deshalb einen **langen, zufälligen Namen**,
z. B.:

```
radiologie-diktat-7f3a92be4d1c9a04
```

Diesen Namen verwendest du gleich an zwei Stellen (Desktop + Handy).

## Schritt 2 – Windows-Seite einrichten

1. Ordner `desktop/` auf den Windows-PC kopieren (z. B. nach `C:\Tools\diktat`).
2. Doppelklick auf `install.bat` – installiert die Python-Abhängigkeiten.
3. `config.example.json` zu `config.json` kopieren und das `topic` durch deinen
   eigenen Namen ersetzen:
   ```json
   {
     "topic": "radiologie-diktat-7f3a92be4d1c9a04",
     "server": "https://ntfy.sh",
     "hotkey": "f9"
   }
   ```
4. Doppelklick auf `run.bat`. Das Fenster muss offen bleiben (kannst du
   minimieren). Du solltest sehen:
   ```
   [ntfy] Verbunden. Warte auf Nachrichten.
   [hotkey] F9 drücken, um das letzte Diktat einzufügen.
   ```

### Beim Windows-Start automatisch laden (optional)

`Win + R` → `shell:startup` → `run.bat` als Verknüpfung dort ablegen.

## Schritt 3 – Handy-Seite einrichten

Die PWA muss von einer **HTTPS-URL** geladen werden, damit Share-Target und
Service Worker funktionieren. Drei einfache Hosting-Optionen:

**Option A – GitHub Pages:** In den Repo-Settings Pages aktivieren und Branch
auswählen. PWA liegt dann unter
`https://<user>.github.io/<repo>/dictation-bridge/mobile/`.

**Option B – Cloudflare Pages:** Auf [pages.cloudflare.com](https://pages.cloudflare.com)
Account anlegen, Repo verbinden, Build-Befehl leer lassen, Output-Verzeichnis
`dictation-bridge/mobile`.

**Option C – Lokal mit ngrok/Tailscale Funnel:** Nur wenn du sowieso einen
Tunnel hast.

### Installation auf dem Handy

1. PWA-URL in Chrome auf Android öffnen.
2. Drei-Punkte-Menü → „Zum Startbildschirm hinzufügen" → bestätigen.
3. App vom Startbildschirm öffnen → unter „Einstellungen" das **selbe Topic**
   wie auf dem Desktop eintragen → „Speichern".

## Schritt 4 – Verwenden

### Workflow A – aus Claude teilen (am elegantesten)

1. In der Claude-App diktieren / chatten wie gewohnt.
2. Antwort lange drücken → „Teilen" → **Diktat → Desktop** wählen.
3. Text füllt sich automatisch. Einmal „An Desktop senden" antippen.
4. Cursor am Desktop in das Befundfeld setzen → `F9`.

### Workflow B – direkt diktieren

1. PWA öffnen → 🎤 Diktat → sprechen.
2. ⏹ Stop → „An Desktop senden".
3. Am Desktop `F9`.

### Workflow C – Copy & Paste

1. Beliebigen Text auf dem Handy kopieren.
2. PWA öffnen → „Aus Zwischenablage" → „An Desktop senden".

## Datenschutz

- Der Text läuft über `ntfy.sh`. Für persönliche Notizen unkritisch, **für
  echte Patientendaten ungeeignet** (kein Auftragsverarbeitungsvertrag).
- Wenn du Patientendaten brauchst: eigenen `ntfy`-Server hosten
  (z. B. auf einem kleinen Server im Praxisnetz) und in `config.json` +
  PWA-Einstellungen den Server-Endpoint umstellen. Alles andere bleibt gleich.
- Wähle den Topic-Namen lang und zufällig (≥ 16 Zeichen).

## Fehlerbehebung

- **Keine Reaktion auf F9:** Listener-Fenster offen? Steht „Verbunden"?
  Topic auf beiden Seiten identisch?
- **„Bitte zuerst Topic setzen":** In der PWA unter Einstellungen Topic
  eintragen und speichern.
- **Antivirus blockiert `keyboard`-Modul:** Manche Virenscanner halten globale
  Hotkey-Module für Keylogger. Ordner in die Ausnahmeliste aufnehmen.
- **Share-Target taucht nicht im Teilen-Menü auf:** PWA muss installiert sein
  (nicht nur als Tab offen). Erst „Zum Startbildschirm hinzufügen", dann
  einmal die App starten.
- **Diktat hört nicht zu:** In Chrome Mikrofon-Berechtigung für die PWA-Domain
  erlauben.
