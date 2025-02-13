class DropDown extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const dropdownElements =
      this.getAttribute("dropdownElements").split(",") || [];
    const btnName = this.getAttribute("btnName") || [];
    const btnId = this.getAttribute("btnId") || [];

    this.innerHTML = `
        <div class="dropdown-wrapper" class="relative">
            <button id=${btnId} aria-expanded="false" aria-controls="dropdown" class="text-blue-800 py-2 flex items-center gap-[9px]">
                <span>${btnName}</span>
                <img src="./assets/downArrow.svg" alt="Toggle dropdown" class="h-[24px] w-[24px]" />
            </button>
            <div class="bg-white hidden shadow absolute px-2 rounded-md py-2 border">
                <ul class="flex flex-col gap-4">
                     ${dropdownElements
                       .map((element) => {
                         return `<li role="menuitem" 
                                     class="cursor-pointer hover:bg-blue-100/30 rounded-md px-4 py-1"><a href="#">${element}</a></li>`;
                       })
                       .join("")}
                </ul>
            </div>
        </div>
        `;

    const dropdownBtn = document.getElementById(btnId);
    const dropdownMenu = dropdownBtn.nextElementSibling;

    dropdownBtn.addEventListener("mouseover", () => {
      dropdownMenu.classList.remove("hidden");
    });

    dropdownBtn.addEventListener("mouseleave", () => {
      if (!dropdownMenu.matches(":hover")) {
        dropdownMenu.classList.add("hidden");
      }
    });

    dropdownMenu.addEventListener("mouseover", () => {
      dropdownMenu.classList.remove("hidden");
    });

    dropdownMenu.addEventListener("mouseleave", () => {
      dropdownMenu.classList.add("hidden");
    });
  }
}

customElements.define("drop-down", DropDown);
