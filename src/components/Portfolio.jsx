import React, { useState } from 'react';
import { portfolioCategories } from '../data/portfolio';

const CATEGORY_LABELS = {
  brochure: 'Brochure Design',
  graphics: 'Graphics',
  print: 'Print Design',
  'social-media': 'Social Media Creative',
};

/* Build flat array with category info on each image */
const buildItems = () => {
  const items = [];
  portfolioCategories.forEach((cat) => {
    const catName = CATEGORY_LABELS[cat.id] || cat.name;
    items.push({ type: 'label', text: catName });
    cat.images.forEach((img, i) => {
      items.push({ type: 'img', src: img, alt: `${catName} ${i + 1}`, category: catName });
    });
  });
  return items;
};

const allItems = buildItems();

const ImageCard = ({ src, alt, category }) => (
  <a href={src} target="_blank" rel="noopener noreferrer" className="portfolio-card-3d">
    <img src={src} alt={alt} draggable="false" />
    <div className="portfolio-card-overlay">
      <span className="portfolio-card-category">{category}</span>
    </div>
  </a>
);

const Portfolio = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section id="portfolio" style={{ background: 'transparent', padding: '60px 0 30px' }}>
      <div className="reveal container" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <span className="section-label" style={{ display: 'inline-block' }}>CASE STUDIES</span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
          Results we're <em className="text-italic-accent" style={{ textTransform: 'lowercase' }}>proud of.</em>
        </h2>
        <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7, marginTop: '1rem' }}>
          Brands we've helped grow — from identity to revenue. Hover to pause.
        </p>
      </div>

      <div
        className="portfolio-marquee-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="portfolio-marquee-track"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {/* Original set */}
          {allItems.map((item, i) =>
            item.type === 'label' ? (
              <div key={`a-label-${i}`} className="portfolio-label-card">
                <span className="portfolio-label-text">{item.text}</span>
              </div>
            ) : (
              <ImageCard key={`a-img-${i}`} src={item.src} alt={item.alt} category={item.category} />
            )
          )}
          {/* Duplicate for seamless loop */}
          {allItems.map((item, i) =>
            item.type === 'label' ? (
              <div key={`b-label-${i}`} className="portfolio-label-card">
                <span className="portfolio-label-text">{item.text}</span>
              </div>
            ) : (
              <ImageCard key={`b-img-${i}`} src={item.src} alt={item.alt} category={item.category} />
            )
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <a href="https://www.behance.net/prdpcrts" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          View Full Portfolio on Behance ↗
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
