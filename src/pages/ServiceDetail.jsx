import React, { useEffect } from 'react';
import { servicesData } from '../data/servicesData';

const ServiceDetail = ({ serviceId }) => {
  const service = servicesData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) return <div style={{ color: '#fff', padding: '200px', textAlign: 'center' }}>Service Not Found</div>;

  return (
    <main style={{ background: 'transparent' }}>
      {/* Hero */}
      <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '160px 0 80px' }}>
        <div className="container">
          <span className="section-label reveal">Service Expertise</span>
          <h1 className="reveal stagger-1" style={{ 
            fontSize: 'clamp(3rem, 8vw, 8rem)', 
            fontWeight: 900, 
            lineHeight: 1.15, 
            letterSpacing: '-0.05em', 
            color: '#fff', 
            marginBottom: '3rem' 
          }}>
            {service.title.split(' ').map((word, i) => (
              <span key={i}>
                {i % 2 !== 0 ? <span className="text-accent" style={{ fontStyle: 'normal' }}>{word} </span> : word + ' '}
              </span>
            ))}
          </h1>
          <p className="reveal stagger-2" style={{ color: '#888', fontSize: '1.3rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            {service.what}
          </p>
        </div>
      </section>

      {/* Stats/Intro Section */}
      <section style={{ padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', textAlign: 'center' }}>
          <div className="reveal stagger-1">
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>95%</div>
            <div style={{ fontSize: '0.7rem', color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1rem' }}>Client Retention</div>
          </div>
          <div className="reveal stagger-2">
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>2.5X</div>
            <div style={{ fontSize: '0.7rem', color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1rem' }}>Avg Growth Rate</div>
          </div>
          <div className="reveal stagger-3">
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>100%</div>
            <div style={{ fontSize: '0.7rem', color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1rem' }}>Data Integrity</div>
          </div>
        </div>
      </section>

      {/* Why & How */}
      <section style={{ padding: '120px 0', borderTop: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', textAlign: 'left' }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '2.5rem' }}>The <span className="text-accent">Rationale.</span></h2>
              <p style={{ color: '#666', fontSize: '1.15rem', lineHeight: 1.9, marginBottom: '3rem' }}>{service.why}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {service.deliverables.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>
                    <span style={{ color: '#e8352a' }}>—</span> {d}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginBottom: '2.5rem' }}>Our <span className="text-accent">Framework.</span></h2>
              <p style={{ color: '#666', fontSize: '1.15rem', lineHeight: 1.9, marginBottom: '4rem' }}>{service.how}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {service.steps.map((step, i) => (
                  <div key={i} className="card" style={{ padding: '2rem', textAlign: 'left' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#e8352a', marginBottom: '1rem' }}>0{i+1}</div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>{step.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#444' }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Impact Section */}
      <section style={{ padding: '160px 0', background: '#070707', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '15vw', fontWeight: 900, color: 'rgba(255,255,255,0.02)', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0, textTransform: 'uppercase' }}>
          {service.title}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', marginBottom: '4rem' }}>Turning Potential into <span className="text-accent">Power.</span></h2>
          <div className="reveal stagger-1" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem', border: '1px solid rgba(232,53,42,0.2)', borderRadius: '40px', background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(20px)' }}>
            <p style={{ fontSize: '1.4rem', color: '#aaa', lineHeight: 1.8 }}>
              {service.tagline} We don't just provide services; we build growth engines. Every {service.title} campaign we launch is a calculated move toward market dominance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 0', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
        <div className="container">
          <h2 className="reveal" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '3.5rem' }}>Ready to Scale <span className="text-accent">{service.title}?</span></h2>
          <button className="btn-primary reveal stagger-1" onClick={() => window.location.hash = '#contact'}>
            Book a Strategy Call ↗
          </button>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
