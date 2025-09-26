import React from 'react';
import Layout from './Layout.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Destinations from '../components/Destinations.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import Testimonials from '@/components/Testimonals.jsx';

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Destinations/>
      <Services/>
      <About />
      <Testimonials/>
      <Contact/>
    </Layout>
  );
};

export default Homepage;
