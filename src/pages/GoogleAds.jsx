import React, { useEffect } from 'react';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const GoogleAds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sub-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label reveal">Paid Search // ROI</span>
          <h1 className="reveal stagger-1 page-title">
            The Premier <span className="text-accent">Google Ads</span> Agency.
          </h1>
          <p className="reveal stagger-2 about-description">
            Stop wasting budget on clicks that don't convert. Our Google Ads experts engineer high-performance campaigns that target intent, maximize ROI, and scale your business with surgical precision.
          </p>
          <div className="reveal stagger-3" style={{ marginTop: '3rem' }}>
             <Link to="/#contact" className="btn-primary">Optimize Your Ad Spend ↗</Link>
          </div>
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
                Whether it's Search, Display, or YouTube Ads, we provide radical transparency so you know exactly where every rupee of your ad spend is going. We've helped 50+ clients achieve radical growth.
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

      {/* Quote */}
      <section className="quote-section">
        <div className="container">
          <div className="reveal">
            <h2 className="big-quote">
              "WE DON'T MANAGE ADS. WE MANAGE <span className="text-accent">PROFITABILITY.</span>"
            </h2>
            <div className="quote-footer">
                <div className="quote-line" />
                <span className="quote-tag">PERFORMANCE CORE</span>
                <div className="quote-line" />
            </div>
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
              { title: 'Search Ads', desc: 'Capturing intent-driven customers exactly when they are looking for your services in Varanasi.' },
              { title: 'Remarketing', desc: 'Bringing back lost visitors and turning them into loyal customers using advanced tracking.' },
              { title: 'Conversion Tracking', desc: 'Pixel-perfect tracking to ensure every conversion is attributed correctly to your ROI.' }
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
      
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default GoogleAds;
