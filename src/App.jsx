import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import DestinationSection from "./Components/DestinationSection";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/DestinationSection" element={<DestinationSection />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;