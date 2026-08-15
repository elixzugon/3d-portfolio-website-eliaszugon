$ErrorActionPreference = 'Stop'

$workspace = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$galleryRoot = Join-Path $workspace 'public\homepage-gallery-images'
$backupRoot = Join-Path $workspace '.media-originals\homepage-gallery-images'

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

$images = Get-ChildItem -Path $galleryRoot -File |
  Where-Object { $_.Extension -match '^\.(jpg|jpeg|png)$' } |
  Sort-Object Name

$results = @()

foreach ($image in $images) {
  $sourcePath = Assert-InWorkspace $image.FullName
  $backupPath = Assert-InWorkspace (Join-Path $backupRoot $image.Name)
  $outputPath = Assert-InWorkspace (Join-Path $galleryRoot "$($image.BaseName).webp")

  if (!(Test-Path -LiteralPath $backupPath)) {
    Copy-Item -LiteralPath $sourcePath -Destination $backupPath
  }

  $oldSize = $image.Length

  & $ffmpeg -y -hide_banner -loglevel error -i $sourcePath `
    -frames:v 1 `
    -vf "scale='min(1800,iw)':-2" `
    -c:v libwebp -quality 82 -compression_level 6 `
    $outputPath

  if (!(Test-Path -LiteralPath $outputPath)) {
    throw "No optimized image created for $($image.Name)"
  }

  $newSize = (Get-Item -LiteralPath $outputPath).Length
  if ($newSize -le 0) {
    throw "Optimized image is empty for $($image.Name)"
  }

  [IO.File]::Delete($sourcePath)

  $results += [pscustomobject]@{
    Image = $image.Name
    WebP = "$( $image.BaseName ).webp".Replace(' ', '')
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
