import React from "react";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../.././../../utils/getEntityNumber";
import { getEntityImg } from "../.././../../utils/getEntityImg";
import { defineEntity } from "../../../../utils/defineEntity";
import FavoriteBtn from "../../../UI/FavoriteBtn/FavoriteBtn";
import styles from "./EntityListItem.module.scss";
import MyImg from "../../../UI/MyImg/MyImg";

const EntityListItem = ({ item }) => {
  const entity = defineEntity(item.url);

  return (
    <li className={styles.item}>
      <FavoriteBtn item={item} className={styles["favorite-btn"]} />
      <Link to={`/${entity}/${getEntityNumber(item.url)}`}>
        <div className={styles["img-wrapper"]}>
          <MyImg src={getEntityImg(item.url, entity)} />
        </div>
        <p>{entity == "films" ? item.title : item.name}</p>
      </Link>
    </li>
  );
};

export default EntityListItem;
