import { Routes, Route } from 'react-router-dom';

const siteUrl = 'https://9lmnts.studio';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' }
];

export function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>`).join('')}
</urlset>`;

  return sitemap;
}

// For development, you can save this to public/sitemap.xml
export const sitemapContent = generateSitemap();
