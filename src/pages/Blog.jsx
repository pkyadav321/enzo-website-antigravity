import React from 'react';

const blogPosts = [
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

const Blog = () => (
  <main style={{ background: 'transparent', padding: '160px 0' }}>
    <div className="container">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <span className="section-label">Editorial Blog</span>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.05em', color: '#fff' }}>
          Thoughts on <span className="text-accent">Growth.</span>
        </h1>
      </div>

      <div className="reveal stagger-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
        {blogPosts.map((post) => (
          <div key={post.id} className="card" style={{ padding: '0', overflow: 'hidden', textAlign: 'left', cursor: 'pointer' }} onClick={() => window.location.hash = `#/blog/${post.id}`}>
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

export default Blog;
