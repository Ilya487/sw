import React from "react";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../.././../../utils/getEntityNumber";
import { getEntityImg } from "../.././../../utils/getEntityImg";
import { handleImageError } from "../../../../utils/handleImageError";
import { defineEntity } from "../../../../utils/defineEntity";
import FavoriteBtn from "../../../UI/FavoriteBtn/FavoriteBtn";
import styles from "./EntityListItem.module.scss";

const EntityListItem = ({ item }) => {
  const entity = defineEntity(item.url);

  return (
    <li className={styles.item}>
      <Link to={`/${entity}/${getEntityNumber(item.url)}`}>
        <FavoriteBtn item={item} className={styles["favorite-btn"]} />
        <img
          src={getEntityImg(item.url, entity)}
          alt=""
          onError={handleImageError}
        />
        <p>{entity == "films" ? item.title : item.name}</p>
      </Link>
    </li>
  );
};

export default EntityListItem;
