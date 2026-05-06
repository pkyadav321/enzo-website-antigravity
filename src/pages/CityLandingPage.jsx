import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const cityData = {
  varanasi: {
    name: 'Varanasi',
    title: 'Top-Tier Digital Marketing Agency in Varanasi',
    description: 'We don\'t just "post" or "rank." We engineer growth engines. The Enzo Media helps businesses in Varanasi scale using data-driven SEO, performance marketing, and high-impact strategy.',
    highlight: 'Varanasi\'s market is evolving fast. To win, you need more than a website; you need a dominant digital presence.',
    keywords: ['Advanced SEO', 'Performance Ads', 'Strategic Content'],
    labels: ['Growth Engine // 2026', 'Varanasi SEO Expert', 'Local Dominance']
  },
  ayodhya: {
    name: 'Ayodhya',
    title: 'Leading Real Estate Marketing Agency in Ayodhya',
    description: 'Ayodhya is witnessing a massive boom. The Enzo Media provides specialized digital marketing and lead generation solutions for the growing real estate and hospitality sectors in Ayodhya.',
    highlight: 'With the city transforming, your brand needs to capture high-intent investors. We combine technical SEO with aggressive performance marketing to ensure your properties sell fast.',
    keywords: ['Real Estate Lead Gen', 'Hospitality Marketing', 'Tourism SEO'],
    labels: ['Real Estate Growth // 2026', 'Ayodhya Market Leader', 'High-Intent Leads']
  },
  gonda: {
    name: 'Gonda',
    title: 'Digital Marketing & Lead Generation for Schools in Gonda',
    description: 'Empowering institutions and local businesses in Gonda. We specialize in high-conversion school admission campaigns and local business scaling using data-driven strategies.',
    highlight: 'Education is Gonda\'s pride. We help top institutions reach the right parents and students through precise targeting and creative excellence.',
    keywords: ['School Admissions Marketing', 'Local Lead Gen', 'Education SEO'],
    labels: ['Education Growth // 2026', 'Gonda Tech Partner', 'Admission Scaling']
  },
  prayagraj: {
    name: 'Prayagraj',
    title: 'Premium Creative & Marketing Agency in Prayagraj',
    description: 'Prayagraj is the cultural hub of UP. We make your brand the digital hub. Helping Prayagraj\'s brands build authority and scale with performance-driven creative and branding.',
    highlight: 'Building a legacy in Prayagraj requires a mix of tradition and digital innovation. Our approach ensures your brand stays relevant and dominant in the local market.',
    keywords: ['Brand Authority', 'Performance Marketing', 'Visual Identity'],
    labels: ['Cultural Dominance // 2026', 'Prayagraj Creative Hub', 'Brand Scaling']
  },
  ghaziabad: {
    name: 'Ghaziabad',
    title: 'Growth-Focused Marketing Agency in Ghaziabad (Delhi NCR)',
    description: 'Ghaziabad is the gateway to growth in the Delhi NCR region. We scale brands across Ghaziabad using aggressive growth strategies, precision ads, and high-speed web design.',
    highlight: 'In the competitive Delhi NCR landscape, speed and conversion are everything. We build high-speed conversion machines that guide users toward action.',
    keywords: ['Delhi NCR SEO', 'Precision Ads', 'Conversion Web Design'],
    labels: ['NCR Growth // 2026', 'Ghaziabad Performance', 'Market Domination']
  }
};

const CityLandingPage = () => {
  const { cityId } = useParams();
  const data = cityData[cityId] || cityData.varanasi;

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.title is handled by TitleManager in App.jsx, but we can set it here too if needed
  }, [data]);

  return (
    <main className="sub-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label reveal">{data.labels[0]}</span>
          <h1 className="reveal stagger-1 page-title">
            {data.title.includes(data.name) ? (
              <>
                {data.title.split(data.name)[0]}
                <span className="text-accent">{data.name}</span>
                {data.title.split(data.name)[1]}
              </>
            ) : data.title}
          </h1>
          <p className="reveal stagger-2 about-description">
            {data.description}
          </p>
          <div className="reveal stagger-3" style={{ marginTop: '3rem' }}>
             <a href="/#contact" className="btn-primary">Get a Free Strategy Audit ↗</a>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="about-section methodology-section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <h2 className="about-sub-title">
                The <span className="text-accent">{data.name}</span> Dominance Strategy.
              </h2>
              <p className="about-text">
                {data.highlight}
              </p>
              <p className="about-text">
                From local startups in UP to national brands in Delhi NCR, we've helped 50+ clients achieve radical transparency in their marketing spend and real, measurable ROI.
              </p>
            </div>
            <div className="reveal stats-grid">
              {[
                { value: '100K+', label: 'Leads Generated' },
                { value: '50+', label: 'Clients Served' },
                { value: '3+', label: 'Years in Market' },
                { value: '3X', label: 'Avg ROI Delivered' },
              ].map((s, i) => (
                <div key={i} className={`stat-card stagger-${i+1}`}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="about-section values-section">
        <div className="container">
          <div className="reveal section-header-centered">
            <span className="section-label">Core Capabilities</span>
            <h2 className="about-sub-title">Comprehensive <span className="text-accent">Marketing Stack.</span></h2>
          </div>

          <div className="values-grid">
            {data.keywords.map((k, i) => (
              <div key={i} className={`reveal stagger-${i+1} value-item`}>
                <h3 className="value-title">{k}</h3>
                <p className="value-desc">
                  Tailored marketing strategies designed to dominate the {data.name} market using data-driven hooks and high-intent keyword optimization.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />
      <Testimonials />
      
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default CityLandingPage;
