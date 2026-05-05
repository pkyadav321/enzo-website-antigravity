import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PopupModal from './components/PopupModal';
import Home from './pages/Home';
import PortfolioMain from './pages/PortfolioMain';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import GalleryPage from './pages/GalleryPage';
import DigitalMarketing from './pages/DigitalMarketing';
import GoogleAds from './pages/GoogleAds';
import SocialMedia from './pages/SocialMedia';
import CursorTrail from './components/CursorTrail';
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
      '/social-media-marketing': 'Social Media Marketing Services | Brand Growth'
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
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="mesh-bg" />
      <div className="mouse-glow" />
      <CursorTrail />
      <Navbar />
      <PopupModal />
      <ScrollToTop />
      <TitleManager />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/work" element={<PortfolioMain />} />
        <Route path="/work/:category" element={<CategoryPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        
        {/* New SEO Pages */}
        <Route path="/digital-marketing-varanasi" element={<DigitalMarketing />} />
        <Route path="/google-ads-agency" element={<GoogleAds />} />
        <Route path="/social-media-marketing" element={<SocialMedia />} />
        
        {/* Fallback to Home for hash routes or 404s */}
        <Route path="*" element={<Home />} />
      </Routes>
      
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

