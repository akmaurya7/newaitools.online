$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -ExecutionPolicy Bypass -File D:\website\newaitools.online\scripts\run-daily-blog.ps1"
$trigger1 = New-ScheduledTaskTrigger -Daily -At "10:30AM"
$trigger2 = New-ScheduledTaskTrigger -Daily -At "6:30PM"
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable
Register-ScheduledTask -TaskName "Antigravity Daily Blog" -Action $action -Trigger @($trigger1, $trigger2) -Settings $settings -Force
