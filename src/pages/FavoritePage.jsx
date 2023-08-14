import React from "react";
import EntityList from "../components/EntityPage/EntityList/EntityList";
import { useFavorite } from "../hooks/useFavorite";
import { defineEntity } from "../utils/defineEntity";

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

    favorites.map((f) => {
      const entity = defineEntity(f.url);
      entitiesList[entity].push(f);
    });

    return entitiesList;
  }

  const sortedFavorites = sortFavorites();

  return (
    <>
      {Object.keys(sortedFavorites).map((key) => {
        if (sortedFavorites[key].length > 0) {
          return (
            <div>
              <h1>{key}</h1>
              <EntityList entityList={sortedFavorites[key]} />
            </div>
          );
        } else return <></>;
      })}
    </>
  );
};

export default FavoritePage;
