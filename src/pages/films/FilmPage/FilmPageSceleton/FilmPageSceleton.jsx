import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./FilmPageSceleton.module.scss";
import layoutStyle from "../FilmPage.module.scss";
import FilmInfoPreloader from "../FilmInfo/FilmInfoPreloader/FilmInfoPreloader";

const FilmPageSceleton = () => {
  return (
    <div className={layoutStyle["film-page"]}>
      <div className="container">
        <div className={layoutStyle.inner}>
          <div className={layoutStyle["left-side"]}>
            <div className={layoutStyle["character-img-wrapper"]}>
              <Skeleton containerClassName={styles.img} />
            </div>
            <Skeleton containerClassName={styles.title} />
          </div>

          <div className={layoutStyle["right-side"]}>
            <Skeleton containerClassName={styles.description} count={6} />
            <FilmInfoPreloader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmPageSceleton;
