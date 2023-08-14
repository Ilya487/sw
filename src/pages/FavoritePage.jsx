import React from "react";
import EntityList from "../components/EntityPage/EntityList/EntityList";
import { useFavorite } from "../hooks/useFavorite";

const FavoritePage = () => {
  const { favorites } = useFavorite();

  return <EntityList entityList={favorites} />;
};

export default FavoritePage;
