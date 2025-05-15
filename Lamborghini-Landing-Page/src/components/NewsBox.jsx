const NewsBox = ({
  date,
  title,
  imageSrc,
  description,
  buttons = [], // { text: "Button Text", onClick: () => {} }
}) => {
  return (
    <div className="w-full mb-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2 w-full">
          <img
            src={imageSrc}
            alt={title || "News Image"}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between">
          <p className="text-sm uppercase text-gray-600 mb-3">{date}</p>

          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  className="bg-gray-300 uppercase px-4 py-1 text-sm text-black hover:bg-black hover:text-white transition"
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}

          <h2 className="text-3xl font-bold uppercase mb-3">{title}</h2>

          {description && <p className="text-gray-700 mb-6">{description}</p>}

          <button className="uppercase text-black px-8 py-3 border border-black hover:bg-black hover:text-white transition w-fit">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
