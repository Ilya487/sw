import React, { memo } from "react";
import SliderItem from "../SliderItem/SliderItem";

const SliderList = memo(({ slides, itemWidth, slideRef }) => {
  return (
    <>
      {slides.map((slide, i) => (
        <SliderItem slide={slide} key={i} width={itemWidth} ref={slideRef} />
      ))}
    </>
  );
});

export default SliderList;
