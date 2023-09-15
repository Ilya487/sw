import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./EntityInfoPreloader.module.scss";

const EntityInfoPreloader = () => {
  return <Skeleton containerClassName={styles.table} />;
};

export default EntityInfoPreloader;
