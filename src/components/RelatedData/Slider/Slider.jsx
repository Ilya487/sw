import React, { useRef, useState } from "react";
import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";
import SliderControl from "./SliderControl/SliderControl";
import { useRecalculationSlideWidth } from "./hook/useRecalculationSlideWidth";
import { useStabilizeAfterResize } from "./hook/useStabilizeAfterResize";
import { useSliderDragAndDrop } from "./hook/useSliderDragAndDrop";
import clsx from "clsx";

const SLIDES_TO_SHOW = 4;
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

  useStabilizeAfterResize(stepWidth, showedSlides, setOffset);

  const { dragSlider, touchDragSlider, isDraging } = useSliderDragAndDrop(
    offset,
    setOffset,
    stepWidth,
    SLIDES_TO_SHOW,
    setShowedSlides,
    slides.length
  );

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
    <div className={styles.slider}>
      <div
        className={styles.window}
        ref={windowRef}
        onMouseDown={dragSlider}
        onTouchStart={touchDragSlider}
      >
        <div
          className={clsx(
            styles["slider-track"],
            isDraging && styles["slider-track--draging"]
          )}
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

      <SliderControl
        setPrevSlide={setPrevSlide}
        setNextSlide={setNextSlide}
        isLast={slides.length - showedSlides <= SLIDES_TO_SHOW}
        isFirst={showedSlides == 0}
      />
    </div>
  );
};

export default Slider;
