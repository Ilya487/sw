import React from "react";
import styles from "../Slider.module.scss";
import clsx from "clsx";
import SliderItem from "../SliderItem/SliderItem";
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
}) => {
  return (
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
        <SliderList slides={slides} itemWidth={itemWidth} slideRef={slideRef} />
      </div>
    </div>
  );
};

export default SliderTrack;
