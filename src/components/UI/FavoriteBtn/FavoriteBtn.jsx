import React from "react";
import { useFavorite } from "../../../hooks/useFavorite";

const FavoriteBtn = ({ item, ...props }) => {
  const { toggleFavorite, checkFavorite } = useFavorite();

  return (
    <button
      {...props}
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(item);
      }}
      style={{
        backgroundColor: checkFavorite(item.url) ? "red" : "blue",
        color: "white",
      }}
    >
      {checkFavorite(item.url) ? "del" : "add"}
    </button>
  );
};

export default FavoriteBtn;
