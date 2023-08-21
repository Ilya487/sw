import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useFavorite } from "../../../hooks/useFavorite";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

const Header = () => {
  const { favorites } = useFavorite();

  function setActive({ isActive }) {
    return {
      color: isActive && "red",
    };
  }

  return (
    <header className={styles.header}>
      <ThemeSelector />
      <NavLink to="search" style={setActive}>
        Search
      </NavLink>

      <NavLink to="people" style={setActive}>
        People
      </NavLink>

      <NavLink to="films" style={setActive}>
        Films
      </NavLink>

      <NavLink to="planets" style={setActive}>
        Planets
      </NavLink>

      <NavLink to="species" style={setActive}>
        Species
      </NavLink>

      <NavLink to="starships" style={setActive}>
        Starships
      </NavLink>

      <NavLink to="vehicles" style={setActive}>
        Vehicles
      </NavLink>

      <NavLink to="favorite" style={setActive}>
        Favorite {favorites.length}
      </NavLink>
    </header>
  );
};

export default Header;
