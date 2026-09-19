Copy-Item "C:\Users\oksha\Downloads\Forge Hex.mrpack" "$env:TEMP\pack.zip" -Force
Expand-Archive "$env:TEMP\pack.zip" -DestinationPath "$env:TEMP\mrpack" -Force
$idx = Get-Content "$env:TEMP\mrpack\modrinth.index.json" -Raw | ConvertFrom-Json
foreach ($f in $idx.files) {
  if ($f.downloads[0] -match 'data/([^/]+)/versions/([^/]+)/') {
    packwiz modrinth add --project-id $Matches[1] --version-id $Matches[2] -y
  }
}
packwiz refresh