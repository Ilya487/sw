import { useState, useEffect } from "react";

export const useRecalculationSlideWidth = (
  windowRef,
  slideRef,
  slidesToShow
) => {
  const [itemWidth, setItemWidth] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);

  const calculateSlideMargins = () => {
    const style = window.getComputedStyle(slideRef.current);
    const marginLeft = parseInt(style.marginLeft);
    const marginRight = parseInt(style.marginRight);

    return marginLeft + marginRight;
  };

  const calculateSlideWidth = () => {
    const margins = calculateSlideMargins();

    const windowWidth = windowRef.current.getBoundingClientRect().width;

    const updatedStepWidth = windowWidth / slidesToShow;

    const updatedItemWidth = windowWidth / slidesToShow - margins;

    setStepWidth(updatedStepWidth);
    setItemWidth(updatedItemWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", calculateSlideWidth);
    calculateSlideWidth();

    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
    };
  }, [slidesToShow]);

  return { itemWidth, stepWidth };
};
