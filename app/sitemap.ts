import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.eliaszugon.com'

const routes = [
  '',
  '/about',
  '/projects',
  '/motion-graphics',
  '/photography',
  '/video',
  '/specializations/fashion',
  '/specializations/3d-animation',
  '/specializations/augmented-reality',
  '/privacy',
  '/terms',
  '/accessibility',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(route => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
