import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfilSekolah from './pages/ProfilSekolah';
import Blog from './pages/Blog';
import Lokasi from './pages/Lokasi';
import Galeri from './pages/Galeri';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/profilSekolah" element={<ProfilSekolah />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/galeri" element={<Galeri />} />
      </Routes>
    </Router>
  );
};

export default App;
