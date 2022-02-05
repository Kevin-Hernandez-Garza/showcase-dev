import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// importing components
import NoMatch from './pages/NoMatch';
import Home from './components/HeroSection';
import Nav from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <Router>
      <Nav />
      <Sidebar />
      <Routes>
        <Route path='/showcase-dev' element={<Home />}/>
        <Route path='/showcase-dev' element={<InfoSection />} />
        <Route path='/about' element={<About />}/>
        {/* <Route path='/contact' element={<Contact />}/>
        <Route path='/projects' element={<Project />}/> */}
        <Route path='*' element={<NoMatch />}/>
      </Routes>
      < Footer />
    </Router>
  );
}

export default App;
