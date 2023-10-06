import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styles from "./Layout.module.scss";
import { SkeletonTheme } from "react-loading-skeleton";

const Layout = () => {
  return (
    <SkeletonTheme
      baseColor="var(--theme-current-preloader-baseColor)"
      highlightColor="var(--theme-current-preloader-highlightColor)"
    >
      <div className={styles.wrapper}>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer>footer</footer>
      </div>
    </SkeletonTheme>
  );
};

export default Layout;
