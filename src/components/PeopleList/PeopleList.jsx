import React from "react";
import styles from "./PeopleList.module.scss";
import PeopleListItem from "./PeopleListItem/PeopleListItem";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles["people-list"]}>
      {people.map((p, indx) => (
        <li key={indx}>
          <PeopleListItem person={p} />
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
