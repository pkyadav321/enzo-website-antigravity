import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioCategories } from '../data/portfolio';

const PortfolioMain = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="sub-page">
      <div className="container">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <div className="section-header-centered">
          <span className="section-label">FULL PORTFOLIO</span>
          <h1 className="reveal page-title">Our Complete Work</h1>
          <p className="page-description">Explore all our creative projects across multiple disciplines.</p>
        </div>

        {/* Featured Case Study */}
        <section className="featured-case-study reveal" style={{ marginBottom: '8rem', padding: '0' }}>
          <div className="card featured-card-grid" style={{ overflow: 'hidden' }}>
            <div className="featured-content" style={{ padding: '4rem' }}>
              <span className="section-label" style={{ marginBottom: '1rem' }}>Featured Case Study</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: '1.1' }}>Sambhala <span className="text-accent">Orchard & Agro.</span></h2>
              <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
                A premium branding exercise for a traditional agricultural brand, reimagined for the modern era.
              </p>
              <Link to="/casestudy/sambhala-orchard" className="btn-primary">View Case Study ↗</Link>
            </div>
            <div style={{ background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
              <img src="/branding/SAMBHALAORCHARD&AGROENGLISHFinal.png" alt="Sambhala Branding" style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
            </div>
          </div>
        </section>
        {portfolioCategories.map((category, ci) => (
          <div key={ci} style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{category.name}</h3>
              <Link to={`/work/${category.id}`} style={{ fontSize: '0.85rem', color: '#dc2626', fontWeight: 600 }}>View All →</Link>
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
