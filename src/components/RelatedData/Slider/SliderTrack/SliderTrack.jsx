import React from "react";
import styles from "../Slider.module.scss";
import clsx from "clsx";
import SliderList from "../SliderList/SliderList";

const SliderTrack = ({
  slides,
  windowRef,
  dragSlider,
  touchDragSlider,
  isDraging,
  itemWidth,
  slideRef,
  offset,
  slidesToShow,
}) => {
  return (
    <div
      className={clsx(
        styles.window,
        slides.length < slidesToShow ? styles["window--center"] : ""
      )}
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
        <SliderList slides={slides} itemWidth={itemWidth} slideRef={slideRef} />
      </div>
    </div>
  );
};

export default SliderTrack;
