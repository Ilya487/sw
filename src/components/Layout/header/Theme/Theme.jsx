import React, { useState } from "react";

const Theme = () => {
  //   const [theme, setTheme] = useState("light");

  function changeTheme(value) {
    document.documentElement.style.setProperty(
      `--current-theme`,
      `var(--${value})`
    );
    document.documentElement.style.setProperty(
      `--current-font`,
      `var(--${value}-font)`
    );
  }

  return (
    <select onChange={(e) => changeTheme(e.target.value)} defaultValue="light">
      <option value="light">Light side</option>
      <option value="dark">Dark side</option>
    </select>
  );
};

export default Theme;
