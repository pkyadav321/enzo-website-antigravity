import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Smartphone } from 'lucide-react';

const cases = [
  {
    client: 'Fitfuel',
    services: 'Creative Ad Strategy, Ad Films, Growth Partner',
    icon: <TrendingUp size={24} color="var(--accent-red)" />,
    metrics: [
      { value: '312%', label: 'Increase in ROAS' },
      { value: '2.8X', label: 'More Conversions' },
      { value: '186%', label: 'Revenue Growth' }
    ]
  },
  {
    client: 'Urban Spaces',
    services: 'Branding, Photoshoot, Ad Campaigns, Lead Generation',
    icon: <Users size={24} color="var(--accent-orange)" />,
    metrics: [
      { value: '4.1X', label: 'More Qualified Leads' },
      { value: '65%', label: 'Lower Cost Per Lead' },
      { value: '250%', label: 'Sales Pipeline Growth' }
    ]
  },
  {
    client: 'Finshot',
    services: 'UI/UX Design, App Branding, Growth Strategy',
    icon: <Smartphone size={24} color="var(--accent-purple)" />,
    metrics: [
      { value: '3.2X', label: 'User Growth' },
      { value: '40%', label: 'Increase in Retention' },
      { value: '85K+', label: 'App Downloads' }
    ]
  }
];

const CaseStudies = () => {
  return (
    <section id="results">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          REAL RESULTS
        </div>
        <h2>Impact that speaks<br />better than words.</h2>
        <p>We don’t just create. We scale businesses with measurable results.</p>
      </div>

      <div className="grid-3">
        {cases.map((study, index) => (
          <motion.div
            key={index}
            className="glass-card"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.75rem', margin: 0 }}>{study.client}</h3>
              <div style={{ background: 'var(--glass-bg)', padding: '0.75rem', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                {study.icon}
              </div>
            </div>
            
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', minHeight: '42px' }}>
              <strong>What we did:</strong> {study.services}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: 'auto' }}>
              {study.metrics.map((metric, i) => (
                <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem 1.25rem', borderRadius: '12px', borderLeft: `2px solid ${index === 0 ? 'var(--accent-red)' : index === 1 ? 'var(--accent-orange)' : 'var(--accent-purple)'}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>{metric.value}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'right', maxWidth: '120px' }}>{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
