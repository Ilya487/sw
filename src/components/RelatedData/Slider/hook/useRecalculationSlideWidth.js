import { useState, useEffect } from "react";

export const useRecalculationSlideWidth = (
  slides,
  windowRef,
  slideRef,
  SLIDES_TO_SHOW
) => {
  const [itemWidth, setItemWidth] = useState();
  const [stepWidth, setStepWidth] = useState();

  const calculateSlideMargins = () => {
    const style = getComputedStyle(slideRef.current);
    const marginLeft = parseInt(style.marginLeft);
    const marginRight = parseInt(style.marginRight);

    return marginLeft + marginRight;
  };

  const calculateSlideWidth = () => {
    const margins = calculateSlideMargins();

    const windowWidth = windowRef.current.getBoundingClientRect().width;

    const updatedStepWidth = windowWidth / SLIDES_TO_SHOW;

    const updatedItemWidth = windowWidth / SLIDES_TO_SHOW - margins;

    setStepWidth(updatedStepWidth);
    setItemWidth(updatedItemWidth);
  };

  useEffect(() => {
    calculateSlideWidth();
  }, [slides]);

  useEffect(() => {
    window.addEventListener("resize", calculateSlideWidth);

    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
    };
  }, []);

  return { itemWidth, stepWidth };
};
