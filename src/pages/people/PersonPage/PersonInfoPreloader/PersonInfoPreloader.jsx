import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../PersonPage.module.scss";
import sceletonStyle from "./PersonInfoPreloader.module.scss";
import PersonInfoSceleton from "../PersonInfo/Preloader/PersonInfoSceleton";
import RelatedDataPreloader from "../../../../components/RelatedData/Preloader/RelatedDataPreloader";

const PersonInfoPreloader = ({ slidesToShow }) => {
  return (
    <div className={styles["person-page"]}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles["left-side"]}>
            <div className={styles["character-img-wrapper"]}>
              <Skeleton containerClassName={sceletonStyle.img} />
            </div>

            <Skeleton containerClassName={sceletonStyle.name} />
            <Skeleton containerClassName={sceletonStyle.name} />

            <Skeleton className={sceletonStyle.birthday} />
          </div>
          <div className={styles["right-side"]}>
            <PersonInfoSceleton />

            <RelatedDataPreloader countSlides={slidesToShow} />
            <RelatedDataPreloader countSlides={slidesToShow} />
            <RelatedDataPreloader countSlides={slidesToShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfoPreloader;
