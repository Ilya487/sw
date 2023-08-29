import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";
import SliderControl from "./SliderControl/SliderControl";

const SLIDES_TO_SHOW = 4;
const SLIDES_TO_SCROLL = 2;

const Slider = ({ slides }) => {
  const [itemWidth, setItemWidth] = useState();
  const [offset, setOffset] = useState(0);
  const [stepWidth, setStepWidth] = useState();
  const [showedSlides, setShowedSlides] = useState(0);

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

    const windowWidth = windowRef.current.getBoundingClientRect().width;

    const updatedStepWidth = windowWidth / SLIDES_TO_SHOW;

    const updatedItemWidth = windowWidth / SLIDES_TO_SHOW - margins;

    setStepWidth(updatedStepWidth);
    setItemWidth(updatedItemWidth);
  };

  const stabilizeSlider = () => {
    if (!itemWidth || !stepWidth) return;

    const newOffset = -(stepWidth * showedSlides);

    setOffset(newOffset);
  };

  useEffect(() => {
    stabilizeSlider();
  }, [itemWidth]);

  useEffect(() => {
    calculateSlideWidth();
  }, [slides]);

  useEffect(() => {
    window.addEventListener("resize", calculateSlideWidth);

    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
    };
  }, []);

  const dragSlider = (e) => {
    e.preventDefault();

    const track = e.currentTarget;
    const startX = e.clientX;
    const startOffset = offset;

    track.onmousemove = (e) => {
      setOffset(startOffset + e.clientX - startX);
    };

    track.onmouseup = () => {
      track.onmousemove = null;
    };

    track.onmouseleave = (e) => {
      console.log(e);
      track.onmousemove = null;
      track.onmouseleave = null;
    };
  };

  const setNextSlide = () => {
    const newOffset = offset - stepWidth * SLIDES_TO_SCROLL;
    const limit = -(stepWidth * (slides.length - SLIDES_TO_SHOW));

    if (newOffset < limit && offset <= limit) return;

    setShowedSlides((actual) => actual + SLIDES_TO_SCROLL);
    setOffset(newOffset);
  };

  const setPrevSlide = () => {
    if (offset >= 0) return;
    const newOffset = offset + stepWidth * SLIDES_TO_SCROLL;

    setShowedSlides((actual) => actual - SLIDES_TO_SCROLL);
    setOffset(newOffset);
  };

  return (
    <div>
      <div className={styles.window} ref={windowRef} onMouseDown={dragSlider}>
        <div
          className={styles["slider-track"]}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {slides.map((slide) => (
            <SliderItem
              slide={slide}
              key={slide.url + Math.random() * 100000}
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