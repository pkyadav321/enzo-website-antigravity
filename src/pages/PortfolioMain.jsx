import React, { useEffect } from 'react';
import { portfolioCategories } from '../data/portfolio';

const PortfolioMain = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="sub-page">
      <div className="container">
        <a href="#/" className="back-link">
          ← Back to Home
        </a>
        <div className="section-header-centered">
          <span className="section-label">FULL PORTFOLIO</span>
          <h1 className="reveal page-title">Our Complete Work</h1>
          <p className="page-description">Explore all our creative projects across multiple disciplines.</p>
        </div>
        {portfolioCategories.map((category, ci) => (
          <div key={ci} style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{category.name}</h3>
              <a href={`#/work/${category.id}`} style={{ fontSize: '0.85rem', color: '#dc2626', fontWeight: 600 }}>View All →</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {category.images.slice(0, 3).map((img, i) => (
                <div key={i} className="glass-card" style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={img} alt={`${category.name} ${i + 1}`} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://www.behance.net/prdpcrts" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Full Portfolio on Behance ↗
          </a>
        </div>
      </div>
    </main>
  );
};

export default PortfolioMain;
