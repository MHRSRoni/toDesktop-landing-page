import { useEffect, useState } from "react";

export const useLineMoving = (
  elementRef,
  isLTR,
  speed,
  initialPosition = 0,
) => {
  const initialStyle = { transform: `translateX(${initialPosition}px)` };
  const [style, setStyle] = useState(initialStyle);
  let returnArray = [];
  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const intersectionCallback = (entries) => {
        returnArray = entries;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.addEventListener("scroll", handleScroll);
          } else {
            document.removeEventListener("scroll", handleScroll);
          }
        });
      };
      const handleScroll = () => {
        const translateX =
          (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslateX = 0;
        if (isLTR) totalTranslateX = translateX + initialPosition;
        else totalTranslateX = -(translateX + initialPosition);
        setStyle({ ...style, transform: `translateX(${totalTranslateX}px)` });
      };
      const intersectionOvserver = new IntersectionObserver(
        intersectionCallback,
      );
      intersectionOvserver.observe(element);

      return () => intersectionOvserver.disconnect();
    }
  }, [elementRef, isLTR, speed, initialPosition]);
  return [style];
};
