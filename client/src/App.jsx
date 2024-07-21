import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Clubs from './Components/Clubs/Clubs';
import Community from './Components/Community/Community';
import Events from './Components/Events/Events';
import Register from './Components/Register/Register'; // Import Register component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
};

export default App;
