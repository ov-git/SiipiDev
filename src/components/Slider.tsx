import { useEffect, useState } from "react";
import { slides } from "../lib/slides";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const variants = {
  initial: (direction: number) => {
    return direction >= 0 ? { x: "100vw" } : { x: "-100vw" };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0, duration: 1 },
  },
  exit: (direction: number) => {
    return direction >= 0
      ? { x: "-100vw", transition: { delay: 0, duration: 1 } }
      : { x: "100vw", transition: { delay: 0, duration: 1 } };
  },
};

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      if (current < slides.length - 1) {
        setCurrent(current + 1);
        return;
      }
      setCurrent(0);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setAutoSlide(false);
    if (current < slides.length - 1) {
      setCurrent(current + 1);
      return;
    }
    setCurrent(0);
  };

  const prevSlide = () => {
    setDirection(-1);
    setAutoSlide(false);
    if (current > 0) {
      setCurrent(current - 1);
      return;
    }
    setCurrent(slides.length - 1);
  };

  const selectImage = (i: number) => {
    setAutoSlide(false);
    if (i > current) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrent(i);
  };

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
        <div className="z-10 gap-2 flex p-2">
          {slides.map((el, i) => (
            <button
              key={el}
              className={`h-4 w-4 rounded-full ${
                current === i ? "bg-slate-700" : "bg-white"
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
        <BiChevronLeft className="text-6xl font-bold" />
      </button>
      <button
        onClick={nextSlide}
        className="z-10 text-white absolute top-1/2 right-5 bg-black rounded-full bg-opacity-20 hover:bg-opacity-80 flex items-center justify-center"
      >
        <BiChevronRight className="text-6xl font-bold" />
      </button>
    </div>
  );
};

export default Slider;
