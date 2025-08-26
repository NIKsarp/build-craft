// --------------------------------------------
// Intersection Observer Start

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

const observer = new IntersectionObserver(observeElements);
const elementsToObserve = Array.from(document.getElementsByClassName(""));

// Start observing each element
elementsToObserve.forEach((element) => observer.observe(element));

// Intersection Observer End
// --------------------------------------------
