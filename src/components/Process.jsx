import React from 'react';

const steps = [
  { num: '01', title: 'Discovery Audit', desc: 'Deep dive into your business, audience, and competitive landscape to find the real growth levers.' },
  { num: '02', title: 'Growth Blueprint', desc: 'A custom strategy roadmap built around your specific market, budget, and goals.' },
  { num: '03', title: 'Relentless Execution', desc: 'Campaigns launched with precision. Creatives built to stop the scroll and convert at every stage.' },
  { num: '04', title: 'Optimize & Scale', desc: 'Test, learn, and compound. We double down on what works and kill what doesn\'t.' },
];

const Process = () => {
  return (
    <section id="process" style={{ background: '#050505', padding: '60px 0 120px' }}>
    <div className="container">

      {/* Centered header */}
      <div className="reveal" style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <span className="section-label">Our Process</span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.05em', color: '#fff', marginBottom: '2.5rem' }}>
          How <span className="text-italic-accent">It Works.</span>
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
          A proven four-step system that takes businesses from invisible to dominant in their market.
        </p>
      </div>

      {/* Process rows */}
      <div style={{ maxWidth: '1200px' }}>
        {steps.map((s, i) => (
          <div key={s.num} className={`process-row reveal stagger-${i + 1}`}>
            <div className="process-row-num">{s.num}</div>
            <div className="process-row-content">
              <h4 className="process-row-title">{s.title}</h4>
              <p className="process-row-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Process;
