import React from "react";

const SliderControl = ({ setPrevSlide, setNextSlide }) => {
  return (
    <>
      <button onClick={setPrevSlide} style={{ marginRight: "20px" }}>
        prev
      </button>
      <button onClick={setNextSlide}>next</button>
    </>
  );
};

export default SliderControl;
