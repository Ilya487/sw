import React from "react";
import { useFavorite } from "../../../hooks/useFavorite";
import styles from "./FavoriteBtn.module.scss";
import clsx from "clsx";
import { GrFavorite } from "react-icons/gr";

const FavoriteBtn = ({ item, className, ...props }) => {
  const { toggleFavorite, checkFavorite } = useFavorite();
  const isChecked = checkFavorite(item.url);

  const handleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(item);
  };

  return (
    <GrFavorite
      onClick={handleFavorite}
      className={clsx(styles.standart, className, isChecked && styles.active)}
    />
  );
};

export default FavoriteBtn;
