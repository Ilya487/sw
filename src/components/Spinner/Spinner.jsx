import React from "react";
import spinner from "./spinner.svg";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles["spinner-container"]}>
      <img src={spinner} alt="" />
    </div>
  );
};

export default Spinner;
