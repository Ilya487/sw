import React from "react";
import styles from "./PeopleList.module.scss";
import EntityListItem from "./EntityListItem/EntityListItem";

const EntityList = ({ entityList }) => {
  return (
    <ul className={styles["people-list"]}>
      {entityList.map((item) => (
        <EntityListItem item={item} key={item.url} />
      ))}
    </ul>
  );
};

export default EntityList;
