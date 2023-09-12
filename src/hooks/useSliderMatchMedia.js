import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";

export const useSliderMatchMedia = (settings, initialValue) => {
  const [sliderOption, setSliderOption] = useState(initialValue);
  const mediaList = useRef([]);

  useLayoutEffect(() => {
    settings.forEach((setting, index) => {
      mediaList.current.push(matchMedia(setting.media));

      function change() {
        if (mediaList.current[index].matches) {
          setSliderOption(setting.options);
        } else if (index == 0) {
          setSliderOption(initialValue);
        } else {
          mediaList.current[index - 1].onchange();
        }
      }

      change();

      mediaList.current[index].onchange = change;
    });

    return () => {
      mediaList.current.forEach((media) => (media.onchange = null));
    };
  }, []);

  return sliderOption;
};
