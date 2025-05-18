import React from 'react';
import Header from '../component/Header';
import Hero from './Hero';

const HomePage = () => {
  return (
  <>
    <Header isHomepage={true} />
    <Hero />
  </>
  );
};

export default HomePage;
