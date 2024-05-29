import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Product from './Products';
import Partners from './Partners';

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Product />
      <Partners />
    </div>
  );
}

export default Home;
