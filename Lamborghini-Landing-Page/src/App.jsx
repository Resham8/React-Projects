// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import SecondSection from "./components/SecondSection";
import DealerLocatorSection from "./components/DelearLocatorSection";
import NewsSection from "./components/NewsSection";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HeroSection />
        <div className="w-full h-screen">
          <ImageSlider />
        </div>
        <SecondSection />
        <DealerLocatorSection/>
        <NewsSection></NewsSection>
      </div>
    </>
  );
}

export default App;
