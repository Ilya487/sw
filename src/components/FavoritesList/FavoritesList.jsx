import React from "react";
import EntityList from "../EntityPage/EntityList/EntityList";
import styles from "./FavoritesList.module.scss";

const FavoritesList = ({ favorites }) => {
  return (
    <ul>
      {Object.keys(favorites).map((key) => {
        if (favorites[key].length > 0) {
          return (
            <li key={key}>
              <h2 className={styles.title}>{key}</h2>
              <EntityList entityList={favorites[key]} />
            </li>
          );
        } else return null;
      })}
    </ul>
  );
};

export default FavoritesList;
