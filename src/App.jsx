import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import CalPage from './Pages/CalPage';
import ContactPage from './Pages/ContactPage';
import Navbar from './components/Navbar';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="cal" element={<CalPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
