import React from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CitiesSection from '../components/CitiesSection';

/* ── Custom SVG Wave Divider representing local Ganga waves and arches ── */
const WaveDivider = ({ fill = 'var(--section-bg)', flip = false }) => (
  <div 
    style={{ 
      width: '100%', 
      overflow: 'hidden', 
      lineHeight: 0, 
      transform: flip ? 'rotate(180deg)' : 'none',
      pointerEvents: 'none',
      background: 'var(--background)',
      margin: '0',
      padding: '0'
    }}
  >
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      style={{ 
        position: 'relative', 
        display: 'block', 
        width: 'calc(100% + 1.3px)', 
        height: '50px',
        margin: '0',
        padding: '0'
      }}
    >
      <path 
        d="M0,0 C150,90 350,90 500,0 C650,90 850,90 1000,0 C1100,60 1150,60 1200,0 L1200,120 L0,120 Z" 
        fill={fill} 
      />
    </svg>
  </div>
);

const Home = () => (
  <main style={{ background: 'var(--background)' }}>
    <Hero />
    
    {/* Blends Hero -> ClientLogos */}
    <WaveDivider fill="var(--section-bg)" />
    <ClientLogos />
    {/* Blends ClientLogos -> Services */}
    <WaveDivider fill="var(--section-bg)" flip={true} />
    
    <Services />
    <Portfolio />
    <Process />
    <WhyChooseUs />
    
    {/* Blends WhyChooseUs -> CitiesSection */}
    <WaveDivider fill="var(--section-bg)" />
    <CitiesSection />
    {/* Blends CitiesSection -> Testimonials */}
    <WaveDivider fill="var(--section-bg)" flip={true} />
    
    <Testimonials />
    <FAQ />
    <Contact />
  </main>
);

export default Home;
