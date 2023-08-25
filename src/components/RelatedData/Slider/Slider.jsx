import React from "react";
import styles from "./Slider.module.scss";
import SliderItem from "./SliderItem/SliderItem";

const Slider = ({ slides }) => {
  slides = [...slides, ...slides, ...slides];

  return (
    <div>
      <div className={styles.window}>
        <div className={styles["slider-track"]}>
          {slides.map((slide) => (
            <SliderItem slide={slide} key={slide.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
