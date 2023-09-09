import React, { useRef, useState } from "react";
import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";
import SliderControl from "./SliderControl/SliderControl";
import { useRecalculationSlideWidth } from "./hook/useRecalculationSlideWidth";
import { useStabilizeAfterResize } from "./hook/useStabilizeAfterResize";
import { useSliderDragAndDrop } from "./hook/useSliderDragAndDrop";
import clsx from "clsx";

const Slider = ({ slides, slidesToShow, slidesToScroll }) => {
  const [offset, setOffset] = useState(0);
  const [showedSlides, setShowedSlides] = useState(0);

  const windowRef = useRef();
  const slideRef = useRef();

  const { itemWidth, stepWidth } = useRecalculationSlideWidth(
    slides,
    windowRef,
    slideRef,
    slidesToShow
  );

  useStabilizeAfterResize(stepWidth, showedSlides, setOffset);

  const { dragSlider, touchDragSlider, isDraging } = useSliderDragAndDrop(
    offset,
    setOffset,
    stepWidth,
    slidesToShow,
    setShowedSlides,
    slides.length
  );

  const setNextSlide = () => {
    const newOffset = offset - stepWidth * slidesToScroll;
    const limit = -(stepWidth * (slides.length - slidesToShow));

    if (newOffset < limit && offset <= limit) return;

    setShowedSlides((actual) => actual + slidesToScroll);
    setOffset(newOffset);
  };

  const setPrevSlide = () => {
    const newOffset = offset + stepWidth * slidesToScroll;

    if (newOffset >= 0) {
      setOffset(0);
      setShowedSlides(0);
      return;
    }

    setShowedSlides((actual) => actual - slidesToScroll);
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
        isLast={slides.length - showedSlides <= slidesToShow}
        isFirst={showedSlides == 0}
        isDraging={isDraging}
      />
    </div>
  );
};

export default Slider;
