import React from "react";
import styles from "./FavoriteLabel.module.scss";
import { useFavorite } from "../../../../hooks/useFavorite";

const FavoriteLabel = () => {
  const { favorites } = useFavorite();

  return (
    <p className={styles.text}>
      Favorite <span>{favorites.length}</span>
    </p>
  );
};

export default FavoriteLabel;
