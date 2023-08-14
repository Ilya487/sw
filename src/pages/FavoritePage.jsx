import React from "react";
import { useFavorite } from "../hooks/useFavorite";
import { defineEntity } from "../utils/defineEntity";
import FavoritesList from "../components/FavoritesList/FavoritesList";

const FavoritePage = () => {
  const { favorites } = useFavorite();

  function sortFavorites() {
    const entitiesList = {
      films: [],
      people: [],
      starships: [],
      vehicles: [],
      species: [],
      planets: [],
    };

    favorites.forEach((f) => {
      const entity = defineEntity(f.url);
      entitiesList[entity].push(f);
    });

    return entitiesList;
  }

  const sortedFavorites = sortFavorites();

  return favorites.length > 0 ? (
    <FavoritesList favorites={sortedFavorites} />
  ) : (
    <p>No data</p>
  );
};

export default FavoritePage;
