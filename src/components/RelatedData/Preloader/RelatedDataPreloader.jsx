import React from "react";
import skeletonStyles from "./RelatedDataPreloader.module.scss";
import styles from "../../../pages/people/PersonPage/AdditionalInformation/AdditionalInformation.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RelatedDataPreloader = ({ countSlides }) => {
  return (
    <div className={styles["related-data"]}>
      <Skeleton className={skeletonStyles.title} />
      <div className={skeletonStyles.slider}>
        {Array(countSlides)
          .fill(0)
          .map((slide, i) => (
            <div className={skeletonStyles.slide} key={i}>
              <Skeleton containerClassName={skeletonStyles.img} />
              <Skeleton containerClassName={skeletonStyles.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedDataPreloader;
