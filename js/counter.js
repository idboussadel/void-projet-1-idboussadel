class Counter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "";

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the counter content only when the element is in the viewport
            this.innerHTML = `
            <span class="counter-number">0</span>
          `;

            const target = +this.getAttribute("data-target");
            const speed = +this.getAttribute("speed") || 400;
            const counterElement = this.querySelector(".counter-number");

            let number = 0;
            const inc = target / speed;

            // Function to start counting
            const startCounting = () => {
              const interval = setInterval(() => {
                if (number < target) {
                  number += inc;
                  counterElement.textContent = Math.floor(number);
                } else {
                  counterElement.textContent = target;
                  clearInterval(interval);
                }
              }, 1);
            };

            startCounting();

            observer.unobserve(entry.target); // Stop observing the element once it's in view
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    // Observe the counter element
    observer.observe(this);
  }
}

customElements.define("my-counter", Counter);
