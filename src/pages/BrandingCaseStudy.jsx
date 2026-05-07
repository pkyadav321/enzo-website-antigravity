import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import { 
  Target, 
  Search, 
  PenTool, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Globe, 
  ArrowRight,
  Sun,
  Type,
  Trees,
  Heart
} from 'lucide-react';

// Setup pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const BrandingCaseStudy = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(1200);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPageWidth(width - 40);
      } else {
        setPageWidth(Math.min(width - 80, 1200));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main style={{ background: '#02040a', minHeight: '100vh', paddingTop: pageWidth < 768 ? '80px' : '120px' }}>
      
      {/* ─── HERO HEADER ─── */}
      <section style={{ padding: pageWidth < 768 ? '4rem 1.5rem 2rem' : '6rem 2rem 4rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: pageWidth < 768 ? '0.7rem' : '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#ff4d00',
            marginBottom: '1.5rem'
          }}>
            Case Study: Sambhala Orchard
          </span>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1,
            color: '#fff',
            letterSpacing: '-0.05em',
            marginBottom: '2rem',
            textTransform: 'uppercase'
          }}>
            Modernizing <span style={{ color: '#ff4d00' }}>Heritage.</span>
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: pageWidth < 768 ? '1.1rem' : '1.4rem',
            color: '#666',
            lineHeight: 1.6,
            maxWidth: '750px',
            margin: '0 auto',
            fontWeight: 500
          }}>
            How we transformed a legacy agricultural brand into a premium organic powerhouse through strategic visual storytelling.
          </p>
        </motion.div>
      </section>

      {/* ─── THE STRATEGY ─── */}
      <section style={{ padding: pageWidth < 768 ? '4rem 1.5rem' : '8rem 2rem', maxWidth: '1300px', margin: '0 auto' }}>
        <div className="responsive-grid-strategy" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Target size={32} />, title: "The Objective", desc: "Positioning Sambhala as the benchmark for premium organic produce in North India while maintaining its community roots." },
            { icon: <Search size={32} />, title: "The Insight", desc: "Our research identified that modern consumers equate 'Organic' with 'Care'. The brand needed a human touch to stand out." },
            { icon: <Globe size={32} />, title: "The Strategy", desc: "Creating a dual-language identity that feels as upscale in a Delhi boutique as it does authentic in a local farm." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 77, 0, 0.1)', borderColor: 'rgba(255, 77, 0, 0.3)' }}
              style={{ 
                padding: pageWidth < 768 ? '2.5rem 1.5rem' : '3.5rem 2.5rem', 
                background: 'rgba(255,255,255,0.01)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '24px',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{ color: '#ff4d00', marginBottom: '1.5rem' }}>{item.icon}</div>
              <h4 style={{ color: '#fff', fontSize: pageWidth < 768 ? '1.5rem' : '1.8rem', fontWeight: 800, marginBottom: '1rem', fontFamily: "'Outfit', sans-serif" }}>{item.title}</h4>
              <p style={{ color: '#555', lineHeight: 1.7, fontSize: pageWidth < 768 ? '1rem' : '1.1rem', fontWeight: 500 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CROPPED VISUALS GALLERY ─── */}
      <section style={{ padding: '2rem 0', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: pageWidth < 768 ? '2rem' : '6rem', alignItems: 'center' }}>
          <Document file="/branding/SAMBHALAORCHARD&AGROLO.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {numPages && Array.from(new Array(numPages), (el, index) => (
              <motion.div
                key={`page_${index + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                whileHover={{ scale: 1.01, boxShadow: '0 40px 100px rgba(255, 77, 0, 0.15)' }}
                style={{
                  borderRadius: pageWidth < 768 ? '16px' : '32px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  cursor: 'crosshair',
                  display: 'flex',
                  justifyContent: 'center',
                  height: pageWidth < 768 ? 'auto' : '520px', 
                  width: '100%',
                  maxWidth: '1200px',
                  transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  marginBottom: pageWidth < 768 ? '1.5rem' : '0'
                }}
              >
                <div className="pdf-page-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                  <Page 
                    pageNumber={index + 1} 
                    renderTextLayer={false} 
                    renderAnnotationLayer={false}
                    width={pageWidth}
                  />
                </div>
              </motion.div>
            ))}
          </Document>
        </div>
      </section>

      {/* ─── BRANDING PROCESS ─── */}
      <section style={{ padding: pageWidth < 768 ? '5rem 1.5rem' : '10rem 2rem', background: '#05070c', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: pageWidth < 768 ? '4rem' : '7rem' }}>
            <span style={{ color: '#ff4d00', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', marginBottom: '1rem' }}>Behind the Scenes</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 900, fontFamily: "'Outfit', sans-serif", marginBottom: '1.2rem', lineHeight: 1 }}>The Branding <span style={{ color: '#ff4d00' }}>Process.</span></h2>
            <p style={{ color: '#555', fontSize: pageWidth < 768 ? '1.1rem' : '1.3rem', fontWeight: 500 }}>From discovery to market dominance.</p>
          </div>

          <div className="process-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: "01", icon: <Search size={20} />, title: "Discovery", desc: "In-depth audit of farm heritage and target persona profiling." },
              { step: "02", icon: <PenTool size={20} />, title: "Concepting", desc: "Iterative sketching of the human-agricultural fusion mark." },
              { step: "03", icon: <Layers size={20} />, title: "Refining", desc: "Perfecting the geometric balance for cross-platform usage." },
              { step: "04", icon: <ShieldCheck size={20} />, title: "System", desc: "Developing a robust visual language for all touchpoints." }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={sectionVariants}
                whileHover={{ 
                  y: -5, 
                  background: 'rgba(255,77,0,0.03)', 
                  borderColor: 'rgba(255,77,0,0.4)',
                  boxShadow: '0 15px 30px rgba(255, 77, 0, 0.15)' 
                }}
                style={{ 
                  padding: pageWidth < 768 ? '2rem 1.5rem' : '3rem 2rem', 
                  borderRadius: '20px', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                  background: 'rgba(255,255,255,0.01)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ff4d00', fontFamily: "'Space Grotesk', sans-serif", opacity: 0.5 }}>{p.step}</span>
                  <div style={{ color: '#ff4d00', background: 'rgba(255,77,0,0.1)', padding: '10px', borderRadius: '10px' }}>{p.icon}</div>
                </div>
                <h5 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.8rem', fontFamily: "'Outfit', sans-serif" }}>{p.title}</h5>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: 500 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONCEPT BREAKDOWN ─── */}
      <section style={{ padding: pageWidth < 768 ? '5rem 1.5rem' : '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <div className="concept-grid-responsive" style={{ display: 'grid', gridTemplateColumns: pageWidth < 992 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: pageWidth < 768 ? '3rem' : '6rem', alignItems: 'start' }}>
            
            {/* Left Content */}
            <div style={{ position: pageWidth < 992 ? 'static' : 'sticky', top: '150px' }}>
              <span style={{ color: '#ff4d00', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', marginBottom: '1rem' }}>Visual Language</span>
              <h2 style={{ 
                fontFamily: "'Outfit', sans-serif", 
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', 
                fontWeight: 900, 
                color: '#fff', 
                marginBottom: '1.5rem',
                lineHeight: 1.1
              }}>
                Logo Concept <br/><span style={{ color: '#ff4d00' }}>Explanation.</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: pageWidth < 768 ? '1.1rem' : '1.25rem', color: '#666', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 500 }}>
                The Shambhala logo is a carefully crafted visual identity that brings together nature, agriculture, and human values in a unified symbol. It tells a story of care, growth, and harmony through its thoughtful composition.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>

              {[
                { title: "The Circle", icon: <Globe size={18} color="#ff4d00" />, desc: "Representing unity, wholeness, and harmony — vital for a community-driven organic brand." },
                { title: "The Letter 'S'", icon: <Zap size={18} color="#ff4d00" />, desc: "Resembles a plant stem or root, connecting the brand to its agricultural foundations." },
                { title: "Two Green Leaves", icon: <ShieldCheck size={18} color="#ff4d00" />, desc: "Placed like open hands, symbolizing care, nurturing, and organic growth." },
                { title: "A Warm Sun", icon: <Sun size={18} color="#ff4d00" />, desc: "Representing life, energy, and hope. Essential for orchards and farming." },
                { title: "The Human Figure", icon: <Target size={18} color="#ff4d00" />, desc: "Together, S, leaves, and sun form a plant-like human figure, showing the bond between people and nature." },
                { title: "The Orchard Element", icon: <Trees size={18} color="#ff4d00" />, desc: "A semi-circular field pattern below, representing organized agriculture and a fertile environment." },
                { title: "Typography", icon: <Type size={18} color="#ff4d00" />, desc: "Bold, organic typeface giving strength and trust while remaining approachable and earthy." },
                { title: "Brand Message", icon: <Heart size={18} color="#ff4d00" />, desc: "Nurturing the earth with care, growing together in harmony, and sustaining life responsibly." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5, background: 'rgba(255,77,0,0.05)' }}
                  style={{ 
                    padding: '1.2rem', 
                    background: 'rgba(255,255,255,0.01)', 
                    borderLeft: '3px solid #ff4d00',
                    borderRadius: '0 10px 10px 0',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    gap: '1.2rem',
                    alignItems: 'start'
                  }}
                >
                  <div style={{ marginTop: '3px' }}>{item.icon}</div>
                  <div>
                    <h6 style={{ color: '#fff', fontSize: '1rem', fontWeight: 800, marginBottom: '0.3rem', fontFamily: "'Outfit', sans-serif" }}>{item.title}</h6>
                    <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 500 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section style={{ padding: pageWidth < 768 ? '0 1.5rem 6rem' : '0 2rem 10rem', textAlign: 'center' }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          style={{ 
            background: 'linear-gradient(#02040a, #02040a) padding-box, linear-gradient(135deg, #ff4d00, #cc3d00) border-box', 
            border: '2px solid transparent',
            padding: pageWidth < 768 ? '4rem 1.5rem' : '6rem 2rem', 
            borderRadius: pageWidth < 768 ? '24px' : '40px',
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: '0 0 60px rgba(255, 77, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle mesh/glow effect inside */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>

          <h2 style={{ color: '#fff', fontSize: pageWidth < 768 ? '2.2rem' : '3rem', fontWeight: 900, marginBottom: '1.2rem', fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Ready to Build <br/>Your Brand?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: pageWidth < 768 ? '1rem' : '1.2rem', marginBottom: '2rem', fontWeight: 500 }}>Let's create an identity that lasts.</p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 77, 0, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '#contact'}
            style={{ 
              padding: pageWidth < 768 ? '1rem 2rem' : '1.2rem 3rem', 
              background: 'linear-gradient(135deg, #ff4d00 0%, #cc3d00 100%)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '100px', 
              fontWeight: 800, 
              fontSize: pageWidth < 768 ? '0.9rem' : '1rem', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            Start Your Project <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>
      
      <style>{`
        .pdf-page-wrapper canvas {
          max-width: 100% !important;
          height: auto !important;
          margin-top: ${pageWidth < 768 ? '0' : '-50px'}; 
        }
        @media (max-width: 768px) {
          .pdf-page-wrapper {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>

    </main>
  );
};

export default BrandingCaseStudy;
