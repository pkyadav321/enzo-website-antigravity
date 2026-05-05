import React from 'react';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const GoogleAds = () => {
  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label reveal">Performance Marketing</span>
          <h1 className="reveal stagger-1 about-title">
            The Premier <span className="text-accent">Google Ads Agency.</span>
          </h1>
          <p className="reveal stagger-2 about-description">
            Stop wasting budget on clicks that don't convert. Our Google Ads experts engineer high-performance campaigns that target intent, maximize ROI, and scale your business with surgical precision.
          </p>
        </div>
      </section>

      {/* PPC Section */}
      <section className="about-section methodology-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <h2 className="about-sub-title">
                Data-Driven <span className="text-accent">PPC Dominance.</span>
              </h2>
              <p className="about-text">
                At The Enzo Media, we don't just "run ads." We build conversion machines. We analyze every search term, optimize every landing page, and refine every bid to ensure you are winning the highest quality leads in Varanasi and across India.
              </p>
              <p className="about-text">
                Whether it's Search, Display, or YouTube Ads, we provide radical transparency so you know exactly where every rupee of your ad spend is going.
              </p>
            </div>
            <div className="reveal stats-grid">
              {[
                { value: '25%', label: 'Avg. CPA Reduction' },
                { value: '4X', label: 'Higher ROAS' },
                { value: '100%', label: 'Transparent Reporting' },
                { value: '5M+', label: 'Ad Spend Managed' },
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

      {/* Quote */}
      <section className="quote-section">
        <div className="container">
          <div className="reveal">
            <h2 className="big-quote">
              "WE DON'T MANAGE ADS. WE MANAGE <span className="text-accent">PROFITABILITY.</span>"
            </h2>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="about-section values-section">
        <div className="container">
          <div className="reveal section-header-centered">
            <span className="section-label">Our PPC Stack</span>
            <h2 className="about-sub-title">How We Deliver <span className="text-accent">Results.</span></h2>
          </div>

          <div className="values-grid">
            {[
              { title: 'Search Ads', desc: 'Capturing intent-driven customers exactly when they are looking for your services.' },
              { title: 'Remarketing', desc: 'Bringing back lost visitors and turning them into loyal customers.' },
              { title: 'Conversion Tracking', desc: 'Pixel-perfect tracking to ensure every conversion is attributed correctly.' }
            ].map((v, i) => (
              <div key={i} className={`reveal stagger-${i+1} value-item`}>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default GoogleAds;
