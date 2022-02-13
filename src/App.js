import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// importing components
// import NoMatch from './pages/NoMatch';
import Home from './components/HeroSection';
import Nav from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import InfoSection from './components/InfoSection';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  // [ StateName, functionUpdatingIt ] = useState(InitialState);
  const [ isOpen, setIsOpen ] = useState(false);
  // function that updates the state 
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Nav toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path='/showcase-dev' element={<Home />}/>
        <Route path='/showcase-dev' element={<InfoSection />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projects' element={<Project />}/>
        {/* <Route path='*' element={<NoMatch />}/> */}
      </Routes>
      < Footer />
    </Router>
  );
}

export default App;
