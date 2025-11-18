export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://kangen-website-rnsv4zf63-sony-hos-projects.vercel.app/sitemap.xml',
  };
}
