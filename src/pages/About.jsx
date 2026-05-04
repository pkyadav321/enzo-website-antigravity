import React from 'react';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';

const About = () => (
  <main style={{ background: 'transparent' }}>
    {/* Hero Section */}
    <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label reveal">Our Identity</span>
        <h1 className="reveal stagger-1" style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontSize: 'clamp(3rem, 8vw, 7rem)', 
          fontWeight: 900, 
          lineHeight: 1.1, 
          letterSpacing: '-0.05em', 
          color: '#fff', 
          marginBottom: '3.5rem' 
        }}>
          Welcome to <span className="text-accent">The Enzo Media.</span>
        </h1>
        <p className="reveal stagger-2" style={{ color: '#888', fontSize: '1.4rem', lineHeight: 1.8, maxWidth: '900px', margin: '0 auto 4rem' }}>
          The Enzo Media is more than an agency. We are a high-performance partner for brands that refuse to settle for mediocre results. We blend brutalist design with data-driven strategy.
        </p>
      </div>
    </section>

    {/* Who We Are */}
    <section style={{ padding: '120px 0', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'start', textAlign: 'left' }}>
          <div className="reveal-left">
            <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', marginBottom: '2.5rem' }}>
              The Enzo <span className="text-accent">Methodology.</span>
            </h2>
            <p style={{ color: '#666', fontSize: '1.15rem', lineHeight: 1.9, marginBottom: '2rem' }}>
              We don't follow trends; we set them. The Enzo Media was founded on the belief that premium creative and performance data should never be separated.
            </p>
            <p style={{ color: '#666', fontSize: '1.15rem', lineHeight: 1.9 }}>
              Today, we help ambitious businesses across India dominate their markets by providing them with the same high-level strategy used by global giants, tailored for rapid local scaling.
            </p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {[
              { value: '100K+', label: 'Leads Generated' },
              { value: '50+', label: 'Clients Served' },
              { value: '3+', label: 'Years in Market' },
              { value: '3X', label: 'Avg ROI Delivered' },
            ].map((s, i) => (
              <div key={i} className={`card stagger-${i+1}`} style={{ padding: '3rem 2rem', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#e8352a', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#444', marginTop: '1rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Big Typography Quote */}
    <section style={{ padding: '160px 0', background: '#0a0a0a', borderTop: '1px solid #1a1a1a' }}>
        <div className="container">
            <div className="reveal" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, maxWidth: '1200px', margin: '0 auto' }}>
                    "WE DON'T JUST MANAGE AD SPEND. WE ENGINEER <span className="text-accent">MARKET DOMINANCE.</span>"
                </h2>
                <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                    <div style={{ width: '60px', height: '1px', background: '#e8352a' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#666' }}>ENZO STRATEGY CORE</span>
                    <div style={{ width: '60px', height: '1px', background: '#e8352a' }} />
                </div>
            </div>
        </div>
    </section>

    <ClientLogos />

    {/* Values Section */}
    <section style={{ padding: '120px 0', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <span className="section-label">Core Values</span>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff' }}>What We Stand <span className="text-accent">For.</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            {[
                { title: 'Radical Transparency', desc: 'No hidden metrics. No fluff. Just raw data and real results delivered weekly.' },
                { title: 'Velocity First', desc: 'In digital, speed is a weapon. We execute and optimize faster than the competition.' },
                { title: 'Obsessive Quality', desc: 'Every pixel and every line of copy is refined until it meets the Enzo standard.' }
            ].map((v, i) => (
                <div key={i} className={`reveal stagger-${i+1}`} style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem' }}>{v.title}</h3>
                    <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1.05rem' }}>{v.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section style={{ padding: '160px 0', background: '#070707', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10rem', textAlign: 'left' }}>
          <div className="reveal stagger-1">
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '2rem' }}>The Mission.</h3>
            <p style={{ color: '#666', lineHeight: 1.9, fontSize: '1.1rem' }}>
              To eliminate the noise in digital marketing and provide brands with a clear, predictable path to scale. We act as an extension of your team, not just another vendor.
            </p>
          </div>
          <div className="reveal stagger-2">
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '2rem' }}>The Vision.</h3>
            <p style={{ color: '#666', lineHeight: 1.9, fontSize: '1.1rem' }}>
              To become the global gold standard for Creative Strategy—where every campaign is a masterpiece of both design and performance engineering.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Testimonials />

    {/* CTA */}
    <section style={{ padding: '120px 0', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <h2 className="reveal" style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '3.5rem' }}>Ready to Join the <span className="text-accent">Elite?</span></h2>
        <button className="btn-primary reveal stagger-1" onClick={() => window.location.hash = '#contact'}>
          Let's Start Your Journey ↗
        </button>
      </div>
    </section>
  </main>
);

export default About;
