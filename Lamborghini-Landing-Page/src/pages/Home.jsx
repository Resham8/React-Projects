import DealerLocatorSection from "../components/DelearLocatorSection";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import NewsSection from "../components/NewsSection";
import SecondSection from "../components/SecondSection";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="w-full h-screen">
        <ImageSlider />
      </div>
      <SecondSection />
      <DealerLocatorSection />
      <NewsSection></NewsSection>
    </>
  );
}

export default Home;
