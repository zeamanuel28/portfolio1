import React from 'react';
import AboutMe from '../AboutMe';
import ContactMe from '../Contact';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import MyPortfolio from '../Myportfolio';
import MySkills from '../MySkills';
import Testimonial from '../Testimonials';

import Header from '../Header';

export default function Home() {
  return (
    <main className="home--container">
      <Header />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </main>
  );
}