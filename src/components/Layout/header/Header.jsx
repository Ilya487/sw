import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="people">People</NavLink>
      <NavLink to="search">Search</NavLink>
    </header>
  );
};

export default Header;
