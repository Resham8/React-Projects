import React from 'react';


const SliderButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 border border-white/50 text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export default SliderButton;