const HeroSection = () => {
  const carImage = "lamo.jpg";
  return (
    <section className="relative h-full w-full">
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center img-lg"
          style={{ backgroundImage: `url(${carImage})` }}
        ></div>

        <div className="relative flex items-center justify-between h-full px-8 z-10">
          <div className="text-left max-w-lg">
            <p className="mt-4 text-lg md:text-xl text-gray-300 uppercase">
              aventador svj roadster
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase">
              real emotions shape the future
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
