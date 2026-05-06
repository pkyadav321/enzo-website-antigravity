import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const BrandingCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Enzo Media",
    "image": "https://enzomedia.in/logo.png",
    "@id": "https://enzomedia.in",
    "url": "https://enzomedia.in",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Varanasi",
      "addressLocality": "Varanasi",
      "postalCode": "221001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.3176,
      "longitude": 82.9739
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/enzomedia",
      "https://www.instagram.com/enzomedia"
    ],
    "subjectOf": {
      "@type": "CreativeWork",
      "name": "Sambhala Orchard & Agro Branding Case Study",
      "description": "A premium branding exercise for Sambhala Orchard & Agro, focusing on modern visual identity and local resonance in Varanasi.",
      "url": "https://enzomedia.in/casestudy/sambhala-orchard"
    }
  };

  return (
    <main className="sub-page">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label reveal">Case Study // Branding</span>
          <h1 className="reveal stagger-1 page-title">
            Sambhala <span className="text-accent">Orchard & Agro.</span>
          </h1>
          <p className="reveal stagger-2 about-description">
            Reimagining the visual legacy of a premium agricultural brand with a focus on modern minimalism and local roots.
          </p>
        </div>
      </section>

      {/* The Brief Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <span className="section-label">The Brief</span>
              <h2 className="about-sub-title">Modernizing <span className="text-accent">Tradition.</span></h2>
              <p className="about-text">
                Sambhala Orchard & Agro approached us to revitalize their brand identity. The goal was to bridge the gap between their traditional agricultural roots and a premium, modern market positioning. They needed an identity that felt organic yet sophisticated.
              </p>
            </div>
            <div className="reveal stats-grid">
              <div className="stat-card stagger-1">
                <div className="stat-value">Client</div>
                <div className="stat-label">Sambhala Agro</div>
              </div>
              <div className="stat-card stagger-2">
                <div className="stat-value">Service</div>
                <div className="stat-label">Brand Identity</div>
              </div>
              <div className="stat-card stagger-3">
                <div className="stat-value">Timeline</div>
                <div className="stat-label">6 Weeks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="about-section methodology-section">
        <div className="container">
          <div className="reveal section-header-centered">
            <span className="section-label">Challenges</span>
            <h2 className="about-sub-title">Navigating the <span className="text-accent">Hurdles.</span></h2>
          </div>
          
          <div className="values-grid">
            <div className="reveal stagger-1 value-item">
              <h3 className="value-title">Outdated Visual Identity</h3>
              <p className="value-desc">
                The existing branding was inconsistent and failed to communicate the premium quality of their organic produce.
              </p>
            </div>
            <div className="reveal stagger-2 value-item">
              <h3 className="value-title">Lack of Local Connect</h3>
              <p className="value-desc">
                Despite being based in Varanasi, the brand felt disconnected from its geographical heritage and local consumers.
              </p>
            </div>
            <div className="reveal stagger-3 value-item">
              <h3 className="value-title">Fragmented Presence</h3>
              <p className="value-desc">
                Collaterals, packaging, and digital assets lacked a unified design language, leading to low brand recall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Strategy Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <span className="section-label">Execution Strategy</span>
              <h2 className="about-sub-title">The <span className="text-accent">Logic</span> of Design.</h2>
              <p className="about-text">
                Our strategy focused on 'Organic Elegance'. We utilized a palette of Deep Forest Green and Terracotta to symbolize growth and earthiness. 
              </p>
              <p className="about-text">
                <strong>Typography:</strong> We paired a modern serif typeface for headings (symbolizing heritage) with a clean geometric sans-serif for body text (symbolizing modernity).
              </p>
              <p className="about-text">
                <strong>Visual Language:</strong> We developed custom illustrations that mimic the topography of orchards, creating a unique texture for all brand collaterals.
              </p>
            </div>
            <div className="reveal-right">
              <img 
                src="/branding/SAMBHALAORCHARD&AGROLOGOCONCEPT.jpg" 
                alt="Logo Concept" 
                className="card"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="about-section values-section">
        <div className="container">
          <div className="reveal section-header-centered">
            <span className="section-label">Visual Showcase</span>
            <h2 className="about-sub-title">Brand <span className="text-accent">Artifacts.</span></h2>
          </div>

          <div className="values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="reveal stagger-1 card" style={{ overflow: 'hidden' }}>
              <img src="/branding/SAMBHALAORCHARD&AGROENGLISHFinal.png" alt="Final Logo" style={{ width: '100%' }} />
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Primary Visual</h4>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>The final approved logo in its primary configuration.</p>
              </div>
            </div>
            {/* We can add more mockups here if they existed as PNGs, for now using what we have */}
          </div>
        </div>
      </section>

      {/* PDF Download CTA Section */}
      <section className="about-section" style={{ background: 'rgba(232, 53, 42, 0.03)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="section-label">Guidelines</span>
            <h2 className="about-sub-title">Full Brand <span className="text-accent">Guidelines.</span></h2>
            <p className="about-text" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
              Deep dive into the complete brand system, including color codes, typography rules, and usage standards.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/branding/SAMBHALAORCHARD&AGROLO.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                View Guidelines (PDF) ↗
              </a>
              <a 
                href="/branding/SAMBHALAORCHARD&AGROLOGOS.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-ghost"
              >
                Logo Set (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default BrandingCaseStudy;
