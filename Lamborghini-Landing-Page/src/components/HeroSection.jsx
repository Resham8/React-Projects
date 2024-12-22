import { useState } from "react";

const HeroSection = () => {
  const content = [
    {
      video: "",
      heading: "capita & union binding",
      subheading: "new snow experience"
    },
    {
      video: "",
      heading: "Temerario",
      subheading: "You can't hide who you are"
    },
    {
      video: "",
      heading: "Ready to go beyond?",
      subheading: "fast forworld"
    }
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleContentChange = (index) => {
    setCurrentIndex(index);
  };

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const currentContent = content[currentIndex];

  return (
    <section className="relative h-full w-full">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={currentContent.video}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        ></video>

        <div className="relative flex items-center justify-between h-full px-8 z-10 ml-14">
          <div className="max-w-4xl">
            <div>
            <p className="mt-4 text-4xl text-white uppercase transition-opacity duration-300">
              {currentContent.heading}
            </p>
            </div>
            <div >
            <h1 className="text-8xl font-bold text-white uppercase transition-opacity duration-300">
              {currentContent.subheading}
            </h1>
            </div>            
            <a
              href="#"
              className="mt-5"              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-16 h-16 mt-5"
                fill={isHovered ? "black" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <polygon
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                  stroke="white"
                  fill={isHovered ? "black" : "none"}
                />
                <path
                  d="M45 35 L65 50 L45 65"
                  fill={isHovered ? "black" : "none"}
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-16  flex space-x-4 z-20">
          {content.map((_, index) => (
            <span
              key={index}
              onClick={() => handleContentChange(index)}
              className={`w-12 h-1 bg-white cursor-pointer ${
                currentIndex === index ? "opacity-100" : "opacity-50"
              }`}
              style={{
                borderRadius: "2px",
                transition: "opacity 0.3s",
              }}
            ></span>
          ))}
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;