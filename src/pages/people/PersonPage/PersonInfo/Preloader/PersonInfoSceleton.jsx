import React, { useLayoutEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./PersonInfoSceleton.module.scss";

const PersonInfoSceleton = () => {
  const [rowsCount, setRowsCount] = useState(2);

  useLayoutEffect(() => {
    const mediaQuery = matchMedia("(max-width:460px)");

    const change = () => {
      if (mediaQuery.matches) setRowsCount(6);
      else setRowsCount(2);
    };
    change();

    mediaQuery.addEventListener("change", change);

    return () => {
      mediaQuery.removeEventListener("change", change);
    };
  }, []);

  return (
    <div className={styles.table}>
      <Skeleton count={rowsCount} style={{ marginBottom: "5px" }} />
    </div>
  );
};

export default PersonInfoSceleton;
