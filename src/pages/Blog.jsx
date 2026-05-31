import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 'best-digital-marketing-varanasi-2026',
    title: 'How to Find the Best Digital Marketing Agency in Varanasi in 2026',
    date: 'May 14, 2026',
    excerpt: 'Stop wasting ad spend on agencies that don\'t deliver. Here is the ultimate guide to finding the top performance marketing and SEO experts in UP.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=800&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'website-performance-seo-2026',
    title: 'Why Website Speed is the Ultimate SEO Ranking Factor in 2026',
    date: 'May 11, 2026',
    excerpt: 'Beautiful designs don\'t matter if your website is slow. Discover why Google penalizes slow websites and how technical SEO drives revenue.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'brand-identity-scaling-business',
    title: 'Beyond Logos: How to Build a Brand Identity That Scales',
    date: 'May 10, 2026',
    excerpt: 'Your brand is not just a logo; it is how your customers feel. Learn the psychology of premium branding and how it commands higher prices.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'b2b-lead-generation-strategies',
    title: 'B2B Lead Generation: Cold Outreach Strategies That Actually Work',
    date: 'May 9, 2026',
    excerpt: 'Struggling to close high-ticket clients? Stop spamming and start connecting. Here is our exact blueprint for high-converting B2B lead generation.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1596495577886-d925f1b75389?q=80&w=800&auto=format&fit=crop'
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
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>
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
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-tertiary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.date}</div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>{post.title}</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>{post.excerpt}</p>
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
