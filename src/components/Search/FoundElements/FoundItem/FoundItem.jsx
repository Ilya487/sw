import React from "react";
import { getEntityImg } from "../../../../utils/getEntityImg";

const FoundItem = ({ item, entity }) => {
  const handleImageError = (e) => {
    e.target.src = "src/assets/errorPlaceholder.jpg";
  };

  return (
    <>
      <img
        src={getEntityImg(item.url, entity)}
        alt=""
        onError={handleImageError}
      />
      <p>{item.name}</p>
    </>
  );
};

export default FoundItem;
