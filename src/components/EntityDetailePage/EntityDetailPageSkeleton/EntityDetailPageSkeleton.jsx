import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./EntityDetailPageSkeleton.module.scss";
import AdditionalInformationSkeleton from "../../AdditionalInformation/AdditionalInformationSkeleton/AdditionalInformationSkeleton";
import layoutStyle from "../EntityDetailPage.module.scss";
import EntityInfoPreloader from "../EntityInfo/EntityInfoPreloader/EntityInfoPreloader";

const EntityDetailPageSkeleton = ({ entity, slidesToShow }) => {
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
            <EntityInfoPreloader />
          </div>
        </div>
        <AdditionalInformationSkeleton
          entity={entity}
          slidesToShow={slidesToShow}
        />
      </div>
    </div>
  );
};

export default EntityDetailPageSkeleton;
