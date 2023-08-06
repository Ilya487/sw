import React from "react";
import styles from "./PeopleList.module.scss";
import { getPersonImg } from "../../utils/getPersonImg";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles["people-list"]}>
      {people.map((p, indx) => (
        <li key={indx}>
          <img src={getPersonImg(p.url)} alt="" />
          <p>{p.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
