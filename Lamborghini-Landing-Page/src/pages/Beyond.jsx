import DirectionalButton from "../components/HexagonButton";

function Beyond() {
  return (
    <>      
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/beyond/landing/hero/beyond_land_hero_01.jpg"
          alt="Lamborghini car"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="ml-24 text-white font-semibold">
            <p className="text-4xl uppercase">Driving Humans</p>
            <h1 className="text-8xl font-bold mb-4 uppercase">BEYOND</h1>
            <DirectionalButton direction="down" fill="white" />
          </div>
        </div>
      </div>
      
      <div className="w-full h-screen flex relative overflow-hidden">        
        <div className="w-[65%] h-full relative clip-diagonal">
          <img
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/beyond/landing/over/beyond_land_over_01.jpg"
            alt="Lamborghini"
            className="w-full h-full object-cover object-left"
          />
        </div>
                
        <div className="w-[35%] h-full flex flex-col justify-center items-start px-12 bg-white">
          <h2 className="text-5xl font-black uppercase mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-10">
            The greatest challenge ever: moving forward and always raising the
            bar, going beyond the status quo to build a brand new limitless
            world.
          </p>
          <div className="flex items-center gap-3">
            <div className="border border-gray-300 rounded-full p-1">
              <DirectionalButton direction="right" />
            </div>
            <span className="uppercase font-bold tracking-wider text-sm">
              Brand Manifesto
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beyond;