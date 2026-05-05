import React from 'react';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const DigitalMarketing = () => {
  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label reveal">Growth Solutions</span>
          <h1 className="reveal stagger-1 about-title">
            Top-Tier <span className="text-accent">Digital Marketing Agency in Varanasi.</span>
          </h1>
          <p className="reveal stagger-2 about-description">
            We don't just "post" or "rank." We engineer growth engines. The Enzo Media helps businesses in Varanasi and beyond scale using data-driven SEO, performance marketing, and high-impact strategy.
          </p>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="about-section methodology-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <h2 className="about-sub-title">
                Our Digital <span className="text-accent">Strategy.</span>
              </h2>
              <p className="about-text">
                Varanasi's market is evolving fast. To win, you need more than a website; you need a dominant digital presence. Our approach combines technical SEO with aggressive performance marketing to ensure your brand stays ahead.
              </p>
              <p className="about-text">
                From Gonda to Delhi NCR, we've helped 50+ clients achieve radical transparency in their marketing spend and real, measurable ROI.
              </p>
            </div>
            <div className="reveal stats-grid">
              {[
                { value: '300%', label: 'Avg Traffic Increase' },
                { value: '100K+', label: 'Leads Generated' },
                { value: '24/7', label: 'Monitoring' },
                { value: '10X', label: 'Potential ROI' },
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
              "RANKING #1 IS EASY. <span className="text-accent">STAYING #1</span> WHILE SCALING REVENUE IS THE ENZO WAY."
            </h2>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="about-section values-section">
        <div className="container">
          <div className="reveal section-header-centered">
            <span className="section-label">Core Capabilities</span>
            <h2 className="about-sub-title">Varanasi's Most Comprehensive <span className="text-accent">Marketing Stack.</span></h2>
          </div>

          <div className="values-grid">
            {[
              { title: 'Advanced SEO', desc: 'Dominating search results for high-intent keywords in Varanasi and beyond.' },
              { title: 'Performance Ads', desc: 'Direct-response campaigns designed to convert clicks into customers instantly.' },
              { title: 'Strategic Content', desc: 'Storytelling that builds authority and trust with your target audience.' }
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

export default DigitalMarketing;
