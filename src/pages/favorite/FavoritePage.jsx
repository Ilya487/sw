import React from "react";
import { useFavorite } from "../../hooks/useFavorite";
import { defineEntity } from "../../utils/defineEntity";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import styles from "./FavoritePage.module.scss";

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
    <div className={styles.favorite}>
      <div className="container">
        <FavoritesList favorites={sortedFavorites} />
      </div>
    </div>
  ) : (
    <h2 className={styles["no-data"]}>No data</h2>
  );
};

export default FavoritePage;
