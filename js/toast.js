class Toast {
  constructor(message = "Error oops...", type = "error") {
    this.message = message;
    this.type = type;

    this.toast = document.createElement("div");
    this.toast.id = "toast";
    this.toast.className =
      "cursor-pointer z-50 flex gap-4 bg-blue-800 items-center justify-center px-4 shadow-sm py-3 min-w-[200px] border rounded fixed top-4 left-1/2 -translate-x-1/2 bg-white transform -translate-y-[100px] duration-500 ease";
    const icon =
      this.type === "success"
        ? '<img id="check-btn" src="./assets/check.svg" class="h-[24px] w-[24px]" alt="check icon">'
        : '<img id="error-btn" src="./assets/close-icon.svg" class="h-[24px] w-[24px]" alt="error icon"/>';

    this.toast.innerHTML = `
      ${icon}
      <p class="text-blue-800">${this.message}</p>
    `;
  }

  show(targetElement) {
    targetElement.appendChild(this.toast);

    requestAnimationFrame(() => {
      this.toast.classList.remove("-translate-y-[100px]");
    });

    setTimeout(() => {
      this.toast.classList.add("-translate-y-[100px]");
      setTimeout(() => {
        this.toast.remove();
      }, 500);
    }, 2000);
  }
}
