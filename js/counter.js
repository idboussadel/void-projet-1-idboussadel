class Counter extends HTMLElement {
  connectedCallback() {
    const target = +this.getAttribute("data-target");
    const speed = +this.getAttribute("speed") || 400;
    let number = 0;

    const inc = target / speed;

    this.innerHTML = `
          <span class="counter-number">0</span>
      `;

    const counterElement = this.querySelector(".counter-number");

    const interval = setInterval(() => {
      if (number < target) {
        number += inc;
        counterElement.textContent = Math.floor(number);
      } else {
        counterElement.textContent = target;
        clearInterval(interval);
      }
    }, 1);
  }
}

customElements.define("my-counter", Counter);
