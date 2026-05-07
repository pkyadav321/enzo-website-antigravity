import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Share2, PlayCircle, Layout, Palette, Camera, Sparkles, Map, ShoppingBag, ArrowUpRight } from 'lucide-react';

const services = [
  { num: '01', title: 'Performance Ads', desc: 'Turn ad spend into profit. Meta & Google campaigns engineered for high-intent lead generation.', path: '/services/performance-ads', icon: Target },
  { num: '02', title: 'Social Media Growth', desc: 'Build a cult-like following. Organic content that warms audiences and compounds over time.', path: '/services/social-media', icon: Share2 },
  { num: '03', title: 'High-Converting Video', desc: 'Stop the scroll. Short-form reels and video ads scripted, shot, and edited to convert.', path: '/services/high-converting-video', icon: PlayCircle },
  { num: '04', title: 'Conversion Web Design', desc: 'Blazing-fast, mobile-optimized landing pages that turn clicks into paying clients.', path: '/services/conversion-web-design', icon: Layout },
  { num: '05', title: 'Brand & Creative Design', desc: 'From ad creatives to full brand identities — make you the obvious choice in your market.', path: '/services/brand-creative', icon: Palette },
  { num: '06', title: 'Commercial Photography', desc: 'Studio-grade product and lifestyle photography using premium cinema gear.', path: '/services/commercial-photography', icon: Camera },
  { num: '07', title: 'AI-Powered Product Imagery', desc: 'Cut production costs by 70%. Hyper-realistic AI environments for your products.', path: '/services/ai-product-imagery', icon: Sparkles },
  { num: '08', title: 'OOH Advertising', desc: 'Strategic outdoor campaigns and hoardings that dominate local territories offline.', path: '/services/ooh-advertising', icon: Map },
  { num: '09', title: 'Ecommerce Listing Designs', desc: 'Slick, persuasive product infographics and A+ content that drive sales on Amazon & Flipkart.', path: '/services/ecommerce-listing', icon: ShoppingBag },
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'All Services | EnZo Media — Digital Marketing Agency';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Explore all services offered by EnZo Media — Performance Ads, Social Media, Brand Design, Video Production, SEO, and more. Serving Varanasi, Gonda, Ayodhya & Delhi NCR.');
  }, []);

  return (
    <main style={{ background: '#02040a', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 2rem 4rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#666', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '3rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.05em' }}
          onMouseEnter={e => e.currentTarget.style.color = '#ff4d00'}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}
        >← Back to Home</Link>

        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff4d00', display: 'block', marginBottom: '1.5rem' }}>
          What We Do
        </span>
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 1.05, color: '#fff', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
          Our <span style={{ color: '#ff4d00' }}>Services.</span>
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', color: '#666', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
          Every service is built around one outcome — measurable, compounding growth for your business across Varanasi, Gonda, Ayodhya, and Delhi NCR.
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '2rem 2rem 8rem', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '1.5rem' }}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.num} to={s.path} style={{ textDecoration: 'none' }}>
                <div
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', padding: '2.5rem', cursor: 'pointer', transition: 'all 0.3s', position: 'relative', overflow: 'hidden', height: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,77,0,0.3)'; e.currentTarget.style.background = 'rgba(255,77,0,0.04)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {/* Number bg */}
                  <div style={{ position: 'absolute', top: '-10px', right: '15px', fontSize: '6rem', fontWeight: 900, color: 'rgba(255,255,255,0.02)', fontFamily: "'Outfit', sans-serif", pointerEvents: 'none' }}>{s.num}</div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    <div style={{ width: '52px', height: '52px', background: 'rgba(255,77,0,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4d00' }}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight size={18} color="#ff4d00" style={{ opacity: 0.6 }} />
                  </div>

                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{s.title}</h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#777', lineHeight: 1.7 }}>{s.desc}</p>

                  <div style={{ marginTop: '2rem', fontSize: '0.75rem', fontWeight: 700, color: '#ff4d00', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Explore Service →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem 8rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
          Not sure which service you need?
        </h2>
        <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Let's have a free 30-minute strategy call and find out.</p>
        <Link to="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #ff2200, #ff4d00, #ff8c00)', color: '#fff', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '100px', textDecoration: 'none', boxShadow: '0 8px 32px rgba(255,77,0,0.35)' }}>
          Get a Free Audit ↗
        </Link>
      </section>
    </main>
  );
};

export default ServicesPage;
