class Toast extends HTMLElement {
  static get observedAttributes() {
    return ["message", "type"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "message" && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const message = this.getAttribute("message") || "Error oops...";
    const type = this.getAttribute("type") || "error";

    this.innerHTML = `
          <div id="toast" class="cursor-pointer z-50 flex gap-4 bg-blue-800 items-center justify-center px-4 shadow-sm py-3 min-w-[200px] border rounded fixed top-4 left-1/2 -translate-x-1/2 bg-white transform -translate-y-[100px] duration-500 ease">
                ${
                  type === "success"
                    ? '<img id="check-btn" src="./assets/check.svg" class="h-[24px] w-[24px]" alt="check icon">'
                    : '<img id="error-btn" src="./assets/close-icon.svg" class="h-[24px] w-[24px]" alt="check icon"/>'
                }
                <p class="text-blue-800">${message}</p>
          </div>
      `;
  }
}

customElements.define("custom-toast", Toast);
