// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import BackgroundContainer from "./Components/BackgroundContainer";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
        <BackgroundContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/services" element={<Services/>}/>
          </Routes>
          <Footer/>
        </BackgroundContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
