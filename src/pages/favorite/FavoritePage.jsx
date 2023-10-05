import React from "react";
import { useFavorite } from "../../hooks/useFavorite";
import { defineEntity } from "../../utils/defineEntity";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import styles from "./FavoritePage.module.scss";
import { CSSTransition } from "react-transition-group";

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

  return (
    <>
      <CSSTransition timeout={300} in={favorites.length > 0} unmountOnExit>
        <div className={styles.favorite}>
          <div className="container">
            <FavoritesList favorites={sortedFavorites} />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        timeout={300}
        in={favorites.length <= 0}
        classNames={{
          enter: styles["no-data-enter"],
          exitDone: styles["no-data-exit"],
        }}
        mountOnEnter
      >
        <h2 className={styles["no-data"]}>No data</h2>
      </CSSTransition>
    </>
  );
};

export default FavoritePage;
