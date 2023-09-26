import React, { useEffect, useState } from "react";
import darkSideImg from "./img/Dark_Side_symbol.png";
import lightSideImg from "./img/Light_side_symbol.png";
import { useTheme } from "../../../../hooks/useTheme";

const Logo = () => {
  const [currentImg, setCurrentImg] = useState(lightSideImg);
  const { theme } = useTheme();

  useEffect(() => {
    switch (theme) {
      case "dark":
        setCurrentImg(darkSideImg);
        break;
      case "light":
        setCurrentImg(lightSideImg);
        break;
    }
  }, [theme]);

  return <img src={currentImg} alt="" style={{ maxWidth: "65px" }} />;
};

export default Logo;
