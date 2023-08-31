import React, { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";
import SliderControl from "./SliderControl/SliderControl";
import { useRecalculationSlideWidth } from "./hook/useRecalculationSlideWidth";

const SLIDES_TO_SHOW = 5;
const SLIDES_TO_SCROLL = 3;

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

  const stabilizeSlider = () => {
    if (!itemWidth || !stepWidth) return;

    const newOffset = -(stepWidth * showedSlides);
    setOffset(newOffset);
  };

  useEffect(() => {
    stabilizeSlider();
  }, [itemWidth]);

  const dragSlider = (e) => {
    e.preventDefault();

    const track = e.currentTarget;
    const startX = e.clientX;
    const startOffset = offset;

    document.onmousemove = (e) => {
      if (!e.target.closest("." + track.className)) {
        document.onmousemove = null;
        stabilizedAfterDrop(e);

        return;
      }

      setOffset(startOffset + e.clientX - startX);
    };

    track.onmouseup = (e) => {
      document.onmousemove = null;

      stabilizedAfterDrop(e);
    };

    const stabilizedAfterDrop = (e) => {
      let newShowed = -Math.round(
        (startOffset + e.clientX - startX) / stepWidth
      );

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
    if (offset >= 0) {
      setOffset(0);
      setShowedSlides(0);
      return;
    }
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
