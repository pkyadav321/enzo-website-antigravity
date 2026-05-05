import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const POSTS_CONTENT = {
  'ai-importance-2026': {
    title: 'Why AI is the Backbone of Creative Strategy in 2026',
    tagline: 'Editorial // AI & Strategy',
    date: 'MAY 4, 2026',
    readTime: '6 MIN READ',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    content: (
      <>
        <p style={{ marginBottom: '2.5rem' }}>
          As we navigate through 2026, the digital landscape has shifted from "attention-grabbing" to "attention-retention." The sheer volume of content produced daily means that traditional creative methods are no longer sufficient to maintain a competitive edge. This is where Artificial Intelligence transitions from a tool to the very backbone of Creative Strategy.
        </p>
        
        <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', marginTop: '4rem' }}>Predictive Creativity.</h2>
        <p style={{ marginBottom: '2.5rem' }}>
          In 2026, we don't guess what will work. We simulate it. AI models now allow us to analyze psychological triggers across millions of data points before a single pixel is designed. At The Enzo Media, we use AI to predict user sentiment, ensuring that every creative asset is scientifically weighted for conversion.
        </p>

        <div style={{ padding: '3rem', background: '#111', borderRadius: '20px', borderLeft: '4px solid #e8352a', margin: '4rem 0' }}>
          <p style={{ color: '#fff', fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.5 }}>
            "AI doesn't replace the artist; it removes the friction between intuition and impact."
          </p>
        </div>

        <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', marginTop: '4rem' }}>Hyper-Personalization at Scale.</h2>
        <p style={{ marginBottom: '2.5rem' }}>
          One-size-fits-all marketing is dead. In 2026, AI enables us to create thousands of variations of a single campaign, each tailored to specific micro-audiences in real-time. This level of personalization was impossible manually, but it is now the standard for brands that dominate their market.
        </p>
      </>
    )
  },
  'performance-creative': {
    title: 'The Death of "Vanilla" Ad Creative',
    tagline: 'Performance // Creative Strategy',
    date: 'APRIL 20, 2026',
    readTime: '5 MIN READ',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
    content: (
      <>
        <p style={{ marginBottom: '2.5rem' }}>
          The era of generic stock photos and safe marketing templates is officially over. In 2026, consumers have developed a biological filter for "vanilla" advertising. To win today, your creative needs to be an editorial masterpiece that feels native to the platform yet superior to the competition.
        </p>
        
        <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', marginTop: '4rem' }}>Editorial vs. Commercial.</h2>
        <p style={{ marginBottom: '2.5rem' }}>
          The highest-performing ads of 2026 don't look like ads. They look like high-end magazine spreads or cinematic short films. This "Editorial Aesthetic" builds immediate authority and trust. When your brand looks like the leader, users treat you like the leader.
        </p>

        <div style={{ padding: '3rem', background: '#111', borderRadius: '20px', borderLeft: '4px solid #e8352a', margin: '4rem 0' }}>
          <p style={{ color: '#fff', fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.5 }}>
            "If your ad looks like an ad, you've already lost the attention war."
          </p>
        </div>

        <h2 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', marginTop: '4rem' }}>The ROI of High-End Design.</h2>
        <p style={{ marginBottom: '2.5rem' }}>
          We've seen it across 50+ clients: brands that invest in custom, high-impact creative see a 3X higher conversion rate on average. Performance marketing without performance creative is just an expensive way to fail.
        </p>
      </>
    )
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = POSTS_CONTENT[postId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div style={{ color: '#fff', padding: '200px', textAlign: 'center' }}>
        <h2>Post Not Found</h2>
        <Link to="/blog" style={{ color: '#e8352a', marginTop: '1rem', display: 'inline-block' }}>Return to Blog</Link>
      </div>
    );
  }

  return (
    <main style={{ background: 'transparent', padding: '160px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link to="/blog" className="back-link" style={{ marginBottom: '2rem', display: 'inline-block', color: '#666', textDecoration: 'none' }}>
          ← Back to Blog
        </Link>
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <span className="section-label">{post.tagline}</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.04em', color: '#fff', marginTop: '2rem' }}>
            {post.title.split(' ').map((word, i) => i > 4 ? <span key={i} className="text-accent">{word} </span> : word + ' ')}
          </h1>
          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#444', fontWeight: 700 }}>
            PUBLISHED {post.date} • {post.readTime}
          </div>
        </div>

        <div className="reveal stagger-1" style={{ width: '100%', height: '500px', overflow: 'hidden', borderRadius: '24px', marginBottom: '4rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="reveal stagger-2" style={{ color: '#aaa', fontSize: '1.2rem', lineHeight: 1.9, textAlign: 'left' }}>
          {post.content}
          
          <p style={{ marginBottom: '2.5rem' }}>
            The conclusion is simple: Brands that prioritize creative excellence combined with data-driven strategy will compound their growth at a rate that traditional agencies simply cannot match.
          </p>
        </div>

        <div className="reveal" style={{ marginTop: '8rem', padding: '6rem', border: '1px solid #1a1a1a', borderRadius: '30px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(232,53,42,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 900, position: 'relative', zIndex: 1 }}>The Future is Performance-Driven.</h3>
            <p style={{ color: '#666', marginTop: '1rem', position: 'relative', zIndex: 1 }}>Join The Enzo Media in the 2026 Creative Revolution.</p>
            <Link to="/#contact" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Start Your Journey →</Link>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
