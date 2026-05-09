import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 'best-digital-marketing-varanasi-2026',
    title: 'How to Find the Best Digital Marketing Agency in Varanasi in 2026',
    date: 'May 14, 2026',
    excerpt: 'Stop wasting ad spend on agencies that don\'t deliver. Here is the ultimate guide to finding the top performance marketing and SEO experts in UP.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    id: 'facebook-ads-failing-2026',
    title: 'Why Facebook Ads Are Failing in 2026 (And What to Do Instead)',
    date: 'May 13, 2026',
    excerpt: 'Are your Facebook Ads dying? Discover why traditional social media marketing is failing in India and the AI tools you must use to recover your ROI.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'real-estate-marketing-strategy-2026',
    title: 'Digital Marketing Strategy for Real Estate Businesses: The 2026 Playbook',
    date: 'May 12, 2026',
    excerpt: 'The exact digital marketing blueprint that top real estate developers in Delhi NCR and UP are using to generate high-quality home buyer leads.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'real-estate-investment-trends-india-2026',
    title: 'Real Estate Investment Trends in India 2026: Where to Buy',
    date: 'May 11, 2026',
    excerpt: 'Discover the fastest-growing commercial and residential property hubs in UP. See the latest property appreciation rates and where smart investors are putting their money.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'buying-new-flat-checklist-2026',
    title: 'The 2026 Checklist for Buying a New Flat: Don\'t Get Scammed',
    date: 'May 10, 2026',
    excerpt: 'Buying a 2BHK or luxury apartment? Read this complete checklist covering RERA approvals, under-construction vs ready-to-move, and legal checks.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'how-to-calculate-home-loan-emi',
    title: 'How to Calculate Home Loan EMI Easily: A Buyer\'s Guide',
    date: 'May 9, 2026',
    excerpt: 'Planning to buy a luxury apartment or commercial property? Learn exactly how to calculate your home loan EMIs and budget your next big investment.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop'
  },
  {
    id: 'real-estate-digital-marketing-seo-2026',
    title: 'Real Estate Marketing in 2026: The Ultimate SEO & Lead Gen Guide',
    date: 'May 12, 2026',
    excerpt: 'Stop wasting money on dead leads. Learn the exact high-intent keywords, voice search trends, and local SEO strategies top property builders use to dominate in 2026.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop'
  },
  {
    id: 'local-seo-ai-trends-2026',
    title: 'Top Digital Marketing Trends for Indian Businesses in 2026',
    date: 'May 10, 2026',
    excerpt: 'The 2026 playbook for Indian businesses: Why dominating Google\'s 3-Pack and shifting to AI-driven regional marketing is the key to local supremacy.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ai-importance-2026',
    title: 'Why AI is the Backbone of Creative Strategy in 2026',
    date: 'May 4, 2026',
    excerpt: 'The shift from manual execution to AI-driven strategy is no longer a choice—it is a survival mechanism for brands.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'performance-creative',
    title: 'The Death of "Vanilla" Ad Creative',
    date: 'April 20, 2026',
    excerpt: 'How high-end editorial aesthetics are outperforming traditional marketing templates in every industry.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop'
  }
];

const Blog = () => {
  const navigate = useNavigate();
  
  return (
    <main style={{ background: 'transparent', padding: '160px 0' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <span className="section-label">Editorial Blog</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.05em', color: '#fff' }}>
            Thoughts on <span className="text-accent">Growth.</span>
          </h1>
        </div>

        <div className="reveal stagger-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          {blogPosts.map((post) => (
            <div key={post.id} className="card" style={{ padding: '0', overflow: 'hidden', textAlign: 'left', cursor: 'pointer' }} onClick={() => navigate(`/blog/${post.id}`)}>
              <div style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#444', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.date}</div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>{post.title}</h2>
                <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>{post.excerpt}</p>
                <span style={{ color: '#e8352a', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Read Post ↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
