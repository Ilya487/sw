import React from "react";
import { useTheme } from "../../../../hooks/useTheme";
import styles from "./ThemeSelector.module.scss";

const ThemeSelector = () => {
  const { theme, changeTheme } = useTheme();

  const handleTheme = () => {
    theme == "light" ? changeTheme("dark") : changeTheme("light");
  };

  return (
    <button onClick={handleTheme} className={styles.selector}>
      {theme == "light" ? "Ligth side" : "Dark side"}
    </button>
  );
};

export default ThemeSelector;
