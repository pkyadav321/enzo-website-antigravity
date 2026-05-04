import React, { useEffect } from 'react';
import { portfolioCategories } from '../data/portfolio';

const PortfolioMain = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh', padding: '120px 2rem 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <a href="#/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
          ← Back to Home
        </a>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">FULL PORTFOLIO</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Our Complete Work</h2>
          <p style={{ color: '#9ca3af' }}>Explore all our creative projects across multiple disciplines.</p>
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
