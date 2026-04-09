import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Products />
      <WhyUs />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;
