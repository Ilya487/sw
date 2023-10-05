import React from "react";
import styles from "./FavoritesList.module.scss";
import FavoriteItems from "./FavoriteItems/FavoriteItems";
import { CSSTransition } from "react-transition-group";

const FavoritesList = ({ favorites }) => {
  return (
    <ul>
      {Object.keys(favorites).map((key) => {
        return (
          <CSSTransition
            timeout={300}
            in={favorites[key].length > 0}
            unmountOnExit
            key={key}
          >
            <li key={key}>
              <CSSTransition
                in={favorites[key].length > 0}
                timeout={300}
                unmountOnExit
                classNames={{
                  exitActive: styles["title-active-exit"],
                }}
              >
                <h2 className={styles.title}>{key}</h2>
              </CSSTransition>

              <FavoriteItems items={favorites[key]} />
            </li>
          </CSSTransition>
        );
      })}
    </ul>
  );
};

export default FavoritesList;
