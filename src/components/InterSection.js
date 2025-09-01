// --------------------------------------------
// Intersection Observer Start

import { useEffect } from "react";

// Custom hook for Intersection Observer
export const useIntersectionObserver = (className, options = {}) => {
  useEffect(() => {
    const observeElements = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // ✅ Element is visible in viewport
          entry.target.classList.add("active");
        } else {
          // ❌ Element is outside viewport
          entry.target.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(observeElements, options);

    const elementsToObserve = Array.from(
      document.getElementsByClassName(className)
    );

    // Start observing each element
    elementsToObserve.forEach((element) => observer.observe(element));

    // Cleanup function
    return () => {
      elementsToObserve.forEach((element) => observer.unobserve(element));
    };
  }, [className, options]);
};

// Intersection Observer End
// --------------------------------------------
