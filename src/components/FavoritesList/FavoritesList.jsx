import React from "react";
import styles from "./FavoritesList.module.scss";
import FavoriteItems from "./FavoriteItems/FavoriteItems";

const FavoritesList = ({ favorites }) => {
  return (
    <ul>
      {Object.keys(favorites).map((key) => {
        if (favorites[key].length > 0) {
          return (
            <li key={key}>
              <h2 className={styles.title}>{key}</h2>
              <FavoriteItems items={favorites[key]} />
            </li>
          );
        } else return null;
      })}
    </ul>
  );
};

export default FavoritesList;
