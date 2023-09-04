import React from "react";
import { useFavorite } from "../../../hooks/useFavorite";
import styles from "./FavoriteBtn.module.scss";
import clsx from "clsx";

const FavoriteBtn = ({ item, className, ...props }) => {
  const { toggleFavorite, checkFavorite } = useFavorite();
  const isChecked = checkFavorite(item.url);

  return (
    <button
      {...props}
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(item);
      }}
      className={clsx(
        className,
        styles.button,

        isChecked ? styles["button--checked"] : styles["button--non-checked"]
      )}
    >
      {isChecked ? "del" : "add"}
    </button>
  );
};

export default FavoriteBtn;
