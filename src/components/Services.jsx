import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Target, 
  Share2, 
  PlayCircle, 
  Layout, 
  Palette, 
  Camera, 
  Sparkles, 
  Map, 
  ShoppingBag,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    num: '01', title: 'Performance Ads',
    desc: 'Turn ad spend into profit. Meta & Google campaigns engineered for high-intent lead generation.',
    path: '/services/performance-ads',
  },
  {
    num: '02', title: 'Social Media Growth',
    desc: 'Build a cult-like following. Organic content that warms audiences and compounds over time.',
    path: '/services/social-media',
  },
  {
    num: '03', title: 'High-Converting Video',
    desc: 'Stop the scroll. Short-form reels and video ads scripted, shot, and edited to convert.',
    path: '/services/high-converting-video',   // ← FIXED (was /google-ads-agency)
  },
  {
    num: '04', title: 'Conversion Web Design',
    desc: 'Blazing-fast, mobile-optimized landing pages that turn clicks into paying clients.',
    path: '/services/conversion-web-design',
  },
  {
    num: '05', title: 'Brand & Creative Design',
    desc: 'From ad creatives to full brand identities — make you the obvious choice in your market.',
    path: '/services/brand-creative',
  },
  {
    num: '06', title: 'Commercial Photography',
    desc: 'Studio-grade product and lifestyle photography using premium cinema gear.',
    path: '/services/commercial-photography',
  },
  {
    num: '07', title: 'AI-Powered Product Imagery',
    desc: 'Cut production costs by 70%. Hyper-realistic AI environments for your products.',
    path: '/services/ai-product-imagery',
  },
  {
    num: '08', title: 'OOH Advertising',
    desc: 'Strategic outdoor campaigns and hoardings that dominate local territories offline.',
    path: '/services/ooh-advertising',
  },
  {
    num: '09', title: 'Ecommerce Listing Designs',
    desc: 'Slick, persuasive product infographics and A+ content that drive sales on Amazon & Flipkart.',
    path: '/services/ecommerce-listing',
  },
];

const Services = () => {
  const navigate = useNavigate();

  const getIcon = (title) => {
    const props = { size: 32, strokeWidth: 1.5 };
    switch (title) {
      case 'Performance Ads': return <Target {...props} />;
      case 'Social Media Growth': return <Share2 {...props} />;
      case 'High-Converting Video': return <PlayCircle {...props} />;
      case 'Conversion Web Design': return <Layout {...props} />;
      case 'Brand & Creative Design': return <Palette {...props} />;
      case 'Commercial Photography': return <Camera {...props} />;
      case 'AI-Powered Product Imagery': return <Sparkles {...props} />;
      case 'OOH Advertising': return <Map {...props} />;
      case 'Ecommerce Listing Designs': return <ShoppingBag {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" style={{ background: 'transparent', padding: '120px 0' }}>
      <div className="container">

        {/* Centered header */}
        <div className="reveal section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Services</span>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 6rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.05em',
              color: 'var(--text-primary)',
              marginBottom: '2.5rem',
            }}
          >
            What We{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff2200 0%, #ff4d00 50%, #ff8c00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Do.
            </span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            Every service is built around one outcome — measurable growth for your business.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="services-grid">
          {services.map((s, i) => {
            return (
              <div
                key={s.num}
                className={`service-card reveal stagger-${i + 1}`}
                onClick={() => navigate(s.path)}
              >
                <div className="service-card-top">
                  <div className="service-card-icon-main">{getIcon(s.title)}</div>
                  <div className="service-card-arrow">
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="service-card-body">
                  <span className="service-card-number">{s.num}</span>
                  <h3 className="service-card-title">{s.title}</h3>
                  <p className="service-card-description">{s.desc}</p>
                </div>
                <div className="service-card-footer">
                  <span className="service-card-link">Explore Service</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
