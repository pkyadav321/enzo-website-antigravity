import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PopupModal from './components/PopupModal';
import Cursor from './components/Cursor';
import Home from './pages/Home';

// Lazy loaded routes for performance optimization
const PortfolioMain = React.lazy(() => import('./pages/PortfolioMain'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const About = React.lazy(() => import('./pages/About'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const DigitalMarketing = React.lazy(() => import('./pages/DigitalMarketing'));
const GoogleAds = React.lazy(() => import('./pages/GoogleAds'));
const SocialMedia = React.lazy(() => import('./pages/SocialMedia'));
const CityLandingPage = React.lazy(() => import('./pages/CityLandingPage'));
const BrandingCaseStudy = React.lazy(() => import('./pages/BrandingCaseStudy'));
import useScrollReveal from './hooks/useScrollReveal';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  return null;
}

// Title management
function TitleManager() {
  const location = useLocation();
  
  useEffect(() => {
    const titles = {
      '/': 'Enzo Media | Best Digital Marketing Agency in Varanasi, Gonda, Ayodhya & Delhi NCR',
      '/about': 'About Us | Enzo Media',
      '/gallery': 'Work Gallery | Enzo Media',
      '/blog': 'Insights & Blog | Enzo Media',
      '/work': 'Portfolio | Enzo Media',
      '/digital-marketing-varanasi': 'Digital Marketing Agency in Varanasi | The Enzo Media',
      '/google-ads-agency': 'Google Ads Agency | High ROI PPC Management',
      '/social-media-marketing': 'Social Media Marketing Services | Brand Growth',
    };

    const path = location.pathname;
    
    if (path.startsWith('/services/')) {
      const serviceId = path.split('/')[2];
      const serviceName = serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      document.title = `${serviceName} | Enzo Media`;
    } else if (path.startsWith('/blog/')) {
      document.title = 'Blog Post | Enzo Media';
    } else if (path.startsWith('/work/')) {
      document.title = 'Category | Enzo Media';
    } else if (path.startsWith('/marketing-agency-')) {
      const cityId = path.replace('/marketing-agency-', '');
      const cityName = cityId.charAt(0).toUpperCase() + cityId.slice(1);
      document.title = `${cityName} Marketing Agency | Enzo Media`;
    } else {
      document.title = titles[path] || 'Enzo Media';
    }
  }, [location]);

  return null;
}

function AppContent() {
  const location = useLocation();
  useScrollReveal(location.pathname);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Mouse glow logic
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-background text-white selection:bg-primary selection:text-white" style={{ cursor: 'none' }}>
      {/* Animated gradient orbs */}
      <div className="mesh-bg" aria-hidden="true" />
      <div className="orb-3" aria-hidden="true" />

      {/* Grain/noise texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.035,
          pointerEvents: 'none',
          zIndex: 9990,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Subtle grid lines */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* Mouse follow glow */}
      <div className="mouse-glow" aria-hidden="true" />

      <Cursor />
      <Navbar />
      <PopupModal />
      <ScrollToTop />
      <TitleManager />
      
      <AnimatePresence mode="sync">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <React.Suspense fallback={<div style={{ height: '100vh', background: '#02040a' }} />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/work" element={<PortfolioMain />} />
              <Route path="/work/:category" element={<CategoryPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/digital-marketing-varanasi" element={<DigitalMarketing />} />
              <Route path="/google-ads-agency" element={<GoogleAds />} />
              <Route path="/social-media-marketing" element={<SocialMedia />} />
              <Route path="/marketing-agency-:cityId" element={<CityLandingPage />} />
              <Route path="/casestudy/sambhala-orchard" element={<BrandingCaseStudy />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </React.Suspense>
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


