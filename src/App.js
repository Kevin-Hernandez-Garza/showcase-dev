import React from 'react';
import './App.css';
// import components 
// import About from  './components/About';
import Navbar from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/welcome' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
