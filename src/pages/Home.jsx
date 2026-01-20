import React from 'react';
import Hero from '@/components/Hero';
import ProductComparison from '@/components/ProductComparison';
import ProductsDetail from '@/components/ProductsDetail';
import HelpMeChoose from '@/components/HelpMeChoose';
import MentorInfo from '@/components/MentorInfo';

const Home = () => {
  return (
    <>
      <Hero />
      <HelpMeChoose />
      <ProductsDetail />
      <ProductComparison />
      <MentorInfo />
    </>
  );
};

export default Home;