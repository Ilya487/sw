import { useState } from "react";

export const useSliderDragAndDrop = (
  offset,
  setOffset,
  stepWidth,
  SLIDES_TO_SHOW,
  setShowedSlides,
  slidesCount
) => {
  const [isDraging, setIsDraging] = useState(false);

  let startX;
  let startOffset;

  const dragSlider = (e) => {
    e.preventDefault();

    const track = e.currentTarget;
    startX = e.clientX;
    startOffset = offset;

    track.onmousemove = (e) => {
      setIsDraging(true);
      setOffset(startOffset + e.clientX - startX);
    };

    track.onmouseleave = (e) => {
      track.onmousemove = null;
      track.onmouseleave = null;

      setIsDraging(false);

      stabilizedAfterDrop(e.clientX);
    };

    track.onmouseup = (e) => {
      track.onmousemove = null;
      track.onmouseleave = null;

      setIsDraging(false);

      stabilizedAfterDrop(e.clientX);
    };
  };

  const touchDragSlider = (e) => {
    setIsDraging(true);

    const sliderWindow = e.currentTarget;
    startX = e.touches[0].clientX;
    startOffset = offset;

    sliderWindow.ontouchmove = (e) => {
      setOffset(startOffset + e.touches[0].clientX - startX);
    };

    sliderWindow.ontouchend = (e) => {
      stabilizedAfterDrop(e.changedTouches[0].clientX);
      setIsDraging(false);
    };
  };

  const stabilizedAfterDrop = (xCoord) => {
    let newShowed = -Math.round((startOffset + xCoord - startX) / stepWidth);

    if (newShowed < 1) newShowed = 0;
    if (newShowed > slidesCount - SLIDES_TO_SHOW)
      newShowed = slidesCount - SLIDES_TO_SHOW;

    setOffset(-stepWidth * newShowed);
    setShowedSlides(newShowed);
  };

  return { dragSlider, touchDragSlider, isDraging };
};
