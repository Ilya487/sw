import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./PersonInfoSceleton.module.scss";

const PersonInfoSceleton = () => {
  return (
    <div className={styles.table}>
      <Skeleton count={2} style={{ marginBottom: "5px" }} />
    </div>
  );
};

export default PersonInfoSceleton;
