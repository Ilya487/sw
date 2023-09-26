import clsx from "clsx";
import React from "react";
import styles from "./MenuBtn.module.scss";

const MenuBtn = ({ handleMenuShow, isMenuShow }) => {
  return (
    <button
      onClick={handleMenuShow}
      className={clsx(
        styles["menu-btn"],
        isMenuShow && styles["menu-btn--active"]
      )}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuBtn;
