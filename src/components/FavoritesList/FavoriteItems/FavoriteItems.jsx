import React from "react";
import styles from "./FavoriteItems.module.scss";
import EntityListItem from "../../EntityPage/EntityList/EntityListItem/EntityListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FavoriteItems = ({ items }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {items.map((item) => (
        <CSSTransition
          key={item.url}
          timeout={310}
          classNames={{
            exitActive: styles["item-active-exit"],
          }}
        >
          <EntityListItem item={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default FavoriteItems;
