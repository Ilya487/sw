import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className="container">
        <ul className={styles.list}>
          {new Array(10).fill(0).map((_, i) => (
            <div key={i} className={styles["list-item"]}>
              <Skeleton containerClassName={styles.img} />
              <Skeleton containerClassName={styles.label} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Preloader;
