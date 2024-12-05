
const SecondSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="lamboVid.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Text Overlay */}
      <div className="absolute top-0 left-0 flex h-full w-full items-center bg-black/40">
        <div className="ml-10 max-w-md">
          <p className="mb-3 text-lg md:text-2xl text-gray-300 uppercase">
            Unleash the Power of Motion
          </p>
          <h1 className="text-4xl md:text-4xl font-extrabold text-white leading-tight uppercase">
            Where innovation meets speed. Your drive begins here.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
