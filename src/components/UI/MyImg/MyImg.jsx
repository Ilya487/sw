import React, { useEffect, useRef } from "react";
import { handleImageError } from "../../../utils/handleImageError";
import placeholder from "../../../assets/placeholder.jpg";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const src = entry.target.dataset.src;
      entry.target.src = src;
      entry.target.style.visibility = "visible";
      observer.unobserve(entry.target);
    }
  });
});

const MyImg = ({ src, ...props }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    observer.observe(imgRef.current);
  }, []);

  return (
    <img
      src={placeholder}
      style={{ visibility: "hidden" }}
      data-src={src}
      onError={handleImageError}
      ref={imgRef}
      {...props}
    />
  );
};

export default MyImg;
