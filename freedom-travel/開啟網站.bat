@echo off
cd /d "%~dp0"
start "" "http://localhost:8088/index.html"
echo.
echo  自由行網站執行中... 請勿關閉此視窗（關閉即停止網站）
echo  瀏覽器若沒自動開啟，請手動開： http://localhost:8088/index.html
echo.
python -m http.server 8088
