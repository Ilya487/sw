import React from "react";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../../../utils/getEntityNumber";
import { getPersonImg } from "../../../utils/getPersonImg";

const PeopleListItem = ({ person }) => {
  return (
    <Link to={`/people/${getEntityNumber(person.url)}`}>
      <img src={getPersonImg(person.url)} alt="" />
      <p>{person.name}</p>
    </Link>
  );
};

export default PeopleListItem;
