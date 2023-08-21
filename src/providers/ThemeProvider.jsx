import React, { createContext, useState } from "react";
import { changeThemeCssVars } from "../utils/changeThemeCssVars";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

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
