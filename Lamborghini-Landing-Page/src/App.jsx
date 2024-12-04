// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider/ImageSlider";


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HeroSection />
        <div className="w-full h-screen">
      <ImageSlider />
    </div>
      </div>
    </>
  );
}

export default App;
