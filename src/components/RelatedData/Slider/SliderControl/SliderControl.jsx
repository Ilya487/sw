import React from "react";
import styles from "./SliderControl.module.scss";
import clsx from "clsx";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";

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
        <HiOutlineArrowLeft size={30} />
      </button>
      <button
        onClick={setNextSlide}
        className={clsx(
          styles.button,
          styles["button--right"],
          isLast && styles["button--hide"]
        )}
      >
        <HiOutlineArrowRight size={30} />
      </button>
    </>
  );
};

export default SliderControl;
