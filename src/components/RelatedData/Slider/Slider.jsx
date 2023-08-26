import React, { cloneElement, useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";
import SliderControl from "./SliderControl/SliderControl";

const SLIDES_TO_SHOW = 3;
const SLIDES_TO_SCROLL = 1;

const Slider = ({ slides }) => {
  const [itemWidth, setItemWidth] = useState(0);
  const [offset, setOffset] = useState(0);

  const slideItemRef = useRef();

  function calculateSliderItemWidth() {
    const s = getComputedStyle(slideItemRef.current);

    const marginLeft = Number.parseInt(s.marginLeft);
    const marginRight = Number.parseInt(s.marginRight);

    const width = marginLeft + marginRight + slideItemRef.current.offsetWidth;

    setItemWidth(width);
  }

  useEffect(() => {
    calculateSliderItemWidth();
  }, [slides]);

  useEffect(() => {
    window.addEventListener("resize", calculateSliderItemWidth);

    return () => {
      window.removeEventListener("resize", calculateSliderItemWidth);
    };
  }, []);

  const setNextSlide = () => {
    const newOffset = offset - itemWidth * SLIDES_TO_SCROLL;
    const limit = -(itemWidth * (slides.length - SLIDES_TO_SHOW));

    if (newOffset < limit && offset <= limit) return;

    setOffset(newOffset);
  };

  const setPrevSlide = () => {
    if (offset >= 0) return;
    const newOffset = offset + itemWidth * SLIDES_TO_SCROLL;

    setOffset(newOffset);
  };

  return (
    <div>
      <div
        className={styles.window}
        style={{ width: itemWidth ? `${itemWidth * SLIDES_TO_SHOW}px` : null }}
      >
        <div
          className={styles["slider-track"]}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {slides.map((slide) => (
            <SliderItem slide={slide} key={slide.url} ref={slideItemRef} />
          ))}
        </div>
      </div>

      <SliderControl setPrevSlide={setPrevSlide} setNextSlide={setNextSlide} />
    </div>
  );
};

export default Slider;
