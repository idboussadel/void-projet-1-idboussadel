document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-top");

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.4, // 30% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  }, observerOptions);

  // Observe each element
  elements.forEach((element) => {
    observer.observe(element);
  });
});
