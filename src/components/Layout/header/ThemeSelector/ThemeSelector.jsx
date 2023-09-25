import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

const ThemeSelector = () => {
  const { theme, changeTheme } = useTheme();

  const handleTheme = () => {
    theme == "light" ? changeTheme("dark") : changeTheme("light");
  };

  return (
    <div>
      <button onClick={handleTheme}>
        {theme == "light" ? "Ligth side" : "Dark side"}
      </button>
    </div>
  );
};

export default ThemeSelector;
