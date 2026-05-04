import React, { useEffect, useState } from 'react';
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
import CursorTrail from './components/CursorTrail';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  useScrollReveal(currentPath);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash);
      
      // If it's a direct section link on the same page
      if (hash && hash.startsWith('#') && !hash.includes('/')) {
        const id = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (hash === '#about' || hash === '' || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderPage = () => {
    if (currentPath.startsWith('#/work')) {
      const pathParts = currentPath.split('/');
      if (pathParts.length > 2) return <CategoryPage category={pathParts[2]} />;
      return <PortfolioMain />;
    }
    if (currentPath.startsWith('#/services/')) {
      const serviceId = currentPath.split('/')[2];
      return <ServiceDetail serviceId={serviceId} />;
    }
    if (currentPath === '#/blog') return <Blog />;
    if (currentPath.startsWith('#/blog/')) {
      const postId = currentPath.split('/')[2];
      return <BlogPost postId={postId} />;
    }
    if (currentPath === '#about') return <About />;
    if (currentPath === '#gallery') return <GalleryPage />;
    return <Home />;
  };

  return (
    <div>
      <div className="mesh-bg" />
      <div className="mouse-glow" />
      <CursorTrail />
      <Navbar />
      <PopupModal />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
