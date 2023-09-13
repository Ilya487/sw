import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./FilmInfoPreloader.module.scss";

const FilmInfoPreloader = () => {
  return <Skeleton containerClassName={styles.table} />;
};

export default FilmInfoPreloader;
