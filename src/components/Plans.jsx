import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '₹7,999',
    features: ['Strategy Call', 'Brand Audit', 'Social Media Strategy', 'Content Calendar', 'Monthly Reports', '12 Posts / 4 Reels'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹14,999',
    badge: 'POPULAR',
    features: ['Everything in Starter', 'Advanced Strategy', 'Ad Campaign Management', 'Creative Design', 'Analytics & Reporting', '20 Posts / 8 Reels'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '₹24,999',
    features: ['Everything in Growth', 'Full-Funnel Strategy', 'Multi-Platform Campaigns', 'Conversion Optimization', 'Dedicated Manager', '30 Posts / 12 Reels'],
    featured: false,
  },
];

const Plans = () => (
  <section id="pricing" style={{ background: 'var(--section-bg)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '4rem', marginBottom: '4rem', alignItems: 'flex-end' }}>
        <div>
          <span className="section-label">PLANS</span>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 900, lineHeight: 1.15 }}>
            Built to <em className="text-italic-accent">scale you.</em>
          </h2>
        </div>
        <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7 }}>
          Transparent pricing. No hidden fees. Pick the plan that fits your growth stage.
        </p>
      </div>

      <div className="plans-grid">
        {plans.map((p) => (
          <div key={p.name} className={`plan-col${p.featured ? ' featured' : ''}`}>
            {p.badge && <div className="plan-badge">{p.badge}</div>}
            <div className="plan-name">{p.name}</div>
            <div className="plan-price">{p.price}<span>/mo</span></div>
            <div className="plan-features">
              {p.features.map((f) => (
                <div key={f} className="plan-feature">
                  <span className="plan-feature-dash">—</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button
              className={p.featured ? 'btn-primary' : 'btn-ghost'}
              style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', borderRadius: '50px' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get started ↗
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Plans;
