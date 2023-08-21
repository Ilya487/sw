import React from "react";
import { changeThemeCssVars } from "../../../../utils/changeThemeCssVars";

const ThemeSelector = () => {
  return (
    <select
      onChange={(e) => changeThemeCssVars(e.target.value)}
      defaultValue="light"
    >
      <option value="light">Light side</option>
      <option value="dark">Dark side</option>
    </select>
  );
};

export default ThemeSelector;
