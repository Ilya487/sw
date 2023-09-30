import { useEffect } from "react";

export const useMatchMedia = (mediaQueries, initialCallback) => {
  useEffect(() => {
    const mediaList = [];

    mediaQueries.forEach((query, index) => {
      mediaList.push(matchMedia(query.media));

      function change() {
        if (mediaList[index].matches) {
          mediaQueries[index].callback();
        } else if (index == 0) {
          initialCallback();
        } else {
          mediaQueries[index - 1].callback();
        }
      }
      change();
      mediaList[index].onchange = change;
    });

    return () => {
      mediaList.forEach((media) => (media.onchange = null));
    };
  }, []);
};
