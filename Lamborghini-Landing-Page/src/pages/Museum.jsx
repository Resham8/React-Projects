import { useEffect, useRef, useState } from "react";
import DirectionalButton from "../components/HexagonButton";

const sliderData = [
  {
    imageUrl:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/hero/museo_23_hero_02.jpg",
  },
  {
    imageUrl:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2024/12_18_refresh/museo_hero_01.jpg",
  },
  {
    imageUrl:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/hero/museo_23_hero_03.jpg",
  },
];

export default function Museum() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderData.length);
  };

  const startAutoPlay = () => {
    timerRef.current = setInterval(nextSlide, 3000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => clearInterval(timerRef.current);
  }, [currentIndex]);

  return (
    <div>
      {/* slider */}
      <div>
        <div className="relative h-screen w-full">
          (
          <img
            key={currentIndex}
            src={sliderData[currentIndex].imageUrl}
            alt="Slide 1 image"
            className="h-full w-full object-cover animate-fade-in"
          />
          )
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
          <div className="absolute top-1/2 left-96 transform -translate-x-1/2 -translate-y-1/2 text-white text-left z-20">
            <h2 className="text-4xl font-semibold animate-slide-in-left">
              AUTOMOBILI LAMBORGHINI
            </h2>
            <h2 className="text-8xl font-bold mt-2 animate-slide-in-left">
              MUSEUM
            </h2>
            <DirectionalButton direction={"down"} />
          </div>
          <div className="absolute bottom-10 left-32 flex gap-2 z-20">
            {sliderData.map((slide, index) => (
              <span
                key={index}
                className={`w-10  block cursor-pointer ${
                  currentIndex == index ? "h-1 bg-white" : "h-0.5 bg-gray-500"
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
