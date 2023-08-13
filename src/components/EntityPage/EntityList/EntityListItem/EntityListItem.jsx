import React from "react";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../.././../../utils/getEntityNumber";
import { getEntityImg } from "../.././../../utils/getEntityImg";
import { handleImageError } from "../../../../utils/handleImageError";

const EntityListItem = ({ item }) => {
  function defineEntity(url) {
    const entities = [
      "films",
      "people",
      "starships",
      "vehicles",
      "species",
      "planets",
    ];

    for (const entity of entities) {
      if (url.includes(entity)) return entity;
    }
  }

  const entity = defineEntity(item.url);

  return (
    <Link to={`/${entity}/${getEntityNumber(item.url)}`}>
      <img
        src={getEntityImg(item.url, entity)}
        alt=""
        onError={handleImageError}
      />
      <p>{item.name}</p>
    </Link>
  );
};

export default EntityListItem;
