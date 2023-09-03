import React from "react";
import styles from "./SliderControl.module.scss";
import clsx from "clsx";

const SliderControl = ({ setPrevSlide, setNextSlide, isFirst, isLast }) => {
  return (
    <>
      <button
        onClick={setPrevSlide}
        className={clsx(
          styles.button,
          styles["button--left"],
          isFirst && styles["button--hide"]
        )}
      >
        prev
      </button>
      <button
        onClick={setNextSlide}
        className={clsx(
          styles.button,
          styles["button--right"],
          isLast && styles["button--hide"]
        )}
      >
        next
      </button>
    </>
  );
};

export default SliderControl;
