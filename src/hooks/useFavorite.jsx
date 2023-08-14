import { useContext } from "react";
import { FavoriteContext } from "../providers/FavoriteProvider";

export const useFavorite = () => {
  return useContext(FavoriteContext);
};
