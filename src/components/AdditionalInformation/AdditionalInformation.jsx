import React from "react";
import styles from "./AdditionalInformation.module.scss";
import { entityRelatedData } from "../../utils/constants/entityRelatedData";
import RelatedData from "../RelatedData/RelatedData";

const AdditionalInformation = ({
  entity,
  data,
  slidesToShow,
  slidesToScroll,
}) => {
  return (
    <div>
      {entityRelatedData[entity].map((category) => {
        if (data[category].length > 0) {
          return (
            <div className={styles["related-data"]} key={category}>
              <h3 className={styles["slider-title"]}>{category}</h3>
              <RelatedData
                urls={data[category]}
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default AdditionalInformation;
