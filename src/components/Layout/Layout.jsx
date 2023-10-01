import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
