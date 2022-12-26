import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const index = () => {
  return (
    <Router>
      <Header />
        <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </main>
      <Footer />
    </Router>
  )
}

export default index;