import errorIamge from "../../src/assets/errorPlaceholder.jpg";

export const handleImageError = (e) => {
  e.target.src = errorIamge;
};
