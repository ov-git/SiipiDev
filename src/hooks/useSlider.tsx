import { useState, useEffect } from 'react';
import { slides } from '../lib/slides';

const variants = {
  initial: (direction: number) => {
    return direction >= 0 ? { x: '100vw' } : { x: '-100vw' };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 1 },
  },
  exit: (direction: number) => {
    return direction >= 0
      ? { x: '-100vw', transition: { delay: 0.2, duration: 1 } }
      : { x: '100vw', transition: { delay: 0.2, duration: 1 } };
  },
};

const useSlider = () => {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    setTimeout(() => {
      if (current < slides.length - 1) {
        setCurrent(current + 1);
        return;
      }
      setCurrent(0);
    }, 5000);
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

  return {
    current,
    direction,
    nextSlide,
    prevSlide,
    selectImage,
    variants,
  };
};

export default useSlider;
