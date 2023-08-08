import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  function setActive({ isActive }) {
    return {
      color: isActive && "red",
    };
  }

  return (
    <header className={styles.header}>
      <NavLink to="people" style={setActive}>
        People
      </NavLink>
      <NavLink to="search" style={setActive}>
        Search
      </NavLink>
    </header>
  );
};

export default Header;
