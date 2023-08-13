import React from "react";
import { getEntityImg } from "../../../../utils/getEntityImg";
import { Link } from "react-router-dom";
import { handleImageError } from "../../../../utils/handleImageError";
import styles from "./FoundItem.module.scss";

const FoundItem = ({ item, entity }) => {
  return (
    <li>
      <Link className={styles["search-item"]}>
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
