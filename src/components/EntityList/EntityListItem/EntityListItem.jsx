import React from "react";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../../../utils/getEntityNumber";
import { getEntityImg } from "../../../utils/getEntityImg";

const EntityListItem = ({ item }) => {
  function defineEntity(url) {
    const entities = [
      "films",
      "people",
      "starships",
      "vehicles",
      "species",
      "planets",
    ];

    for (const entity of entities) {
      if (url.includes(entity)) return entity;
    }
  }

  return (
    <Link to={`/people/${getEntityNumber(item.url)}`}>
      <img src={getEntityImg(item.url, defineEntity(item.url))} alt="" />
      <p>{item.name}</p>
    </Link>
  );
};

export default EntityListItem;
