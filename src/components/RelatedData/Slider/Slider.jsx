import React, { useRef, useState } from "react";
import styles from "./Slider.module.scss";
import SliderControl from "./SliderControl/SliderControl";
import { useRecalculationSlideWidth } from "./hook/useRecalculationSlideWidth";
import { useStabilizeAfterResize } from "./hook/useStabilizeAfterResize";
import { useSliderDragAndDrop } from "./hook/useSliderDragAndDrop";
import SliderTrack from "./SliderTrack/SliderTrack";

const Slider = ({ slides, slidesToShow, slidesToScroll }) => {
  const [offset, setOffset] = useState(0);
  const [showedSlides, setShowedSlides] = useState(0);

  const windowRef = useRef();
  const slideRef = useRef();

  const { itemWidth, stepWidth } = useRecalculationSlideWidth(
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
      <SliderTrack
        slides={slides}
        dragSlider={dragSlider}
        isDraging={isDraging}
        touchDragSlider={touchDragSlider}
        windowRef={windowRef}
        itemWidth={itemWidth}
        slideRef={slideRef}
        offset={offset}
      />

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
