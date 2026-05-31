import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cities = [
  {
    id: 'varanasi',
    name: 'Varanasi (Banaras)',
    hindi: 'वाराणसी · बनारस',
    tagline: 'The City We Call Home',
    specialty: ['Advanced SEO', 'Performance Ads', 'Brand Strategy'],
    img: '/images/cities/varanasi.webp',
    path: '/marketing-agency-varanasi',
    stat: 'Headquarters',
    accentColor: '#ff6a00',
    layout: 'hero',
  },
  {
    id: 'gonda',
    name: 'Gonda',
    hindi: 'गोंडा',
    tagline: 'Education & Business Growth',
    specialty: ['School Admissions', 'Local Lead Gen'],
    img: '/images/cities/gonda.webp',
    path: '/marketing-agency-gonda',
    stat: '30+ Clients',
    accentColor: '#ff8c00',
    layout: 'small',
  },
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    hindi: 'अयोध्या',
    tagline: 'Real Estate & Tourism',
    specialty: ['Real Estate Lead Gen', 'Tourism SEO'],
    img: '/images/cities/ayodhya.webp',
    path: '/marketing-agency-ayodhya',
    stat: 'Boom Market',
    accentColor: '#f57c00',
    layout: 'small',
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    hindi: 'दिल्ली एनसीआर',
    tagline: 'Premium Brand Performance at Scale',
    specialty: ['National Brands', 'E-Commerce', 'Meta & Google Ads'],
    img: '/images/cities/delhi.webp',
    path: '/marketing-agency-delhi',
    stat: 'Scaling Fast',
    accentColor: '#ff4d00',
    layout: 'wide',
  },
];

/* ── Single city card — Link wraps everything so entire card is clickable ── */
const CityCard = ({ city }) => (
  <Link
    to={city.path}
    style={{
      textDecoration: 'none',
      display: 'block',
      height: '100%',
      width: '100%',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative',
      background: '#0a0a0a',
      border: '1px solid var(--border-color)',
      cursor: 'pointer',
    }}
    className="city-card-link"
  >
    {/* Image */}
    <img
      src={city.img}
      alt={`Digital marketing agency in ${city.name}`}
      className="city-card-img"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: 'none',
      }}
    />

    {/* Dark gradient overlay */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(to top, rgba(5,2,0,0.95) 0%, rgba(5,2,0,0.5) 50%, rgba(5,2,0,0.15) 100%)',
        pointerEvents: 'none',
      }}
    />

    {/* Stat badge top-right */}
    <div
      style={{
        position: 'absolute',
        top: '1.25rem',
        right: '1.25rem',
        background: 'rgba(255,255,255,0.13)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.22)',
        borderRadius: '50px',
        padding: '0.3rem 0.85rem',
        fontSize: '0.55rem',
        fontWeight: 800,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#fff',
        fontFamily: "'Space Grotesk', sans-serif",
        pointerEvents: 'none',
      }}
    >
      {city.stat}
    </div>

    {/* Bottom text content */}
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '2rem',
        pointerEvents: 'none',
      }}
    >
      {/* Hindi script */}
      <div
        style={{
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '0.4rem',
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: '0.05em',
        }}
      >
        {city.hindi}
      </div>

      {/* City name */}
      <h3
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '1.8rem',
          fontWeight: 900,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '0.4rem',
          letterSpacing: '-0.02em',
        }}
      >
        {city.name}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.7)',
          fontWeight: 400,
          marginBottom: '1rem',
          lineHeight: 1.4,
        }}
      >
        {city.tagline}
      </p>

      {/* Specialty Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {city.specialty.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '0.55rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.2rem 0.6rem',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50px',
              color: '#fff',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          fontSize: '0.65rem',
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: city.accentColor,
          fontFamily: "'Space Grotesk', sans-serif",
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}
      >
        View Market Research ↗
      </div>
    </div>
  </Link>
);

const CitiesSection = () => (
  <section id="cities" style={{ padding: '120px 0', background: 'var(--section-bg)' }}>
    <div className="container">

      {/* ── Section header ── */}
      <div className="reveal section-header" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <span className="section-label">Our Service Areas</span>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '1.2rem',
          }}
        >
          Local Roots.{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #cc1e00 0%, #d44000 50%, #f57c00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            National Ambition.
          </span>
        </h2>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: '0 auto',
          }}
        >
          Deeply rooted in UP's key hubs — Gonda, Ayodhya, Varanasi (Banaras), and Delhi NCR. Click a card below to view detailed market research.
        </p>
      </div>

      {/* ── UNIFORM GRID OF 4 CITIES ── */}
      <div className="cities-grid reveal">
        {cities.map((city) => (
          <div key={city.id} className="city-card-wrap">
            <CityCard city={city} />
          </div>
        ))}
      </div>
    </div>

    <style>{`
      /* Hover zoom on images */
      .city-card-link:hover .city-card-img { transform: scale(1.06); }
      .city-card-link { transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1) !important; }
      .city-card-link:hover { opacity: 0.95; transform: translateY(-5px); }

      /* Balanced Symmetrical Grid Layout */
      .cities-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.75rem;
      }
      .city-card-wrap {
        width: 100%;
        height: 420px;
      }

      /* MOBILE/TABLET layout */
      @media (max-width: 991px) {
        .city-card-wrap {
          height: 380px;
        }
      }
      @media (max-width: 768px) {
        .cities-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .city-card-wrap {
          height: 340px;
        }
      }
    `}</style>
  </section>
);

export default CitiesSection;
