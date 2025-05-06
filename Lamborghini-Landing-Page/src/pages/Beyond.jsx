import DirectionalButton from "../components/HexagonButton";

function Beyond() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/beyond/landing/hero/beyond_land_hero_01.jpg"
          alt="Lamborghini car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center ">
          <div className="ml-24 text-white font-semibold">
            <p className="text-4xl uppercase">Driving Humans</p>
            <h1 className="text-8xl font-bold mb-4 uppercase">BEYOND</h1>
            <DirectionalButton direction={"down"} fill={"white"} />
          </div>
        </div>
      </div>
      {/* clip-path: polygon(8% 0, 100% 0%, 75% 100%, 8% 100%); */}
      <div className="flex w-full h-screen relative">
        <div className="w-2/4 h-full -ml-16 overflow-hidden transform skew-x-[-35deg] origin-center relative">
          <img
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/beyond/landing/over/beyond_land_over_01.jpg"
            alt=""
            className="w-full h-full object-cover skew-x-[35deg] origin-center"
          />
        </div>
        <div>
            <h2>OVERVIEW</h2>
            <p>The greatest challenge ever: moving forward and always raising the bar, going beyond the status quo to build a brand new limitless world.</p>
            <DirectionalButton direction={"left"} /> Brand Manifesto
        </div>
      </div>
    </>
  );
}

export default Beyond;
