@echo off
cd /d "%~dp0"

git add -A
git diff --cached --quiet && (echo No changes, skip. & goto end)

for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm-ss"') do set TS=%%i
git commit -m "auto-save %TS%" >nul 2>&1
git push >nul 2>&1
echo [%TS%] saved and pushed to GitHub>>"%~dp0auto-save-log.txt"
echo Saved and pushed to GitHub.

:end
