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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Varanasi",
      "addressLocality": "Varanasi",
      "postalCode": "221001",
      "addressCountry": "IN"
    },
    "subjectOf": {
      "@type": "CreativeWork",
      "name": "Sambhala Orchard & Agro Branding Case Study",
      "description": "Comprehensive branding process for Sambhala Orchard & Agro by Enzo Media.",
      "url": "https://enzomedia.in/casestudy/sambhala-orchard"
    }
  };

  return (
    <main className="sub-page">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* ─── HERO SECTION ─── */}
      <section className="about-hero" style={{ paddingBottom: '0' }}>
        <div className="container">
          <span className="section-label reveal">Case Study // 2026</span>
          <h1 className="reveal stagger-1 page-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 9rem)' }}>
            Sambhala <span className="text-accent">Orchard.</span>
          </h1>
          <div className="reveal stagger-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', marginTop: '4rem', alignItems: 'end' }}>
            <p className="about-description" style={{ fontSize: '1.2rem', margin: '0' }}>
              Transforming a legacy agricultural brand into a modern organic powerhouse through strategic visual storytelling.
            </p>
            <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              <div className="stat-card">
                <div className="stat-value" style={{ fontSize: '1.5rem' }}>Sector</div>
                <div className="stat-label">Agro Tech</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ fontSize: '1.5rem' }}>Deliverables</div>
                <div className="stat-label">Full Identity</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ fontSize: '1.5rem' }}>Region</div>
                <div className="stat-label">North India</div>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal stagger-3" style={{ marginTop: '6rem', height: '60vh', overflow: 'hidden' }}>
          <img 
            src="/branding/SAMBHALAORCHARD&AGROLOGOCONCEPT.jpg" 
            alt="Hero Visual" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
          />
        </div>
      </section>

      {/* ─── THE CHALLENGE ─── */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <span className="section-label">The Challenge</span>
              <h2 className="about-sub-title">Bridging the <span className="text-accent">Generational Gap.</span></h2>
              <p className="about-text">
                Sambhala Orchard & Agro had a reputation for quality but a visual identity that felt stuck in the 90s. As they planned to expand into direct-to-consumer organic exports, they needed a brand that whispered "Premium" while shouting "Organic".
              </p>
            </div>
            <div className="reveal-right">
              <div className="card" style={{ padding: '3rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', gap: '1rem' }}>
                    <span className="text-accent" style={{ fontWeight: 800 }}>01</span>
                    <span>Inconsistent logo usage across physical and digital touchpoints.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem' }}>
                    <span className="text-accent" style={{ fontWeight: 800 }}>02</span>
                    <span>Lack of a defined color system suitable for luxury packaging.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem' }}>
                    <span className="text-accent" style={{ fontWeight: 800 }}>03</span>
                    <span>Identity failed to communicate the "Orchard-to-Table" philosophy.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROCESS (STEP BY STEP) ─── */}
      <section className="about-section methodology-section" style={{ background: '#070707' }}>
        <div className="container">
          <div className="reveal section-header">
            <span className="section-label">Our Workflow</span>
            <h2 className="about-sub-title">The <span className="text-accent">Strategic Path.</span></h2>
          </div>
          
          <div className="process-list">
            {[
              { 
                num: '01', 
                title: 'Discovery & Audit', 
                desc: 'We spent a week at the orchards, understanding the soil, the harvest cycles, and the client\'s vision for 2030.' 
              },
              { 
                num: '02', 
                title: 'Conceptualization', 
                desc: 'Exploring themes of "Earth," "Growth," and "Legacy." We developed 3 distinct creative directions ranging from Minimalist Modern to Rustic Heritage.' 
              },
              { 
                num: '03', 
                title: 'Visual Engineering', 
                desc: 'Precision drafting of the final logo, selecting a palette that reflects the lush green of the orchards and the golden hour of the harvest.' 
              },
              { 
                num: '04', 
                title: 'Collateral Design', 
                desc: 'Applying the new identity to everything from business cards and letterheads to export-grade fruit packaging.' 
              },
              { 
                num: '05', 
                title: 'Brand Guidelines', 
                desc: 'Developing a 40-page Brand Bible to ensure the identity remains intact as the company scales globally.' 
              }
            ].map((step, i) => (
              <div key={i} className={`process-row reveal stagger-${i+1}`}>
                <div className="process-row-num">{step.num}</div>
                <div className="process-row-content">
                  <h3 className="process-row-title">{step.title}</h3>
                  <p className="process-row-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DESIGN SYSTEM BREAKDOWN ─── */}
      <section className="about-section">
        <div className="container">
          <div className="reveal section-header-centered">
            <span className="section-label">Visual DNA</span>
            <h2 className="about-sub-title">Anatomy of the <span className="text-accent">Brand.</span></h2>
          </div>

          <div className="about-grid" style={{ marginBottom: '6rem' }}>
            <div className="reveal-left">
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>The Color Story</h3>
              <p className="about-text">
                We moved away from generic "leaf green" to a sophisticated <strong>Deep Forest Green (#1A2F23)</strong> which represents stability and organic depth, paired with <strong>Harvest Gold (#D4AF37)</strong> for a touch of premium luxury.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ width: '80px', height: '80px', background: '#1A2F23', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}></div>
                <div style={{ width: '80px', height: '80px', background: '#D4AF37', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}></div>
                <div style={{ width: '80px', height: '80px', background: '#F5F5DC', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}></div>
              </div>
            </div>
            <div className="reveal-right">
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Typography</h3>
              <p className="about-text">
                <strong>Headline:</strong> A customized high-contrast Serif that evokes a sense of heritage and established trust.
              </p>
              <p className="about-text">
                <strong>Body:</strong> Inter - A clean, accessible Sans-Serif for high readability in digital and print contexts.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ width: '100%', height: 'auto', background: '#111', padding: '4rem', textAlign: 'center' }}>
            <img 
              src="/branding/SAMBHALAORCHARD&AGROENGLISHFinal.png" 
              alt="Final Brand Mark" 
              style={{ maxWidth: '600px', margin: '0 auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} 
            />
          </div>
        </div>
      </section>

      {/* ─── VISUAL SHOWCASE GRID ─── */}
      <section className="about-section values-section">
        <div className="container">
          <div className="reveal section-header">
            <span className="section-label">Gallery</span>
            <h2 className="about-sub-title">Brand <span className="text-accent">Execution.</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div className="reveal stagger-1">
              <img src="/branding/SAMBHALAORCHARD&AGROLOGOCONCEPT.jpg" alt="Mockup 1" className="card" style={{ width: '100%' }} />
            </div>
            <div className="reveal stagger-2" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card" style={{ padding: '2rem', background: 'rgba(232,53,42,0.05)' }}>
                <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Impact Assessment</h4>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>
                  Following the rebrand, the client reported a 40% increase in brand inquiry from high-end retail chains and a significant boost in internal team morale.
                </p>
              </div>
              <img src="/branding/SAMBHALAORCHARD&AGROENGLISHFinal.png" alt="Mockup 2" className="card" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="about-section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(232,53,42,0.05))' }}>
        <div className="container">
          <div className="reveal text-center" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span className="section-label">Client Feedback</span>
            <p style={{ fontSize: '2rem', fontWeight: 400, fontStyle: 'italic', lineHeight: '1.4', marginBottom: '3rem' }}>
              "Enzo Media didn't just give us a new logo; they gave us a new language to speak to our customers. The transition from a local farm to a global brand felt seamless because of their strategic approach."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: '#333', borderRadius: '50%' }}></div>
              <div style={{ textAlign: 'left' }}>
                <h5 style={{ fontWeight: 800 }}>Managing Director</h5>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Sambhala Orchard & Agro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ─── */}
      <section className="about-section">
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <h2 className="about-sub-title">Ready to <span className="text-accent">Scale?</span></h2>
            <p className="about-text" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
              Download the full brand architecture and guidelines to see how we build brands that last generations.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/branding/SAMBHALAORCHARD&AGROLO.pdf" target="_blank" className="btn-primary">Full Guidelines (PDF) ↗</a>
              <a href="/branding/SAMBHALAORCHARD&AGROLOGOS.pdf" target="_blank" className="btn-ghost">Visual Identity Set</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default BrandingCaseStudy;
