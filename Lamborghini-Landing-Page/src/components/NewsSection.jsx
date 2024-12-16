const NewsSection = () => {
  return (
    <section className="ml-32 mr-32 mt-11">
      <div className="uppercase text-4xl font-semibold">
        <h2>News</h2>
      </div>

      <div className="uppercase text-8xl font-bold -mb-8 leading-none">
        <h1>Lamborghini world</h1>
      </div>

      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center z-0 "
          style={{
            backgroundImage:
              "url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2024/12_12_macron/cover_d.jpg)",
          }}
        ></div>
      </div>
      <div>
        <p className="uppercase font-semibold text-left text-lg -mt-9">
          12 December 2024
        </p>
      </div>
      <div className="uppercase">
        <button className="bg-gray-300 pl-2 pr-2 p-1 mt-2 text-black hover:text-white hover:bg-black">
          Brand Extension
        </button>
      </div>
      <div className="flex justify-between mt-6 mb-7">
        <div className="max-w-3xl">
          <h1 className="uppercase text-3xl font-bold">
            Macron x Automobili Lamborghini: running collection
          </h1>
          <p className="mt-2 text-gray-600">
            A new collection combines performance and functionality in the
            collaboration’s second project
          </p>
        </div>
        <div>
          <button
            className="uppercase border-solid border-black bg-gray-300 pt-3 pb-3 pl-10 pr-10
             text-black hover:text-white hover:bg-black"
          >
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
