import HeroSlider from "../components/HeroSlider";

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
  return (
    <div className="min-h-screen">
      <HeroSlider data={sliderData} />
      <section className="flex justify-center items-center min-h-screen w-full py-12 pt-36">
        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2024/12_18_refresh/gallery/museo_01.png"
          alt=""
          className="object-cover max-h-[700px] w-auto"
        />
      </section>
      {/* clip-path: polygon(30% 0px, 80% 0px, 62% 100%, 9% 100%); */}
      <div>
        <div className="relative w-full h-[500px] overflow-hidden mb-24">
          <div
            style={{
              width: "100%",
              height: "100%",
              clipPath: "polygon(30% 0, 70% 0, 50% 100%, 10% 100%)",
              WebkitClipPath: "polygon(30% 0, 70% 0, 50% 100%, 10% 100%)",
            }}
          >
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2024/12_18_refresh/s/museo_s1_01.jpg"
              alt="Lamborghini"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
