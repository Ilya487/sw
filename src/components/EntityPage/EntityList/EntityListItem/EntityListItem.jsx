import React from "react";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../.././../../utils/getEntityNumber";
import { getEntityImg } from "../.././../../utils/getEntityImg";
import { handleImageError } from "../../../../utils/handleImageError";
import { useFavorite } from "../../../../hooks/useFavorite";

const EntityListItem = ({ item }) => {
  const { toggleFavorite, checkFavorite } = useFavorite();

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
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(item);
        }}
        style={{
          backgroundColor: checkFavorite(item.url) ? "red" : "blue",
          color: "white",
        }}
      >
        {checkFavorite(item.url) ? "Delete" : "Add"}
      </button>
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
