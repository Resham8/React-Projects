import { ChevronRight } from "lucide-react";
import DirectionalButton from "../components/HexagonButton";

function Beyond() {
  return (
    <div className="flex flex-col gap-6">
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

      <div className="relative w-full flex-grow overflow-hidden">
        <div className="relative h-[calc(100vh-72px)] w-full">
          <div className="reletive top-0 left-0 h-full w-full">
            <div
              className="reletive top-0 left-0 h-full transform -translate-x-[455px]"
              style={{
                width: "100%",
                clipPath: "polygon(0 0, 100% 0, 65% 100%, 0 100%)",
                WebkitClipPath: "polygon(0 0, 100% 0, 65% 100%, 0 100%)",
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/beyond/landing/over/beyond_land_over_01.jpg"
                  alt="Children looking at Lamborghini"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 h-full w-full md:w-1/2 lg:w-2/5 flex items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                OVERVIEW
              </h1>
              <p className="text-base md:text-lg mb-8 leading-relaxed">
                The greatest challenge ever: moving forward and always raising
                the bar, going beyond the status quo to build a brand new
                limitless world.
              </p>
              <a
                href="/brand-manifesto"
                className="inline-flex items-center group"
              >
                <div className="border border-black p-3 rounded-full mr-3 group-hover:bg-black group-hover:text-white transition-colors">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Brand Manifesto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Beyond;
