import React, { useEffect } from 'react';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sub-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label reveal">Brand Amplification // 2026</span>
          <h1 className="reveal stagger-1 page-title">
            Dynamic <span className="text-accent">Social Media</span> Marketing.
          </h1>
          <p className="reveal stagger-2 about-description">
            Your brand deserves more than just likes. We create viral content and high-growth social strategies that build community, drive engagement, and convert followers into loyal customers.
          </p>
          <div className="reveal stagger-3" style={{ marginTop: '3rem' }}>
             <Link to="/#contact" className="btn-primary">Scale Your Social Presence ↗</Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-section methodology-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <h2 className="about-sub-title">
                Attention is the <span className="text-accent">New Currency.</span>
              </h2>
              <p className="about-text">
                In today's social landscape, being ignored is the worst outcome. The Enzo Media specializes in brutalist, high-impact content that stops the scroll and demands attention from your target audience in Varanasi and beyond.
              </p>
              <p className="about-text">
                From Instagram Reels to LinkedIn thought leadership, we manage your brand's voice across all platforms. We've helped 50+ clients achieve radical visibility.
              </p>
            </div>
            <div className="reveal stats-grid">
              {[
                { value: '1M+', label: 'Monthly Reach' },
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
              "WE DON'T JUST POST. WE BUILD <span className="text-accent">MOVEMENTS.</span>"
            </h2>
            <div className="quote-footer">
                <div className="quote-line" />
                <span className="quote-tag">SOCIAL ACCELERATION</span>
                <div className="quote-line" />
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="about-section values-section">
        <div className="container">
          <div className="reveal section-header-centered">
            <span className="section-label">Our Social Stack</span>
            <h2 className="about-sub-title">Multi-Platform <span className="text-accent">Excellence.</span></h2>
          </div>

          <div className="values-grid">
            {[
              { title: 'Instagram & Facebook', desc: 'Visual storytelling and community building through viral content and optimized Meta ad strategies.' },
              { title: 'Short-Form Video', desc: 'High-production Reels and TikToks designed to capture maximum attention in the first 3 seconds.' },
              { title: 'Brand Identity', desc: 'Defining a unique voice and aesthetic that separates your brand from the digital noise.' }
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

export default SocialMedia;
