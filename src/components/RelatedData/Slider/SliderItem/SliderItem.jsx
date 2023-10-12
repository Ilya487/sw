import React, { forwardRef } from "react";
import { defineEntity } from "../../../../utils/defineEntity";
import { getEntityImg } from "../../../../utils/getEntityImg";
import { Link } from "react-router-dom";
import { getEntityNumber } from "../../../../utils/getEntityNumber";
import styles from "./SliderItem.module.scss";
import errorImg from "../../../../assets/slideErrorImg.png";
import MyImg from "../../../UI/MyImg/MyImg";

const SliderItem = forwardRef(({ slide, width }, ref) => {
  const entity = slide.url && defineEntity(slide.url);

  return slide.reason ? (
    <div
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px,`,
      }}
      className={styles["slider-item"]}
      ref={ref}
    >
      <div className={styles["slide-img"]}>
        <MyImg src={errorImg} alt="error" />
      </div>
      <p>Faild to fetch</p>
    </div>
  ) : (
    <Link
      to={`/${entity}/${getEntityNumber(slide.url)}`}
      className={styles["slider-item"]}
      style={{ minWidth: `${width}px`, maxWidth: `${width}px` }}
      ref={ref}
    >
      <div className={styles["slide-img"]}>
        <MyImg
          src={getEntityImg(slide.url, entity)}
          alt={entity == "films" ? slide.title : slide.name}
        />
      </div>
      <p>{entity == "films" ? slide.title : slide.name}</p>
    </Link>
  );
});

export default SliderItem;
