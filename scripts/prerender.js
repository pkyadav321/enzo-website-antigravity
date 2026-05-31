import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();
const distPath = path.resolve(__dirname, '../dist');

// Serve the dist directory
app.use(express.static(distPath));
// Fallback to index.html for SPA
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const routes = [
  '/',
  '/services',
  '/portfolio',
  '/privacy-policy',
  '/terms-and-conditions',
  '/about',
  '/work',
  '/gallery',
  '/blog',
  '/digital-marketing-varanasi',
  '/google-ads-agency',
  '/social-media-marketing',
  '/marketing-agency-varanasi',
  '/marketing-agency-ayodhya',
  '/marketing-agency-gonda',
  '/marketing-agency-prayagraj',
  '/marketing-agency-ghaziabad',
  '/services/performance-ads',
  '/services/social-media',
  '/services/high-converting-video',
  '/services/conversion-web-design',
  '/services/brand-creative',
  '/services/ecommerce-listing',
  '/blog/ai-importance-2026',
  '/blog/performance-creative',
  '/blog/best-digital-marketing-varanasi-2026',
  '/blog/facebook-ads-failing-2026',
  '/blog/real-estate-marketing-strategy-2026',
  '/blog/website-performance-seo-2026',
  '/blog/brand-identity-scaling-business',
  '/blog/b2b-lead-generation-strategies',
  '/blog/real-estate-digital-marketing-seo-2026',
  '/blog/local-seo-ai-trends-2026',
  '/casestudy/sambhala-orchard'
];

(async () => {
  const server = app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    
    try {
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
      
      for (const route of routes) {
        console.log(`Prerendering ${route}...`);
        await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Remove scripts from the generated HTML to prevent React from wiping out the DOM on hydrate
        // actually react hydrate expects the exact DOM, so we keep scripts but they will hydrate.
        let html = await page.content();
        
        // Wait, if it's vite, the module script will still run and hydrate.
        
        const filePath = route === '/' 
            ? path.join(distPath, 'index.html') 
            : path.join(distPath, route, 'index.html');
        const dirPath = path.dirname(filePath);
        
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        
        fs.writeFileSync(filePath, html);
      }
      
      await browser.close();
    } catch (e) {
      console.error(e);
    } finally {
      server.close();
      console.log('Prerendering complete!');
    }
  });
})();
