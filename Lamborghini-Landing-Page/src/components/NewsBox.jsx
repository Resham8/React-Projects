
const NewsBox = ({ 
  date, 
  title, 
  imageSrc, 
  buttons = [] // Array of button objects: { text: "Button Text", onClick: () => {} }
}) => {
  return (
    <div>
      <div className="flex justify-between gap-8 mb-10">
        
        <div className="max-w-xl">
          <img src={imageSrc} alt="News" />
        </div>
        
        <div>          
          <p className="uppercase mb-4">{date}</p>
          
          {buttons.map((button, index) => (
            <button
              key={index}
            //   onClick={button.onClick}
              className="uppercase bg-gray-300 pl-2 pr-2 p-1 mt-2 text-black hover:text-white hover:bg-black mr-2"
            >
              {button.text}
            </button>
          ))}
          
          <div>
            <h1 className="uppercase text-3xl font-bold mt-5">{title}</h1>
          </div>
          
          <button
            className="uppercase border-solid border-black bg-gray-300 pt-3 pb-3 pl-10 pr-10
             text-black hover:text-white hover:bg-black mt-10"
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
