import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfilSekolah from './pages/ProfilSekolah';
import Blog from './pages/Blog';
import Lokasi from './pages/Lokasi';
import Galeri from './pages/Galeri';
import Internal from './pages/Internal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profilSekolah" element={<ProfilSekolah />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/info" element={<Internal />} />
      </Routes>
    </Router>
  );
};

export default App;
