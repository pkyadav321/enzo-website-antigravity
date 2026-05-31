import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Zap, TrendingUp } from 'lucide-react';

const steps = [
  { 
    num: '01', 
    title: 'Discovery Audit', 
    desc: 'Deep dive into your business, audience, and competitive landscape to find the real growth levers.',
    icon: <Search size={24} />,
    color: '#ff2200'
  },
  { 
    num: '02', 
    title: 'Growth Blueprint', 
    desc: 'A custom strategy roadmap built around your specific market, budget, and goals.',
    icon: <Map size={24} />,
    color: '#ff4d00'
  },
  { 
    num: '03', 
    title: 'Relentless Execution', 
    desc: 'Campaigns launched with precision. Creatives built to stop the scroll and convert at every stage.',
    icon: <Zap size={24} />,
    color: '#ff7b00'
  },
  { 
    num: '04', 
    title: 'Optimize & Scale', 
    desc: 'Test, learn, and compound. We double down on what works and kill what doesn\'t.',
    icon: <TrendingUp size={24} />,
    color: '#ffaa00'
  },
];

const Process = () => {
  return (
    <section id="process" style={{ background: 'transparent', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 77, 0, 0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }}></div>

      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            How we do it
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontFamily: "'Outfit', sans-serif", 
              fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
              fontWeight: 900, 
              lineHeight: 1, 
              color: 'var(--text-primary)', 
              marginBottom: '2rem',
              letterSpacing: '-0.04em'
            }}
          >
            A Strategic <span style={{ color: '#ff4d00' }}>Blueprint.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ 
              color: '#666', 
              fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', 
              lineHeight: 1.6, 
              maxWidth: '600px', 
              margin: '0 auto',
              fontWeight: 500
            }}
          >
            From deep discovery to exponential scaling, our process is designed for precision and results.
          </motion.p>
        </div>

        {/* Infographic Layout */}
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Central Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, rgba(255, 77, 0, 0.3) 10%, rgba(255, 77, 0, 0.3) 90%, transparent)',
            transform: 'translateX(-50%)',
            zIndex: 0
          }} className="hide-mobile"></div>

          {steps.map((step, index) => (
            <div 
              key={step.num} 
              style={{ 
                display: 'flex', 
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '6rem',
                position: 'relative',
                width: '100%'
              }}
            >
              {/* Connection Dot */}
              <motion.div 
                initial={{ scale: 0, x: '-50%', y: '-50%' }}
                whileInView={{ scale: 1, x: '-50%', y: '-50%' }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '16px',
                  height: '16px',
                  background: step.color,
                  borderRadius: '50%',
                  boxShadow: `0 0 20px ${step.color}`,
                  zIndex: 2
                }}
                className="hide-mobile"
              ></motion.div>

              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '45%',
                  background: 'var(--card-bg)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '32px',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="process-card-full"
              >
                {/* Number Background */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '10px',
                  fontSize: '8rem',
                  fontWeight: 900,
                  color: 'var(--border-color)',
                  zIndex: -1,
                  fontFamily: "'Outfit', sans-serif"
                }}>{step.num}</div>

                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: 'rgba(255, 77, 0, 0.1)', 
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: step.color,
                  marginBottom: '2rem'
                }}>
                  {step.icon}
                </div>

                <h4 style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: '1.8rem', 
                  fontWeight: 800, 
                  marginBottom: '1rem',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  {step.title}
                </h4>
                
                <p style={{ 
                  color: '#888', 
                  lineHeight: 1.7, 
                  fontSize: '1.05rem',
                  fontWeight: 400
                }}>
                  {step.desc}
                </p>

                {/* Bottom Accent */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`
                }}></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .process-card-full {
            width: 100% !important;
            padding: 2rem !important;
          }
          #process {
            padding: 80px 0 !important;
          }
          #process .container {
            padding: 0 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
