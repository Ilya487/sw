import React from "react";
import styles from "./PeopleList.module.scss";
import EntityListItem from "./EntityListItem/EntityListItem";

const EntityList = ({ entityList }) => {
  return (
    <ul className={styles["people-list"]}>
      {entityList.map((item, indx) => (
        <li key={indx}>
          <EntityListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default EntityList;
