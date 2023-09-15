import React from "react";
import styles from "./EntityInfo.module.scss";
import { entityCharacteristics } from "../../../utils/constants/entityCharacteristics";

const EntityInfo = ({ entity, entityData }) => {
  return (
    <div className={styles.info}>
      {entityCharacteristics[entity].map((category) => (
        <div className={styles["info-row"]} key={category}>
          <span className={styles["info-row__left"]}>
            {category.replaceAll("_", " ")}
          </span>
          <span className={styles["info-row__right"]}>
            {entityData[category]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EntityInfo;
