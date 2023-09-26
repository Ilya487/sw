import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import Logo from "./Logo/Logo";
import FavoriteLabel from "./FavoriteLabel/FavoriteLabel";
import clsx from "clsx";
import MenuBtn from "./MenuBtn/MenuBtn";
import Overlay from "./Overlay/Overlay";

const Header = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  function setActive({ isActive }) {
    return {
      color: isActive && "red",
    };
  }

  const handleMenuShow = () => {
    setIsMenuShow(!isMenuShow);
  };

  return (
    <>
      <Overlay handleMenuShow={handleMenuShow} isMenuShow={isMenuShow} />
      <header className={styles.header}>
        <div className="container">
          <div className={styles.inner}>
            <NavLink to="/people?page=1">
              <Logo />
            </NavLink>

            <ThemeSelector />

            <div
              className={clsx(styles.menu, isMenuShow && styles["menu--show"])}
            >
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
                <FavoriteLabel />
              </NavLink>
            </div>
            <MenuBtn handleMenuShow={handleMenuShow} isMenuShow={isMenuShow} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
