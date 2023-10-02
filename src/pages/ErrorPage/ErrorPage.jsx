import React from "react";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <p>
        Error <br />
        Failed to fetch data
        <br />
        Try to reload this page
      </p>
    </div>
  );
};

export default ErrorPage;
