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
    </div>
  );
}
