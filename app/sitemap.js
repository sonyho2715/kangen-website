export default function sitemap() {
  const baseUrl = 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app';

  const routes = [
    '',
    '/water-types',
    '/tools',
    '/business',
    '/gallery',
    '/quiz',
    '/resources',
    '/privacy-policy',
    '/terms-of-service',
    '/disclaimer',
    '/blog/10-benefits-kangen-water',
    '/blog/understanding-ph-levels',
    '/blog/kangen-vs-bottled-water',
    '/blog/cooking-with-kangen-water',
    '/blog/beauty-water-skin-care',
    '/blog/molecular-hydrogen-science',
    '/blog/natural-cleaning-kangen-water',
    '/blog/kangen-water-athletes',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('/blog/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1.0 :
             route === '/quiz' || route === '/business' ? 0.9 :
             route.includes('/blog/') ? 0.6 : 0.8,
  }));
}
