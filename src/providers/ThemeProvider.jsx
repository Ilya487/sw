import React, { createContext, useEffect, useState } from "react";
import { changeThemeCssVars } from "../utils/changeThemeCssVars";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    changeTheme(theme);
  }, []);

  useEffect(() => {
    function saveTheme() {
      localStorage.setItem("theme", theme);
    }
    window.addEventListener("beforeunload", saveTheme);

    return () => {
      window.removeEventListener("beforeunload", saveTheme);
    };
  }, [theme]);

  function changeTheme(theme) {
    setTheme(theme);

    changeThemeCssVars(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
