import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { SliderData } from './SliderData';
import SliderButton from './SliderButton';
import SlideContent from './SlideContent';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute top-8 left-8 z-30">
        <h1 className="text-white text-3xl font-bold tracking-wide">MODELS</h1>
      </div>
      
      <div className="absolute top-8 right-8 z-30 flex gap-2">
        <SliderButton onClick={prevSlide}>
          <ChevronLeft className="w-6 h-6" />
        </SliderButton>
        <SliderButton onClick={nextSlide}>
          <ChevronRight className="w-6 h-6" />
        </SliderButton>
      </div>

      <div className="relative h-full w-full">
        {SliderData.map((slide, index) => (
          <SlideContent
            key={index}
            slide={slide}
            index={index}
            current={current}
            total={SliderData.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;