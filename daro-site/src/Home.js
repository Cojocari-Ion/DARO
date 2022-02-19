import React from 'react';
import Hero from './components/Hero/Hero';
import Colaborare from './components/Colaborare/Colaborare';
import Decorations from './components/Decorations/Decorations';
import WhyUs from './components/WhyUs + Clients/WhyUs';
import Slogan from './components/Slogan/Slogan';
import OurPage from './components/ourPage/OurPage';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
      
    window.scrollTo(0, 0)
   
  }, []);
  
  return ( 
  
    <div className="home">
      
      <Decorations/>
      <Hero/>
      <Colaborare/>
      <WhyUs />
      <Slogan/>
      <OurPage/>
      <Projects/>
      <ContactForm />
    </div>

  );
};

export default Home;
