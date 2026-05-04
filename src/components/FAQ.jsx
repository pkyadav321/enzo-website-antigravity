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
        borderBottom: '1px solid #1a1a1a', 
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
          color: isOpen ? '#e8352a' : '#fff',
          transition: 'color 0.3s'
        }}>
          {question}
        </h4>
        <span style={{ 
          fontSize: '1.5rem', 
          color: isOpen ? '#e8352a' : '#222', 
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
        <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7, maxWidth: '800px' }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section id="faq" style={{ background: 'transparent', padding: '120px 0' }}>
    <div className="container">
      
      {/* Centered header */}
      <div className="reveal section-header" style={{ textAlign: 'center' }}>
        <span className="section-label">Questions</span>
        <h2 style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontSize: 'clamp(3rem, 7vw, 7rem)', 
          fontWeight: 900, 
          lineHeight: 1.15, 
          letterSpacing: '-0.05em', 
          color: '#fff', 
          marginBottom: '2.5rem' 
        }}>
          Frequently<br />
          <span className="text-italic-accent">Asked Questions.</span>
        </h2>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
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
