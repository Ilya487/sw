import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useFavorite } from "../../../hooks/useFavorite";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import Logo from "./Logo/Logo";

const Header = () => {
  const { favorites } = useFavorite();

  function setActive({ isActive }) {
    return {
      color: isActive && "red",
    };
  }

  return (
    <header className={styles.header}>
      <Logo />

      <ThemeSelector />

      <NavLink to="search" style={setActive}>
        Search
      </NavLink>

      <NavLink to="people?page=1" style={setActive}>
        People
      </NavLink>

      <NavLink to="films?page=1" style={setActive}>
        Films
      </NavLink>

      <NavLink to="planets?page=1" style={setActive}>
        Planets
      </NavLink>

      <NavLink to="species?page=1" style={setActive}>
        Species
      </NavLink>

      <NavLink to="starships?page=1" style={setActive}>
        Starships
      </NavLink>

      <NavLink to="vehicles?page=1" style={setActive}>
        Vehicles
      </NavLink>

      <NavLink to="favorite" style={setActive}>
        Favorite {favorites.length}
      </NavLink>
    </header>
  );
};

export default Header;
