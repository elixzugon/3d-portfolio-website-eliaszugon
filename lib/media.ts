export const isDirectVideoFile = (url?: string) => Boolean(url && /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url))

export const getVideoPosterUrl = (url?: string) => {
  if (!url || !url.startsWith('/') || !isDirectVideoFile(url)) return undefined

  const pathname = url.split(/[?#]/)[0]
  let decodedPath = pathname

  try {
    decodedPath = decodeURIComponent(pathname)
  } catch {
    decodedPath = pathname
  }

  const pathWithoutExtension = decodedPath.replace(/^\/+/, '').replace(/\.[^/.]+$/, '')
  const slug = pathWithoutExtension
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()

  return slug ? `/video-posters/${slug}.jpg` : undefined
}
