$ErrorActionPreference = 'Stop'

$workspace = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$publicRoot = Join-Path $workspace 'public'
$posterRoot = Join-Path $publicRoot 'video-posters'

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

function Get-Slug([string] $PathWithoutExtension) {
  $slug = [regex]::Replace($PathWithoutExtension, '[^a-zA-Z0-9]+', '-').Trim('-').ToLowerInvariant()
  return $slug
}

New-Item -ItemType Directory -Force -Path (Assert-InWorkspace $posterRoot) | Out-Null

$videos = Get-ChildItem -Path $publicRoot -Recurse -File -Include *.mp4 |
  Where-Object { $_.FullName -notlike '*\video-posters\*' } |
  Sort-Object FullName

$results = @()

foreach ($video in $videos) {
  $sourcePath = Assert-InWorkspace $video.FullName
  $relative = $sourcePath.Substring($publicRoot.Length).TrimStart('\', '/')
  $withoutExtension = [IO.Path]::ChangeExtension($relative, $null)
  $posterPath = Assert-InWorkspace (Join-Path $posterRoot "$(Get-Slug $withoutExtension).jpg")

  $seekTime = '00:00:01'
  if ($relative -ieq 'motiongraphics\ajedrez.mp4') {
    $seekTime = '00:00:09'
  }

  & $ffmpeg -y -hide_banner -loglevel error -ss $seekTime -i $sourcePath `
    -frames:v 1 `
    -vf "scale='min(1280,iw)':-2" `
    -q:v 4 `
    $posterPath

  $results += [pscustomobject]@{
    Video = $relative
    Poster = $posterPath.Substring($publicRoot.Length).TrimStart('\', '/')
    KB = [math]::Round((Get-Item -LiteralPath $posterPath).Length / 1KB, 1)
  }
}

$results | Format-Table -AutoSize
