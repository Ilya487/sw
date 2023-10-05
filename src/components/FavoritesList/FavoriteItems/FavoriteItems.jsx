import React from "react";
import styles from "./FavoriteItems.module.scss";
import EntityListItem from "../../EntityPage/EntityList/EntityListItem/EntityListItem";

const FavoriteItems = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EntityListItem item={item} key={item.url} />
      ))}
    </ul>
  );
};

export default FavoriteItems;
