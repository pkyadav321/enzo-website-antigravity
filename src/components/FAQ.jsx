import React, { useState } from 'react';

const faqData = [
  {
    question: "What specific results can I expect?",
    answer: "We focus on ROI, not just 'likes' or 'reach'. Depending on your industry, we typically see a significant increase in qualified leads or foot traffic within the first 60-90 days of campaign launch."
  },
  {
    question: "Which locations do you serve?",
    answer: "While we are based in Varanasi, we serve ambitious businesses across Uttar Pradesh, with high concentrations of clients in Ayodhya, Gonda, Ghaziabad, and Lucknow."
  },
  {
    question: "How long does it take to start?",
    answer: "Once the strategy is finalized and the audit is complete, we can typically have your first set of high-converting creatives and campaigns live within 7-10 business days."
  },
  {
    question: "Do you work with small businesses?",
    answer: "We work with businesses of all sizes, provided they are ready to scale and have a clear goal. Our 'Performance' model is specifically designed to help local businesses dominate their territory."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer transparent, fixed-fee packages and performance-based models depending on the complexity of your project. No hidden costs, no surprise invoices."
  }
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`reveal stagger-${index + 1}`} 
      style={{ 
        borderBottom: '1px solid var(--border-color)', 
        padding: '2rem 0', 
        textAlign: 'left', 
        cursor: 'pointer' 
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        <h4 style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
          fontWeight: 800, 
          color: isOpen ? 'var(--primary)' : 'var(--text-primary)',
          transition: 'color 0.3s'
        }}>
          {question}
        </h4>
        <span style={{ 
          fontSize: '1.5rem', 
          color: isOpen ? 'var(--primary)' : 'var(--text-tertiary)', 
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', 
          transition: 'all 0.3s' 
        }}>+</span>
      </div>
      <div style={{ 
        maxHeight: isOpen ? '200px' : '0', 
        overflow: 'hidden', 
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isOpen ? 1 : 0,
        marginTop: isOpen ? '1.5rem' : '0'
      }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '800px' }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const MandalaBg = ({ style }) => (
  <div 
    style={{ 
      position: 'absolute', 
      width: '380px', 
      height: '380px', 
      opacity: 0.02, 
      pointerEvents: 'none', 
      color: 'var(--primary)',
      zIndex: 0,
      ...style 
    }}
  >
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
      <circle cx="50" cy="50" r="46" />
      <circle cx="50" cy="50" r="38" />
      <circle cx="50" cy="50" r="30" />
      <circle cx="50" cy="50" r="22" />
      <circle cx="50" cy="50" r="14" />
      <circle cx="50" cy="50" r="6" />
      {/* Radiant spokes */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * Math.PI) / 8;
        const x2 = 50 + 46 * Math.cos(angle);
        const y2 = 50 + 46 * Math.sin(angle);
        return <line key={i} x1="50" y1="50" x2={x2} y2={y2} strokeLinecap="round" />;
      })}
      {/* Concentric rings dots */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * Math.PI) / 12;
        const cx = 50 + 38 * Math.cos(angle);
        const cy = 50 + 38 * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="0.8" fill="currentColor" />;
      })}
    </svg>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" style={{ background: 'transparent', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Heritage Mandala Outlines */}
      <MandalaBg style={{ top: '-10%', left: '-10%' }} />
      <MandalaBg style={{ bottom: '-10%', right: '-10%' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Centered header */}
        <div className="reveal section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Questions</span>
          <h2 style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: 'clamp(2.5rem, 5vw, 6rem)', 
            fontWeight: 900, 
            lineHeight: 1.15, 
            letterSpacing: '-0.05em', 
            color: 'var(--text-primary)', 
            marginBottom: '2.5rem' 
          }}>
            Frequently<br />
            <span className="text-italic-accent">Asked Questions.</span>
          </h2>
          <p style={{ color: '#3f3f46', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            Everything you need to know before we start scaling your business.
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
