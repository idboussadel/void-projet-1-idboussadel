class DropDown {
  constructor(targetElement, btnName = "", btnId = "", dropdownElements = []) {
    if (!targetElement) {
      console.error("Target element provided doesn't exist.");
      return;
    }

    const dropdownWrapper = document.createElement("div");
    dropdownWrapper.className = "dropdown-wrapper relative";

    const dropdownItems = Array.isArray(dropdownElements)
      ? dropdownElements
      : [];

    dropdownWrapper.innerHTML = `
      <button id="${btnId}" aria-expanded="false" aria-controls="dropdown" class="text-blue-800 py-2 flex items-center gap-[9px]">
        <span>${btnName}</span>
        <img src="./assets/downArrow.svg" alt="Toggle dropdown" class="h-[24px] w-[24px]" />
      </button>
      <div class="bg-white hidden shadow absolute px-2 rounded-md py-2 border" style="z-index: 999;">
        <ul class="flex flex-col gap-4">
          ${dropdownItems
            .map(
              (element) =>
                `<li role="menuitem" class="cursor-pointer hover:bg-blue-100/30 rounded-md px-4 py-1">
                   <a href="#">${element}</a>
                 </li>`
            )
            .join("")}
        </ul>
      </div>
    `;

    targetElement.appendChild(dropdownWrapper);

    this.dropdownBtn = dropdownWrapper.querySelector("button");
    this.dropdownMenu = dropdownWrapper.querySelector("div");

    this.init();
  }

  init() {
    if (!this.dropdownBtn || !this.dropdownMenu) return;

    this.dropdownBtn.addEventListener("mouseover", () => {
      this.dropdownMenu.classList.remove("hidden");
    });

    this.dropdownBtn.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!this.dropdownMenu.matches(":hover")) {
          this.dropdownMenu.classList.add("hidden");
        }
      }, 200);
    });

    this.dropdownMenu.addEventListener("mouseover", () => {
      this.dropdownMenu.classList.remove("hidden");
    });

    this.dropdownMenu.addEventListener("mouseleave", () => {
      this.dropdownMenu.classList.add("hidden");
    });
  }
}
