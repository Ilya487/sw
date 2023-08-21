import React from "react";
import { useTheme } from "../../../../hooks/useTheme";

const ThemeSelector = () => {
  const { changeTheme } = useTheme();

  return (
    <select onChange={(e) => changeTheme(e.target.value)} defaultValue="light">
      <option value="light">Light side</option>
      <option value="dark">Dark side</option>
    </select>
  );
};

export default ThemeSelector;
