import { ChevronRight } from "lucide-react";
import DirectionalButton from "../components/HexagonButton";
import NewsBox from "../components/NewsBox";

function Beyond() {
  const newsItems = [
    {
      date: "19 December 2024",
      title:
        "Automobili Lamborghini and Italian State Police: 20 years together",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/12_19_police/cover_d.jpg",
      buttons: [{ text: "Beyond" }],
      description:
        "Combined energy consumption: 14,1 l/100km; Combined CO2 emissions: 320 g/km; Combined CO2 efficiency class: G",
    },
    {
      date: "4 December 2024",
      title: "Movember 2024: Lamborghini's commitment to prevention",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/12_04_movember/movember_24_cover.jpg",
      buttons: [{ text: "MOVEMEBER" }, { text: "Beyond" }],
      description:
        "The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage",
    },
    {
      date: "8 November 2024",
      title: "Lamborghini introduces unique Apple Vision Pro experience",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/10_29_apple/apple_vision_cover.jpg",
      buttons: [{ text: "temerario" }, { text: "Beyond" }],
      description:
        "The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage",
    },
    {
      date: "2 October 2024",
      title: "Automobili Lamborghini & Animoca Brands launch Fast ForWorld",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/10_02_animoca/cover_d.jpg",
      buttons: [{ text: "Beyond" }],
      description:
        "Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km; Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 17,8 l/100km",
    },
    {
      date: "25 September 2024",
      title: "Lamborghini Temerario in the world of Asphalt Legends Unite",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/09_24_temerario/cover_desktop.jpg",
      buttons: [{ text: "temerario" }, { text: "Beyond" }],
      description:
        "The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage",
    },
    {
      date: "17 May 2024",
      title: "Lamborghini Urus SE on Roblox",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/05_17_roblox/cover_d.jpg",
      buttons: [{ text: "Beyond" }],
      description:
        "Combined energy consumption: 39,5 kWh/100 Km plus 2,08 l/100km; Combined CO2 emissions: 51,25 g/km; Combined CO2 efficiency class: B; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 12,9 l/100km",
    },
    {
      date: "6 May 2024",
      title: "Beyond Speed: Emotion Outside of Numbers",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/04_19_beyond/cover_d.jpg",
      buttons: [{ text: "Stories" }, { text: "Beyond" }],      
    },
    {
      date: "29 February 2024",
      title: "Beyond innovation: Connecting the dots",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/02_29_dots/cover.jpg",
      buttons: [{ text: "MOVEMEBER" }, { text: "Beyond" }],
      description:
        "The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage",
    },
    {
      date: "16 February 2024",
      title: "Automobili Lamborghini and Bologna women’s football team in partnership until 2025",
      imageSrc:
        "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/02_16_women/cover_desk.jpg",
      buttons: [{ text: "Beyond" },{text:"brand extension"}],
      description:
        "Combined energy consumption: 12,7 l/100km; Combined CO2 emissions: 325 g/km",
    },
  ];

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
        <div className="relative h-[calc(100vh-72px)] w-full">
          <div className="relative top-0 right-0 h-full w-full">
            <div
              className="absolute top-0 right-0 h-full transform translate-x-[455px]"
              style={{
                width: "100%",
                clipPath: "polygon(100% 0, 35% 0, 0 100%, 100% 100%)",
                WebkitClipPath: "polygon(100% 0, 35% 0, 0 100%, 100% 100%)",
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/beyond/2024/img_beyond.jpg"
                  alt="two lamborghini cars"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 h-full w-full md:w-1/2 lg:w-2/5 flex items-center">
            <div className="p-8 md:p-12 lg:p-28">
              <img
                src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/beyond/2024/download_fast_f.png"
                alt=""
                className="w-52 mb-2"
              />
              <p className="text-base md:text-lg font-thin mb-8  ">
                Discover Fast ForWorld, Automobili Lamborghini’s revolutionary
                digital platform where fans, gamers, and collectors can
                experience digital super sports cars like never before. Unlock
                digital collectibles, engage in immersive gameplay, and enjoy
                exclusive rewards in this cutting-edge interoperable ecosystem.
              </p>
              <a className="inline-flex items-center group">
                <div className="border border-black p-3 rounded-full mr-3 group-hover:bg-black group-hover:text-white transition-colors">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span className="text-base font-thin">
                  Access Lamborghini Fast ForWorld
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-44 py-10">
        {newsItems.map((item, index) => (
          <NewsBox key={index} {...item}/>
        ))}
        <button className="uppercase px-16 py-4 border border-gray-700 hover:bg-black hover:text-white transition duration-300 ease-in-out cursor-pointer mb-8">Load more</button>
      </div>
     
    </div>
  );
}

export default Beyond;
