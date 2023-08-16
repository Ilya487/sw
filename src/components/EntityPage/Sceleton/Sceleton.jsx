import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={423}
    height={566}
    viewBox="0 0 423 566"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="0" rx="0" ry="0" width="423" height="566" />
  </ContentLoader>
);

export default Sceleton;
