import { slides } from '../lib/slides';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import useSlider from '../hooks/useSlider';

const Slider = () => {
  const { current, direction, variants, selectImage, nextSlide, prevSlide } =
    useSlider();

  return (
    <div className=" w-full h-[80vh] relative flex overflow-hidden">
      <div className="w-full flex justify-center items-end">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            custom={direction}
            key={current}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            src={slides[current]}
            className="absolute object-cover h-full w-full"
          />
        </AnimatePresence>

        {/* Slider dots */}
        <div className="z-10 gap-2 flex p-2">
          {slides.map((image, i) => (
            <button
              key={image}
              className={`h-4 w-4 rounded-full ${
                current === i ? 'bg-slate-700' : 'bg-white'
              }`}
              onClick={() => selectImage(i)}
            ></button>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="z-10 text-white absolute top-1/2 left-5 bg-black rounded-full bg-opacity-20 hover:bg-opacity-80 flex items-center justify-center"
      >
        <BiChevronLeft className="text-5xl font-bold" />
      </button>
      <button
        onClick={nextSlide}
        className="z-10 text-white absolute top-1/2 right-5 bg-black rounded-full bg-opacity-20 hover:bg-opacity-80 flex items-center justify-center"
      >
        <BiChevronRight className="text-5xl font-bold" />
      </button>
    </div>
  );
};

export default Slider;
