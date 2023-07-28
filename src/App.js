import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import ProfilSekolah from './pages/ProfilSekolah';
// import Contact from './pages/Contact';
// import Courses from './pages/Courses';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        <Route path="/profilSekolah" element={<ProfilSekolah />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        */}
      </Routes>
    </Router>
  );
};

export default App;
