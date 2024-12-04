import PropTypes from 'prop-types';
import { Plus } from 'lucide-react';

const SlideContent = ({ slide, index, current, total }) => {
  const getSlideClass = () => {
    const isActive = index === current;
    const isPrev = index === (current === 0 ? total - 1 : current - 1);
    const isNext = index === (current === total - 1 ? 0 : current + 1);

    if (isActive) return 'slide-active';
    if (isPrev) return 'slide-prev';
    if (isNext) return 'slide-next';
    return 'slide-hidden';
  };

  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ${getSlideClass()}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={slide.image}
          alt={slide.title}
          className="h-full w-full object-cover"
        />
        <div className={`absolute bottom-32 left-8 text-white transform transition-all duration-700 ${
          index === current ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'
        }`}>
          <h2 className="text-8xl font-bold mb-4">{slide.title}</h2>
          <p className="text-xl mb-8">{slide.subtitle}</p>
          <button className="flex items-center gap-2 border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
            <Plus className="w-5 h-5" />
            Explore the model
          </button>
        </div>
      </div>
    </div>
  );
};

SlideContent.propTypes = {
  slide: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default SlideContent;
