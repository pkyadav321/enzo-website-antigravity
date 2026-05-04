import React from 'react';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';

const About = () => (
  <main className="about-page">
    {/* Hero Section */}
    <section className="about-hero">
      <div className="container">
        <span className="section-label reveal">Our Identity</span>
        <h1 className="reveal stagger-1 about-title">
          Welcome to <span className="text-accent">The Enzo Media.</span>
        </h1>
        <p className="reveal stagger-2 about-description">
          The Enzo Media is more than an agency. We are a high-performance partner for brands that refuse to settle for mediocre results. We blend brutalist design with data-driven strategy.
        </p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="about-section methodology-section">
      <div className="container">
        <div className="about-grid">
          <div className="reveal-left">
            <h2 className="about-sub-title">
              The Enzo <span className="text-accent">Methodology.</span>
            </h2>
            <p className="about-text">
              We don't follow trends; we set them. The Enzo Media was founded on the belief that premium creative and performance data should never be separated.
            </p>
            <p className="about-text">
              Today, we help ambitious businesses across India dominate their markets by providing them with the same high-level strategy used by global giants, tailored for rapid local scaling.
            </p>
          </div>
          <div className="reveal stats-grid">
            {[
              { value: '100K+', label: 'Leads Generated' },
              { value: '50+', label: 'Clients Served' },
              { value: '3+', label: 'Years in Market' },
              { value: '3X', label: 'Avg ROI Delivered' },
            ].map((s, i) => (
              <div key={i} className={`stat-card stagger-${i+1}`}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Big Typography Quote */}
    <section className="quote-section">
        <div className="container">
            <div className="reveal">
                <h2 className="big-quote">
                    "WE DON'T JUST MANAGE AD SPEND. WE ENGINEER <span className="text-accent">MARKET DOMINANCE.</span>"
                </h2>
                <div className="quote-footer">
                    <div className="quote-line" />
                    <span className="quote-tag">ENZO STRATEGY CORE</span>
                    <div className="quote-line" />
                </div>
            </div>
        </div>
    </section>

    <ClientLogos />

    {/* Values Section */}
    <section className="about-section values-section">
      <div className="container">
        <div className="reveal section-header-centered">
          <span className="section-label">Core Values</span>
          <h2 className="about-sub-title">What We Stand <span className="text-accent">For.</span></h2>
        </div>

        <div className="values-grid">
            {[
                { title: 'Radical Transparency', desc: 'No hidden metrics. No fluff. Just raw data and real results delivered weekly.' },
                { title: 'Velocity First', desc: 'In digital, speed is a weapon. We execute and optimize faster than the competition.' },
                { title: 'Obsessive Quality', desc: 'Every pixel and every line of copy is refined until it meets the Enzo standard.' }
            ].map((v, i) => (
                <div key={i} className={`reveal stagger-${i+1} value-item`}>
                    <h3 className="value-title">{v.title}</h3>
                    <p className="value-desc">{v.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="about-section mission-section">
      <div className="container">
        <div className="mission-grid">
          <div className="reveal stagger-1">
            <h3 className="mission-title">The Mission.</h3>
            <p className="mission-text">
              To eliminate the noise in digital marketing and provide brands with a clear, predictable path to scale. We act as an extension of your team, not just another vendor.
            </p>
          </div>
          <div className="reveal stagger-2">
            <h3 className="mission-title">The Vision.</h3>
            <p className="mission-text">
              To become the global gold standard for Creative Strategy—where every campaign is a masterpiece of both design and performance engineering.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Testimonials />

    {/* CTA */}
    <section className="about-cta-section">
      <div className="container">
        <h2 className="reveal about-cta-title">Ready to Join the <span className="text-accent">Elite?</span></h2>
        <button className="btn-primary reveal stagger-1" onClick={() => window.location.hash = '#contact'}>
          Let's Start Your Journey ↗
        </button>
      </div>
    </section>
  </main>
);

export default About;
