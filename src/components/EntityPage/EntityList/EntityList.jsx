import React from "react";
import styles from "./EntityList.module.scss";
import EntityListItem from "./EntityListItem/EntityListItem";

const EntityList = ({ entityList }) => {
  return (
    <ul className={styles.list}>
      {entityList.map((item) => (
        <EntityListItem item={item} key={item.url} />
      ))}
    </ul>
  );
};

export default EntityList;
