import React from "react";
import EntityList from "../EntityPage/EntityList/EntityList";

const FavoritesList = ({ favorites }) => {
  return (
    <ul>
      {Object.keys(favorites).map((key) => {
        if (favorites[key].length > 0) {
          return (
            <li key={key}>
              <h1>{key}</h1>
              <EntityList entityList={favorites[key]} />
            </li>
          );
        } else return null;
      })}
    </ul>
  );
};

export default FavoritesList;
