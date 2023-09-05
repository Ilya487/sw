import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../PersonPage.module.scss";
import sceletonStyle from "./PersonInfoPreloader.module.scss";
import PersonInfoSceleton from "../PersonInfo/Preloader/PersonInfoSceleton";

const PersonInfoPreloader = () => {
  return (
    <div className={styles["person-page"]}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles["left-side"]}>
            <Skeleton className={sceletonStyle.img} />

            <Skeleton className={sceletonStyle.name} />
            <Skeleton className={sceletonStyle.name} />

            <Skeleton className={sceletonStyle.birthday} />
          </div>
          <div className={styles["right-side"]}>
            {/* <PersonInfo personData={personData} /> */}
            <PersonInfoSceleton />

            <div className={styles["related-data"]}>
              {/* <h3 className={styles["slider-title"]}>Films</h3>*/}
              {/* <RelatedData urls={personData.films} /> */}
            </div>

            <div className={styles["related-data"]}>
              {/* <h3 className={styles["slider-title"]}>Films</h3>*/}
              {/* <RelatedData urls={personData.films} /> */}
            </div>

            <div className={styles["related-data"]}>
              {/* <h3 className={styles["slider-title"]}>Films</h3>*/}
              {/* <RelatedData urls={personData.films} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfoPreloader;
