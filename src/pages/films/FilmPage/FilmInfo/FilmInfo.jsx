import React from "react";
import styles from "./FilmInfo.module.scss";

const FilmInfo = ({ filmData }) => {
  return (
    <div className={styles.info}>
      <div className={styles["info-row"]}>
        <span className={styles["info-row__left"]}>Director</span>
        <span className={styles["info-row__right"]}>{filmData.director}</span>
      </div>
      <div className={styles["info-row"]}>
        <span className={styles["info-row__left"]}>Producer</span>
        <span className={styles["info-row__right"]}>{filmData.producer}</span>
      </div>
      <div className={styles["info-row"]}>
        <span className={styles["info-row__left"]}>Year</span>
        <span className={styles["info-row__right"]}>
          {filmData.release_date}
        </span>
      </div>
      <div className={styles["info-row"]}>
        <span className={styles["info-row__left"]}>Episode</span>
        <span className={styles["info-row__right"]}>{filmData.episode_id}</span>
      </div>
    </div>
  );
};

export default FilmInfo;
