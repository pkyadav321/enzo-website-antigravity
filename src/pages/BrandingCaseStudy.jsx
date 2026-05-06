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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main style={{ background: '#02040a', minHeight: '100vh', paddingTop: '120px' }}>
      
      {/* ─── HERO HEADER ─── */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#ff4d00',
            marginBottom: '2rem'
          }}>
            Case Study: Sambhala Orchard
          </span>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1,
            color: '#fff',
            letterSpacing: '-0.05em',
            marginBottom: '2.5rem',
            textTransform: 'uppercase'
          }}>
            Modernizing <span style={{ color: '#ff4d00' }}>Heritage.</span>
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.4rem',
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
      <section style={{ padding: '8rem 2rem', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {[
            { icon: <Target size={36} />, title: "The Objective", desc: "Positioning Sambhala as the benchmark for premium organic produce in North India while maintaining its community roots." },
            { icon: <Search size={36} />, title: "The Insight", desc: "Our research identified that modern consumers equate 'Organic' with 'Care'. The brand needed a human touch to stand out." },
            { icon: <Globe size={36} />, title: "The Strategy", desc: "Creating a dual-language identity that feels as upscale in a Delhi boutique as it does authentic in a local farm." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 77, 0, 0.1)', borderColor: 'rgba(255, 77, 0, 0.3)' }}
              style={{ 
                padding: '3.5rem 2.5rem', 
                background: 'rgba(255,255,255,0.01)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '32px',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{ color: '#ff4d00', marginBottom: '2rem' }}>{item.icon}</div>
              <h4 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>{item.title}</h4>
              <p style={{ color: '#555', lineHeight: 1.7, fontSize: '1.1rem', fontWeight: 500 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CROPPED VISUALS GALLERY ─── */}
      <section style={{ padding: '4rem 1rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', alignItems: 'center' }}>
          <Document file="/branding/SAMBHALAORCHARD&AGROLO.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {numPages && Array.from(new Array(numPages), (el, index) => (
              <motion.div
                key={`page_${index + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                variants={sectionVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 40px 100px rgba(255, 77, 0, 0.15)' }}
                style={{
                  borderRadius: '32px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                  cursor: 'crosshair',
                  display: 'flex',
                  justifyContent: 'center',
                  height: '520px', 
                  width: '100%',
                  maxWidth: '1200px',
                  transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
              >
                <div className="pdf-page-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                  <Page 
                    pageNumber={index + 1} 
                    renderTextLayer={false} 
                    renderAnnotationLayer={false}
                    width={1200}
                  />
                </div>
              </motion.div>
            ))}
          </Document>
        </div>
      </section>

      {/* ─── BRANDING PROCESS ─── */}
      <section style={{ padding: '10rem 2rem', background: '#05070c', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
            <span style={{ color: '#ff4d00', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1.5rem' }}>Behind the Scenes</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, fontFamily: "'Outfit', sans-serif", marginBottom: '1.5rem', lineHeight: 1 }}>The Branding <span style={{ color: '#ff4d00' }}>Process.</span></h2>
            <p style={{ color: '#555', fontSize: '1.3rem', fontWeight: 500 }}>From discovery to market dominance.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {[
              { step: "01", icon: <Search size={24} />, title: "Discovery", desc: "In-depth audit of farm heritage and target persona profiling." },
              { step: "02", icon: <PenTool size={24} />, title: "Concepting", desc: "Iterative sketching of the human-agricultural fusion mark." },
              { step: "03", icon: <Layers size={24} />, title: "Refining", desc: "Perfecting the geometric balance for cross-platform usage." },
              { step: "04", icon: <ShieldCheck size={24} />, title: "System", desc: "Developing a robust visual language for all touchpoints." }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={sectionVariants}
                whileHover={{ 
                  y: -10, 
                  background: 'rgba(255,77,0,0.03)', 
                  borderColor: 'rgba(255,77,0,0.4)',
                  boxShadow: '0 20px 40px rgba(255, 77, 0, 0.2)' 
                }}
                style={{ 
                  padding: '3rem 2rem', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                  background: 'rgba(255,255,255,0.01)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ff4d00', fontFamily: "'Space Grotesk', sans-serif", opacity: 0.5 }}>{p.step}</span>
                  <div style={{ color: '#ff4d00', background: 'rgba(255,77,0,0.1)', padding: '12px', borderRadius: '12px' }}>{p.icon}</div>
                </div>
                <h5 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', fontFamily: "'Outfit', sans-serif" }}>{p.title}</h5>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '1rem', fontWeight: 500 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONCEPT BREAKDOWN ─── */}
      <section style={{ padding: '10rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'start' }}>
            
            {/* Sticky Left Content */}
            <div style={{ position: 'sticky', top: '150px' }}>
              <span style={{ color: '#ff4d00', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '1.5rem' }}>Visual Language</span>
              <h2 style={{ 
                fontFamily: "'Outfit', sans-serif", 
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                fontWeight: 900, 
                color: '#fff', 
                marginBottom: '2.5rem',
                lineHeight: 1.1
              }}>
                Logo Concept <br/><span style={{ color: '#ff4d00' }}>Explanation.</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', color: '#666', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 500 }}>
                The Shambhala logo is a carefully crafted visual identity that brings together nature, agriculture, and human values in a unified symbol. It tells a story of care, growth, and harmony through its thoughtful composition.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>

              {[
                { title: "The Circle", icon: <Globe size={20} color="#ff4d00" />, desc: "Representing unity, wholeness, and harmony — vital for a community-driven organic brand." },
                { title: "The Letter 'S'", icon: <Zap size={20} color="#ff4d00" />, desc: "Resembles a plant stem or root, connecting the brand to its agricultural foundations." },
                { title: "Two Green Leaves", icon: <ShieldCheck size={20} color="#ff4d00" />, desc: "Placed like open hands, symbolizing care, nurturing, and organic growth." },
                { title: "A Warm Sun", icon: <Sun size={20} color="#ff4d00" />, desc: "Representing life, energy, and hope. Essential for orchards and farming." },
                { title: "The Human Figure", icon: <Target size={20} color="#ff4d00" />, desc: "Together, S, leaves, and sun form a plant-like human figure, showing the bond between people and nature." },
                { title: "The Orchard Element", icon: <Trees size={20} color="#ff4d00" />, desc: "A semi-circular field pattern below, representing organized agriculture and a fertile environment." },
                { title: "Typography", icon: <Type size={20} color="#ff4d00" />, desc: "Bold, organic typeface giving strength and trust while remaining approachable and earthy." },
                { title: "Brand Message", icon: <Heart size={20} color="#ff4d00" />, desc: "Nurturing the earth with care, growing together in harmony, and sustaining life responsibly." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10, background: 'rgba(255,77,0,0.05)' }}
                  style={{ 
                    padding: '1.5rem', 
                    background: 'rgba(255,255,255,0.01)', 
                    borderLeft: '4px solid #ff4d00',
                    borderRadius: '0 12px 12px 0',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'start'
                  }}
                >
                  <div style={{ marginTop: '4px' }}>{item.icon}</div>
                  <div>
                    <h6 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.4rem', fontFamily: "'Outfit', sans-serif" }}>{item.title}</h6>
                    <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: 500 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section style={{ padding: '0 2rem 10rem', textAlign: 'center' }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={sectionVariants}
          style={{ 
            background: 'linear-gradient(#02040a, #02040a) padding-box, linear-gradient(135deg, #ff4d00, #cc3d00) border-box', 
            border: '2px solid transparent',
            padding: '6rem 2rem', 
            borderRadius: '40px',
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

          <h2 style={{ color: '#fff', fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>Ready to Build <br/>Your Brand?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '2.5rem', fontWeight: 500 }}>Let's create an identity that lasts.</p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 77, 0, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '#contact'}
            style={{ 
              padding: '1.2rem 3rem', 
              background: 'linear-gradient(135deg, #ff4d00 0%, #cc3d00 100%)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '100px', 
              fontWeight: 800, 
              fontSize: '1rem', 
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
          margin-top: -50px; 
        }
      `}</style>

    </main>
  );
};

export default BrandingCaseStudy;
