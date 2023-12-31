import React from "react";
import { Link } from "react-router-dom";
import { handleImageError } from "../../../../../utils/handleImageError";
import styles from "./FoundItem.module.scss";
import { getEntityNumber } from "../../../../../utils/getEntityNumber";
import { getEntityImg } from "../../../../../utils/getEntityImg";

const FoundItem = ({ item, entity }) => {
  return (
    <li>
      <Link
        className={styles["search-item"]}
        to={`/${entity}/${getEntityNumber(item.url)}`}
      >
        <img
          className={styles.img}
          src={getEntityImg(item.url, entity)}
          alt=""
          onError={handleImageError}
        />
        <p className={styles.name}>
          {entity == "films" ? item.title : item.name}
        </p>
      </Link>
    </li>
  );
};

export default FoundItem;
