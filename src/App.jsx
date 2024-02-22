import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/ui/navbar';
import Content from './component/ui/content';
import { AuthProvider } from './context/authContext';
import About from './pages/about';
import Home from './pages/home/Welcome';
import Community from './pages/community';
import Faq from './pages/faq';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        {/* <Content /> */}
      </AuthProvider>
    </Router>
  )
}

export default App
