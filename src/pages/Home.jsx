import React from 'react';
import Hero from '@/components/Hero';
import LinkedInPromotion from '@/components/LinkedInPromotion';
import ProductComparison from '@/components/ProductComparison';
import ProductsDetail from '@/components/ProductsDetail';
import HelpMeChoose from '@/components/HelpMeChoose';
import MentorInfo from '@/components/MentorInfo';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const Home = () => {
  return (
    <>
      <Hero />
      <LinkedInPromotion />
      <HelpMeChoose />
      <ProductsDetail />
      <ProductComparison />
      <MentorInfo />
      <LeadCaptureModal />
    </>
  );
};

export default Home;