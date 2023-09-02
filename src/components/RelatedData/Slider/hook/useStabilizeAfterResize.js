import { useEffect } from "react";

export const useStabilizeAfterResize = (stepWidth, showedSlides, setOffset) => {
  const stabilizeSlider = () => {
    const newOffset = -(stepWidth * showedSlides);
    setOffset(newOffset);
  };

  useEffect(() => {
    stabilizeSlider();
  }, [stepWidth]);
};
