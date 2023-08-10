import React from "react";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../../../utils/getEntityNumber";
import { getEntityImg } from "../../../utils/getEntityImg";

const PeopleListItem = ({ person }) => {
  return (
    <Link to={`/people/${getEntityNumber(person.url)}`}>
      <img src={getEntityImg(person.url, "characters")} alt="" />
      <p>{person.name}</p>
    </Link>
  );
};

export default PeopleListItem;
