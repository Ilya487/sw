import React, { forwardRef } from "react";
import { defineEntity } from "../../../../utils/defineEntity";
import { getEntityImg } from "../../../../utils/getEntityImg";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../../../../utils/getEntityNumber";
import styles from "./SliderItem.module.scss";

// const SliderItem = ({ slide, width }) => {
//   const entity = defineEntity(slide.url);

//   return (
//     <Link
//       to={`/${entity}/${getEntityNumber(slide.url)}`}
//       className={styles["slider-item"]}
//       style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
//     >
//       <img
//         src={getEntityImg(slide.url, entity)}
//         alt={entity == "films" ? slide.title : slide.name}
//       />
//       <p>{entity == "films" ? slide.title : slide.name}</p>
//     </Link>
//   );
// };

const SliderItem = forwardRef(({ slide, width }, ref) => {
  const entity = defineEntity(slide.url);

  return (
    <Link
      to={`/${entity}/${getEntityNumber(slide.url)}`}
      className={styles["slider-item"]}
      style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
      ref={ref}
    >
      <img
        src={getEntityImg(slide.url, entity)}
        alt={entity == "films" ? slide.title : slide.name}
      />
      <p>{entity == "films" ? slide.title : slide.name}</p>
    </Link>
  );
});

export default SliderItem;
