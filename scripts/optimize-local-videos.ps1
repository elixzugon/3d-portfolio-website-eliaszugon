$ErrorActionPreference = 'Stop'

$workspace = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$publicRoot = Join-Path $workspace 'public'
$backupRoot = Join-Path $workspace '.media-originals\videos'

function Resolve-Ffmpeg() {
  $command = Get-Command ffmpeg -ErrorAction SilentlyContinue
  if ($command) {
    return $command.Source
  }

  $staticPath = node -e "try { process.stdout.write(require('ffmpeg-static') || '') } catch {}"
  if ($staticPath) {
    return $staticPath
  }

  throw "ffmpeg was not found. Install ffmpeg globally or run: npm install --no-save --legacy-peer-deps ffmpeg-static"
}

$ffmpeg = Resolve-Ffmpeg

function Assert-InWorkspace([string] $Path) {
  $resolved = [IO.Path]::GetFullPath($Path)
  if (!$resolved.StartsWith($workspace, [StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to write outside workspace: $resolved"
  }
  return $resolved
}

New-Item -ItemType Directory -Force -Path (Assert-InWorkspace $backupRoot) | Out-Null

$videos = Get-ChildItem -Path $publicRoot -Recurse -File -Include *.mp4 |
  Where-Object { $_.Length -gt 8MB } |
  Sort-Object Length -Descending

$results = @()

foreach ($video in $videos) {
  $sourcePath = Assert-InWorkspace $video.FullName
  $relative = $sourcePath.Substring($workspace.Length).TrimStart('\', '/')
  $backupPath = Assert-InWorkspace (Join-Path $backupRoot $relative)
  $tempPath = Assert-InWorkspace "$sourcePath.optimized.mp4"

  New-Item -ItemType Directory -Force -Path (Split-Path $backupPath) | Out-Null
  if (!(Test-Path -LiteralPath $backupPath)) {
    Copy-Item -LiteralPath $sourcePath -Destination $backupPath
  }

  $oldSize = (Get-Item -LiteralPath $sourcePath).Length

  & $ffmpeg -y -hide_banner -loglevel error -i $sourcePath `
    -vf "scale='min(1080,iw)':-2,fps='min(30,source_fps)'" `
    -c:v libx264 -preset medium -crf 28 -maxrate 2600k -bufsize 5200k `
    -pix_fmt yuv420p -movflags +faststart `
    -c:a aac -b:a 128k `
    $tempPath

  if (!(Test-Path -LiteralPath $tempPath)) {
    throw "No optimized output created for $relative"
  }

  $newSize = (Get-Item -LiteralPath $tempPath).Length
  if ($newSize -le 0) {
    throw "Optimized output is empty for $relative"
  }

  [IO.File]::Copy($tempPath, $sourcePath, $true)
  [IO.File]::Delete($tempPath)

  $results += [pscustomobject]@{
    Path = $relative
    OldMB = [math]::Round($oldSize / 1MB, 2)
    NewMB = [math]::Round($newSize / 1MB, 2)
    SavedMB = [math]::Round(($oldSize - $newSize) / 1MB, 2)
  }
}

$results | Format-Table -AutoSize
$totalOld = ($results | Measure-Object -Property OldMB -Sum).Sum
$totalNew = ($results | Measure-Object -Property NewMB -Sum).Sum
"TOTAL OLD MB: {0}" -f ([math]::Round($totalOld, 2))
"TOTAL NEW MB: {0}" -f ([math]::Round($totalNew, 2))
"TOTAL SAVED MB: {0}" -f ([math]::Round($totalOld - $totalNew, 2))
