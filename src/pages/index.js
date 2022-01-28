import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navigation';

const Home = () => {
// [ StateName, functionUpdatingIt ] = useState(InitialState);
  const [ isOpen, setIsOpen ] = useState(false);
// function that updates the state 
  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
  <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
  </>
  );
};

export default Home;
