import React from "react";
import { entityRelatedData } from "../../../utils/constants/entityRelatedData";
import RelatedDataPreloader from "../../RelatedData/Preloader/RelatedDataPreloader";

const AdditionalInformationSkeleton = ({ entity, slidesToShow }) => {
  return (
    <>
      {entityRelatedData[entity].map((category) => (
        <RelatedDataPreloader countSlides={slidesToShow} key={category} />
      ))}
    </>
  );
};

export default AdditionalInformationSkeleton;
