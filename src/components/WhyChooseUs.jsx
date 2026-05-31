import React from 'react';

const WhyChooseUs = () => (
  <section id="why-us" style={{ background: 'transparent', padding: '120px 0' }}>
    <div className="container">
      <div className="reveal section-header" style={{ textAlign: 'center' }}>
        <span className="section-label">Why The Enzo Media</span>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', color: 'var(--text-primary)', marginBottom: '2rem', maxWidth: '1200px', margin: '0 auto 2rem' }}>
          Tired of agencies that overpromise <br className="hide-mobile" />
          and <span className="text-accent">underdeliver?</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          You don't need another report showing "impressions". You need qualified leads, foot traffic, and measurable revenue. We exist to fix the broken agency model.
        </p>
        <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Book a Strategy Call
        </button>
      </div>

      <div className="why-grid reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {[
            { title: 'Stop Burning Ad Spend', desc: 'Every campaign is meticulously tracked and tied directly to your business outcomes. We celebrate revenue, not reach.' },
            { title: 'Startup Speed Execution', desc: 'No bloated delays. Campaigns go live in days. Creatives delivered on time, every time.' },
            { title: 'Scroll-Stopping Creative', desc: 'Our in-house team builds premium assets. In a crowded feed, average simply does not convert.' },
            { title: 'Radical Transparency', desc: 'Live dashboards, honest conversations, zero smoke and mirrors. You always know where your money goes.' },
          ].map((r) => (
            <div key={r.title} className="why-card">
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
    </div>
  </section>
);

export default WhyChooseUs;
