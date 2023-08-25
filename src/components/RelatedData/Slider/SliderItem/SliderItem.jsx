import React from "react";
import { defineEntity } from "../../../../utils/defineEntity";
import { getEntityImg } from "../../../../utils/getEntityImg";
import { Link } from "react-router-dom";
import styles from "./SliderItem.module.scss";
import { getEntityNumber } from "../../../../utils/getEntityNumber";

const SliderItem = ({ slide }) => {
  const entity = defineEntity(slide.url);
  return (
    <Link to={`/${entity}/${getEntityNumber(slide.url)}`}>
      <img
        src={getEntityImg(slide.url, entity)}
        alt={entity == "films" ? slide.title : slide.name}
      />
      <p>{entity == "films" ? slide.title : slide.name}</p>
    </Link>
  );
};

export default SliderItem;
