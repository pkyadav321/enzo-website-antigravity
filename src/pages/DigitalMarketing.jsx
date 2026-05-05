import React, { useEffect } from 'react';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sub-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label reveal">Growth Engine // 2026</span>
          <h1 className="reveal stagger-1 page-title">
            Top-Tier <span className="text-accent">Digital Marketing</span> Agency in Varanasi.
          </h1>
          <p className="reveal stagger-2 about-description">
            We don't just "post" or "rank." We engineer growth engines. The Enzo Media helps businesses in Varanasi, Gonda, and Ayodhya scale using data-driven SEO, performance marketing, and high-impact strategy.
          </p>
          <div className="reveal stagger-3" style={{ marginTop: '3rem' }}>
             <Link to="/#contact" className="btn-primary">Get a Free Strategy Audit ↗</Link>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="about-section methodology-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <h2 className="about-sub-title">
                The Digital <span className="text-accent">Dominance Strategy.</span>
              </h2>
              <p className="about-text">
                Varanasi's market is evolving fast. To win, you need more than a website; you need a dominant digital presence. Our approach combines technical SEO with aggressive performance marketing to ensure your brand stays ahead of the competition.
              </p>
              <p className="about-text">
                From local startups in UP to national brands in Delhi NCR, we've helped 50+ clients achieve radical transparency in their marketing spend and real, measurable ROI.
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
              "RANKING #1 IS EASY. <span className="text-accent">STAYING #1</span> WHILE SCALING REVENUE IS THE ENZO WAY."
            </h2>
            <div className="quote-footer">
                <div className="quote-line" />
                <span className="quote-tag">STRATEGIC DOMINANCE</span>
                <div className="quote-line" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="about-section values-section">
        <div className="container">
          <div className="reveal section-header-centered">
            <span className="section-label">Core Capabilities</span>
            <h2 className="about-sub-title">Comprehensive <span className="text-accent">Marketing Stack.</span></h2>
          </div>

          <div className="values-grid">
            {[
              { title: 'Advanced SEO', desc: 'Dominating search results for high-intent keywords in Varanasi, Gonda, and national markets.' },
              { title: 'Performance Ads', desc: 'Direct-response campaigns designed to convert clicks into high-paying customers instantly.' },
              { title: 'Strategic Content', desc: 'High-end editorial storytelling that builds authority and deep trust with your audience.' }
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

export default DigitalMarketing;
