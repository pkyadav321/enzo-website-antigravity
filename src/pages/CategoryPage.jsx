import React, { useEffect } from 'react';
import { portfolioCategories } from '../data/portfolio';

const CategoryPage = ({ category }) => {
  useEffect(() => { window.scrollTo(0, 0); }, [category]);

  const current = portfolioCategories.find(c => c.id === category);
  if (!current) { window.location.hash = '#/work'; return null; }

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', padding: '120px 2rem 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <a href="#/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
          ← Back to Portfolio
        </a>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
          {current.name}
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: '3rem' }}>Explore our complete collection of {current.name.toLowerCase()} projects.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {current.images.map((img, i) => (
            <div key={i} className="glass-card" style={{ padding: 0, overflow: 'hidden', borderRadius: '12px' }}>
              <img src={img} alt={`${current.name} ${i + 1}`} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
