import React, { useEffect } from "react";
import styles from "./NotFoundPage.module.scss";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("/notFound", {
      replace: true,
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.code}>404</p>
      <p className={styles.text}>Page not found</p>
    </div>
  );
};

export default NotFoundPage;
