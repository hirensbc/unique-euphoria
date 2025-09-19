// src/hooks/useResponsiveSlides.js
import { useState, useEffect } from "react";

const getSlidesForWidth = (w) => {
//   if (w <= 375) return 1; // xs
  if (w <= 480) return 1; // small phones
  if (w <= 1024) return 2; // small phones
  if (w <= 1300) return 3; // tablets / small laptops
  return 4; // large desktops
};

export function useResponser(defaultSlides = 4) {
  const [slidesToShow, setSlidesToShow] = useState(defaultSlides);

  useEffect(() => {
    const update = () => setSlidesToShow(getSlidesForWidth(window.innerWidth));

    // run once on mount
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slidesToShow;
}
