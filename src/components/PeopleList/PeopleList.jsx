import React from "react";
import styles from "./PeopleList.module.scss";
import { getPersonImg } from "../../utils/getPersonImg";
import { getEntityNumber } from "../../utils/getEntityNumber";
import { Link } from "react-router-dom";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles["people-list"]}>
      {people.map((p, indx) => (
        <li key={indx}>
          <Link to={`${getEntityNumber(p.url)}`}>
            <img src={getPersonImg(p.url)} alt="" />
            <p>{p.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
