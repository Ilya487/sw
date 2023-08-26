import React, { cloneElement, useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";
import SliderControl from "./SliderControl/SliderControl";

const SLIDES_TO_SHOW = 4;
const SLIDES_TO_SCROLL = 1;

const Slider = ({ slides }) => {
  const [itemWidth, setItemWidth] = useState(250);
  const [offset, setOffset] = useState(0);
  const [stepWidth, setStepWidth] = useState();

  const windowRef = useRef();
  const slideRef = useRef();

  const calculateSlideMargins = () => {
    const style = getComputedStyle(slideRef.current);
    const marginLeft = parseInt(style.marginLeft);
    const marginRight = parseInt(style.marginRight);

    return marginLeft + marginRight;
  };

  const calculateSlideWidth = () => {
    const margins = calculateSlideMargins();

    const windowWidth = windowRef.current.offsetWidth;

    setStepWidth(windowWidth / SLIDES_TO_SHOW);
    setItemWidth(windowWidth / SLIDES_TO_SHOW - margins);
  };

  useEffect(() => {
    calculateSlideWidth();
  }, [slides]);

  useEffect(() => {
    window.addEventListener("resize", calculateSlideWidth);

    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
    };
  }, []);

  const setNextSlide = () => {
    const newOffset = offset - stepWidth * SLIDES_TO_SCROLL;
    const limit = -(stepWidth * (slides.length - SLIDES_TO_SHOW));

    if (newOffset < limit && offset <= limit) return;

    setOffset(newOffset);
  };

  const setPrevSlide = () => {
    if (offset >= 0) return;
    const newOffset = offset + stepWidth * SLIDES_TO_SCROLL;

    setOffset(newOffset);
  };

  return (
    <div>
      <div className={styles.window} ref={windowRef}>
        <div
          className={styles["slider-track"]}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {slides.map((slide) => (
            <SliderItem
              slide={slide}
              key={slide.url}
              width={itemWidth}
              ref={slideRef}
            />
          ))}
        </div>
      </div>

      <SliderControl setPrevSlide={setPrevSlide} setNextSlide={setNextSlide} />
    </div>
  );
};

export default Slider;
