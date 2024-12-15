const DealerLocatorSection = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
          style={{
            backgroundImage:
              "url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/banner/533702.jpg)",
          }}
        ></div>

        <div className="relative flex items-center justify-between h-full px-16 z-10 ">
          <div
            className="text-left max-w-2xl ml-10 animate-slideInLeft transition-all duration-1000 ease-in-out">
            <h4 className="uppercase text-3xl text-white font-medium">
              DEALER LOCATOR
            </h4>
            <h1 className="uppercase text-7xl font-bold text-white transition duration-300 ease-in-out mb-8">
              FIND YOUR COUNTRY DEALER
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
                  stroke="white"
                  fill="none"
                />
                <path
                  d="M45 35 L65 50 L45 65"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerLocatorSection;
