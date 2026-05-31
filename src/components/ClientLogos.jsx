import React from 'react';

const clients = [
  { src: '/images/client/client1.webp', alt: 'Client 1' },
  { src: '/images/client/client2.webp', alt: 'Client 2' },
  { src: '/images/client/client3.webp', alt: 'Client 3' },
  { src: '/images/client/client4.webp', alt: 'Client 4' },
  { src: '/images/client/client5.webp', alt: 'Client 5' },
  { src: '/images/client/client6.webp', alt: 'Client 6' },
];

const ClientLogos = () => (
  <section style={{ padding: '60px 0', background: 'var(--section-bg)', position: 'relative' }}>
    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
      <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
        TRUSTED BY AMBITIOUS BRANDS
      </span>
    </div>
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '100%', background: 'linear-gradient(to right, var(--section-bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '100%', background: 'linear-gradient(to left, var(--section-bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', width: 'max-content', animation: 'scroll-left 28s linear infinite' }}>
        {[...clients, ...clients, ...clients].map((c, i) => (
          <img
            key={i}
            src={c.src}
            alt={c.alt}
            style={{ height: '40px', maxWidth: '120px', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.6)', transition: 'filter 0.3s', cursor: 'none' }}
            onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.6)'}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
