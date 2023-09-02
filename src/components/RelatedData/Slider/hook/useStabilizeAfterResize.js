import { useEffect } from "react";

export const useStabilizeAfterResize = (
  stepWidth,
  showedSlides,
  setOffset,
  itemWidth
) => {
  const stabilizeSlider = () => {
    const newOffset = -(stepWidth * showedSlides);
    setOffset(newOffset);
  };

  useEffect(() => {
    stabilizeSlider();
  }, [itemWidth]);
};
