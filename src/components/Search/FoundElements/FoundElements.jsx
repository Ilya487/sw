import React from "react";
import { getEntityImg } from "../../../utils/getEntityImg";
import FoundItem from "./FoundItem/FoundItem";

const FoundElements = ({ elements, entity }) => {
  return (
    <ul>
      {elements.map((item) => (
        <li key={item.url}>
          <FoundItem item={item} entity={entity} />
        </li>
      ))}
    </ul>
  );
};
export default FoundElements;
