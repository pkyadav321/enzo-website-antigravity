import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domain = 'https://theenzomedia.com';

// User defined pages with priority
const userPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/services', priority: '0.8', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.5', changefreq: 'weekly' },
  { url: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
  { url: '/terms-and-conditions', priority: '0.5', changefreq: 'monthly' },
];

// Additional static pages in the project
const staticPages = [
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/work', priority: '0.7', changefreq: 'weekly' },
  { url: '/gallery', priority: '0.6', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'daily' },
  { url: '/marketing-agency-gonda', priority: '0.95', changefreq: 'weekly' },
  { url: '/marketing-agency-ayodhya', priority: '0.95', changefreq: 'weekly' },
  { url: '/marketing-agency-varanasi', priority: '0.7', changefreq: 'weekly' },
  { url: '/digital-marketing-varanasi', priority: '0.7', changefreq: 'weekly' },
  { url: '/google-ads-agency', priority: '0.9', changefreq: 'weekly' },
  { url: '/social-media-marketing', priority: '0.9', changefreq: 'weekly' },
  { url: '/marketing-agency-prayagraj', priority: '0.9', changefreq: 'weekly' },
  { url: '/marketing-agency-ghaziabad', priority: '0.9', changefreq: 'weekly' },
  { url: '/casestudy/sambhala-orchard', priority: '0.8', changefreq: 'weekly' },
];

// Dynamic Services (based on servicesData.js)
const dynamicServices = [
  'performance-ads',
  'social-media',
  'high-converting-video',
  'conversion-web-design',
  'brand-creative',
  'ecommerce-listing'
].map(id => ({ url: `/services/${id}`, priority: '0.7', changefreq: 'monthly' }));

// Dynamic Blog Posts (based on Blog.jsx / BlogPost.jsx)
const dynamicBlogs = [
  'best-digital-marketing-varanasi-2026',
  'facebook-ads-failing-2026',
  'real-estate-marketing-strategy-2026',
  'website-performance-seo-2026',
  'brand-identity-scaling-business',
  'b2b-lead-generation-strategies',
  'real-estate-digital-marketing-seo-2026',
  'local-seo-ai-trends-2026',
  'ai-importance-2026',
  'performance-creative'
].map(id => ({ url: `/blog/${id}`, priority: '0.6', changefreq: 'monthly' }));

// Dynamic Portfolio Categories (based on portfolio.js)
const dynamicPortfolio = [
  'brochure',
  'graphics',
  'print',
  'social-media'
].map(id => ({ url: `/work/${id}`, priority: '0.6', changefreq: 'monthly' }));

const allPages = [
  ...userPages,
  ...staticPages,
  ...dynamicServices,
  ...dynamicBlogs,
  ...dynamicPortfolio
];

// Remove duplicates if any (by url)
const uniquePages = Array.from(new Map(allPages.map(p => [p.url, p])).values());

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniquePages.map(page => `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const outputPath = path.resolve(publicDir, 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully at public/sitemap.xml');
