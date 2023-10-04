import React from "react";
import FoundItem from "./FoundItem/FoundItem";
import styles from "./FoundElements.module.scss";

const FoundElements = ({ elements, entity }) => {
  return (
    <ul className={styles["search-list"]}>
      {elements.map((item) => (
        <FoundItem item={item} entity={entity} key={item.url} />
      ))}
    </ul>
  );
};
export default FoundElements;
