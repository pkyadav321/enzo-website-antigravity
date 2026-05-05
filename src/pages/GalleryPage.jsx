import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioCategories } from '../data/portfolio';

export default function GalleryPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Flatten all images from all categories into one array for the gallery
  const allImages = portfolioCategories.flatMap(category => 
    category.images.map(img => ({
      src: img,
      category: category.name,
      color: category.color
    }))
  );

  return (
    <main className="sub-page">
      <div className="container">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <div className="section-header-centered">
          <span className="section-label reveal">Portfolio Gallery</span>
          <h1 className="reveal page-title">
            Our <span className="text-accent">Work Archive.</span>
          </h1>
          <p className="page-description reveal">
            A curated archive of our most impactful creative solutions across all industries.
          </p>
        </div>

        <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
          {allImages.map((item, index) => (
            <div key={index} className={`gallery-item reveal stagger-${(index % 5) + 1}`} style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <div className="gallery-card" style={{ position: 'relative', height: '350px' }}>
                <img src={item.src} alt={`${item.category} work`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                  <span className="gallery-tag" style={{ background: item.color || '#e8352a', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

