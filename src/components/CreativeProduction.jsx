import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, Sparkles } from 'lucide-react';

const productionTypes = [
  {
    icon: <Video size={32} color="var(--accent-red)" />,
    title: 'Ads',
    items: ['Concept & scripting', 'Cinematography', 'Direction & production', 'Editing & post-production']
  },
  {
    icon: <Camera size={32} color="var(--accent-orange)" />,
    title: 'Shoot',
    items: ['Product shoots', 'Lifestyle shoots', 'Brand photoshoots', 'Studio & location shoots']
  },
  {
    icon: <Sparkles size={32} color="var(--text-primary)" />,
    title: 'AI Shoot',
    items: ['AI concept generation', 'Hyper-realistic visuals', 'Product visualization', 'Virtual models & scenes', 'Fast turnaround']
  }
];

const CreativeProduction = () => {
  return (
    <section id="creative">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          OUR CREATIVE PRODUCTION
        </div>
        <h2>High-impact content that captures,<br />converts, and performs</h2>
        <p>From powerful ad films to studio shoots and AI-powered visuals, we create content that drives attention and results</p>
      </div>

      <div className="grid-3">
        {productionTypes.map((type, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div style={{ marginBottom: '1.5rem', background: 'var(--glass-bg)', display: 'inline-block', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              {type.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{type.title}</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {type.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-red)' }}></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreativeProduction;
