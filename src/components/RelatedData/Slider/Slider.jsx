import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";
import SliderControl from "./SliderControl/SliderControl";
import { useRecalculationSlideWidth } from "./hook/useRecalculationSlideWidth";
import { useStabilizeAfterResize } from "./hook/useStabilizeAfterResize";

const SLIDES_TO_SHOW = 4;
const SLIDES_TO_SCROLL = 2;

const Slider = ({ slides }) => {
  const [offset, setOffset] = useState(0);
  const [showedSlides, setShowedSlides] = useState(0);

  const windowRef = useRef();
  const slideRef = useRef();

  const { itemWidth, stepWidth } = useRecalculationSlideWidth(
    slides,
    windowRef,
    slideRef,
    SLIDES_TO_SHOW
  );

  useStabilizeAfterResize(stepWidth, showedSlides, setOffset, itemWidth);

  const dragSlider = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const track = e.currentTarget;
    const startX = e.clientX;
    const startOffset = offset;

    track.onmousemove = (e) => {
      setOffset(startOffset + e.clientX - startX);
    };

    track.onmouseleave = (e) => {
      track.onmousemove = null;
      track.onmouseleave = null;

      stabilizedAfterDrop(e.clientX);
    };

    track.onmouseup = (e) => {
      track.onmousemove = null;
      track.onmouseleave = null;

      stabilizedAfterDrop(e.clientX);
    };

    const stabilizedAfterDrop = (xCoord) => {
      let newShowed = -Math.round((startOffset + xCoord - startX) / stepWidth);

      if (newShowed < 1) newShowed = 0;
      if (newShowed > slides.length - SLIDES_TO_SHOW)
        newShowed = slides.length - SLIDES_TO_SHOW;

      setOffset(-stepWidth * newShowed);
      setShowedSlides(newShowed);
    };
  };

  const touchDragSlider = (e) => {
    console.log("touchstart");
    const startX = e.touches[0].clientX;
    const startOffset = offset;
    // windowRef.current.firstChild.style.pointerEvents = "none";

    // windowRef.current.ontouchmove = (e) => {
    //   console.log(e);
    //   setOffset(startOffset + e.touches[0].clientX - startX);
    // };
    windowRef.current.ontouchmove = (e) => {
      setOffset(startOffset + e.touches[0].clientX - startX);
      // console.log(startOffset + e.touches[0].clientX - startX);
    };

    windowRef.current.ontouchend = (e) => {
      console.log("touchend");
      console.log(e);
      stabilizedAfterDrop(e.changedTouches[0].clientX);
    };

    const stabilizedAfterDrop = (xCoord) => {
      let newShowed = -Math.round((startOffset + xCoord - startX) / stepWidth);

      if (newShowed < 1) newShowed = 0;
      if (newShowed > slides.length - SLIDES_TO_SHOW)
        newShowed = slides.length - SLIDES_TO_SHOW;

      setOffset(-stepWidth * newShowed);
      setShowedSlides(newShowed);
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
    const newOffset = offset + stepWidth * SLIDES_TO_SCROLL;

    if (newOffset >= 0) {
      setOffset(0);
      setShowedSlides(0);
      return;
    }

    setShowedSlides((actual) => actual - SLIDES_TO_SCROLL);
    setOffset(newOffset);
  };

  return (
    <div>
      <div
        className={styles.window}
        ref={windowRef}
        onMouseDown={dragSlider}
        onTouchStart={touchDragSlider}
      >
        <div
          className={styles["slider-track"]}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {slides.map((slide, i) => (
            <SliderItem
              slide={slide}
              key={i}
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
