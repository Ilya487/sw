import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="people">People</NavLink>
      <NavLink to="search">Search</NavLink>
    </header>
  );
};

export default Header;
