import React from "react";
import styles from "./AdditionalInformation.module.scss";
import RelatedData from "../../../../components/RelatedData/RelatedData";

const AdditionalInformation = ({ data, slidesToShow, slidesToScroll }) => {
  return (
    <>
      {data.films.length > 0 && (
        <div className={styles["related-data"]}>
          <h3 className={styles["slider-title"]}>Films</h3>
          <RelatedData
            urls={data.films}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
          />
        </div>
      )}

      {data.starships.length > 0 && (
        <div className={styles["related-data"]}>
          <h3 className={styles["slider-title"]}>Starships</h3>
          <RelatedData
            urls={data.starships}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
          />
        </div>
      )}

      {data.vehicles.length > 0 && (
        <div className={styles["related-data"]}>
          <h3 className={styles["slider-title"]}>Vehicles</h3>
          <RelatedData
            urls={data.vehicles}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
          />
        </div>
      )}
    </>
  );
};

export default AdditionalInformation;
