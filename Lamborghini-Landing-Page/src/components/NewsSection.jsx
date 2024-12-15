const NewsSection = () => {
  return (
    <section className="ml-32 mr-32 mt-11">
      <div className="uppercase text-4xl font-semibold">
        <h2>News</h2>
      </div>
      <div className="uppercase text-8xl font-bold">
        <h1>Lamborghini world</h1>
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
          style={{
            backgroundImage:
              "url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/12_12_macron/cover_d.jpg)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default NewsSection;
