import { MetadataRoute } from 'next'
import cities from '@/data/seo_cities.json'

export default function sitemap(): MetadataRoute.Sitemap {
  // On utilise une URL relative pour que Next.js gère le domaine automatiquement
  // ou on peut définir une variable d'environnement
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://votre-domaine.fr'

  const cityEntries: MetadataRoute.Sitemap = (cities as any[]).map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...cityEntries,
  ]
}
