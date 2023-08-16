import React from "react";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../.././../../utils/getEntityNumber";
import { getEntityImg } from "../.././../../utils/getEntityImg";
import { handleImageError } from "../../../../utils/handleImageError";
import { useFavorite } from "../../../../hooks/useFavorite";
import { defineEntity } from "../../../../utils/defineEntity";
import FavoriteBtn from "../../../UI/FavoriteBtn/FavoriteBtn";

const EntityListItem = ({ item }) => {
  const entity = defineEntity(item.url);

  return (
    <Link to={`/${entity}/${getEntityNumber(item.url)}`}>
      <FavoriteBtn item={item} />
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
