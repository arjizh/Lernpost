@echo off
REM Installiert Python-Abhaengigkeiten fuer den Diktat-Listener.
where python >nul 2>nul
if errorlevel 1 (
  echo Python wurde nicht gefunden. Bitte installiere Python 3.10+ von https://python.org
  echo Wichtig: Beim Installer "Add Python to PATH" aktivieren.
  pause
  exit /b 1
)
python -m pip install --upgrade pip
python -m pip install -r "%~dp0requirements.txt"
echo.
echo Fertig. Naechster Schritt:
echo   1. Kopiere config.example.json zu config.json
echo   2. Setze ein eigenes langes "topic"
echo   3. Doppelklick auf run.bat
pause
