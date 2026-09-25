Set-Location "D:\website\newaitools.online"
Get-Content -Path "scripts\blog-prompt.txt" -Raw | agy --dangerously-skip-permissions *> "D:\website\newaitools.online\scripts\last-run.log"
