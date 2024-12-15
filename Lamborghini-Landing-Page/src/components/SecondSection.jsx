import { useState } from "react";

const SecondSection = () => {
  const images = [
    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2024/08_16/temerario_model_chooser.jpg",
    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/revuelto_home.jpg",
    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/2024/model_chooser/Model%3DUrus%20SE%2C%20Type%3DLightCC%20%281%29.jpg",
  ];

  const carNames = ["Temerario", "Revuelto", "Urus"]

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [activeButton, setActiveButton] = useState(0);
  const [carName, setCarName] = useState(carNames[0]);

  const handleButtonClick = (index) => {
    console.log(`Button ${index} clicked`); // Debug log
    setCurrentImage(images[index]);
    setActiveButton(index);
    setCarName(carNames[index]);
  };

  return (
    <section className="relative w-full h-screen">
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>

        <div className="relative flex items-center justify-between h-full px-16 z-10 ">
          <div
            className="text-left max-w-lg ml-10 animate-slideInLeft transition-all duration-1000 ease-in-out"
            style={{ marginBottom: "245px" }}
          >
            <h4 className="uppercase text-3xl font-medium text-gray-800">
              CONFIGURATOR
            </h4>
            <h1 className="uppercase text-7xl font-bold text-gray-800 transition duration-300 ease-in-out">
              CREATE YOUR {carName}
            </h1>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon 
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
                  stroke="black" 
                  fill="none" 
                />
                <path 
                  d="M45 35 L65 50 L45 65" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute bottom-40 left-1/4 transform -translate-x-1/2 flex space-x-8 z-20">
          {carNames.map((label, index) => (
            <button
              key={index}
              className={`text-lg font-medium border-b-2 px-4 pb-1 transition-all cursor-pointer ${
                activeButton === index ? "border-gray-800" : "border-gray-300"
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
