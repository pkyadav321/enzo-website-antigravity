import React from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CitiesSection from '../components/CitiesSection';

const Home = () => (
  <main>
    <Hero />
    <Services />
    <Portfolio />
    <ClientLogos />
    <Process />
    <WhyChooseUs />
    <CitiesSection />
    <Testimonials />
    <FAQ />
    <Contact />
  </main>
);

export default Home;
