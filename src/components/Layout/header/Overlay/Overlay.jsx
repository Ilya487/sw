import React from "react";
import styles from "./Overlay.scss.module.scss";
import clsx from "clsx";

const Overlay = ({ isMenuShow, handleMenuShow }) => {
  return (
    <div
      className={clsx(styles.overlay, isMenuShow && styles["overlay--show"])}
      onClick={handleMenuShow}
    />
  );
};

export default Overlay;
