const dropDownitems = [
  {
    btnName: "Automobile",
    dropdownElements: ["assurance", "réparations", "entretien", "ventes"],
  },
  {
    btnName: "Conseils et prévention",
    dropdownElements: ["assurance", "consultation", "diagnostic", "prévention"],
  },
];

class SecondaryNav {
  constructor(targetElement) {
    if (!targetElement) {
      console.error("Target element provided doesn't exist.");
      return;
    }

    this.nav = document.createElement("nav");
    this.nav.className =
      "main-nav flex justify-between max-md:py-2 items-center text-white max-md:border-b md:bg-blue-800 px-8 font-bold text-[14px] leading-[19.07px]";

    this.nav.innerHTML = `
      <ul class="flex gap-[32px] max-md:hidden">
          <li class="py-[15px] md:border-b-[5px] md:border-yellow-500"><a href="#.">Particuliers</a></li>
          <li class="py-[15px]"><a href="#.">Entreprises/Professionels</a></li>
          <li class="py-[15px]"><a href="#.">Nous connaître</a></li>
      </ul>

      <img id="menu-btn" src="./assets/menu.svg" class="cursor-pointer hover:opacity-80 md:hidden h-[24px] w-[24px]" alt="menu icon"/>
      <img id="close-menu-btn" src="./assets/close-menu.svg" class="hidden cursor-pointer hover:opacity-80 md:hidden h-[24px] w-[24px]" alt="close menu icon"/>

      <img src="https://www.rmaassurance.com/img/logo/rma_logo_header.png" alt="RMA logo" class="pl-6 md:hidden w-[159px]"/>

      <div class="flex gap-[16px]">
          <button aria-label="Search">
              <img src="./assets/search.svg" class="max-md:hidden h-[24px] w-[24px]" alt="search icon"/>
              <img src="./assets/search-black.svg" class="md:hidden h-[24px] w-[24px]" alt="search icon"/>
          </button>
          <button aria-label="Mon espace client" class="flex items-center gap-[7px] hover:bg-yellow-500/90 bg-yellow-500 text-blue-800 rounded-[26px] md:h-[32px] py-[8px] px-[8px] md:px-[14px]">
              <img src="./assets/user.svg" class="h-[24px] w-[24px]" alt="user icon" />
             <span class="max-md:hidden"> Mon espace client </span>
          </button>
      </div>
    `;

    targetElement.appendChild(this.nav);
  }
}

class MainNav {
  constructor(targetElement) {
    if (!targetElement) {
      console.error("Target element provided doesn't exist.");
      return;
    }

    // Create and configure the nav element
    const nav = document.createElement("nav");
    nav.classList =
      "z-[60] fade-in-top max-md:hidden items-center main-nav text-blue-800 p-[20px] font-bold text-[18px]";

    // Append the logo and links
    nav.innerHTML = `
      <ul class="flex gap-[40px] items-center">
        <li>
            <img src="https://www.rmaassurance.com/img/logo/rma_logo_header.png" alt="RMA logo" class="w-[159px]"/>
        </li>
        <li id="dropdown-1"></li> <!-- Placeholder for first dropdown -->
        <li><a href="#.">Habitation</a></li>
        <li><a href="#.">santé et prévoyance</a></li>
        <li><a href="#.">Épargne</a></li>
        <li id="dropdown-2"></li> <!-- Placeholder for second dropdown -->
      </ul>
    `;

    // Append the nav to the target element
    targetElement.appendChild(nav);

    // Create dropdowns dynamically
    new DropDown(
      document.getElementById("dropdown-1"),
      dropDownitems[0].btnName,
      dropDownitems[0].btnName,
      dropDownitems[0].dropdownElements
    );

    new DropDown(
      document.getElementById("dropdown-2"),
      dropDownitems[1].btnName,
      dropDownitems[1].btnName,
      dropDownitems[1].dropdownElements
    );
  }
}

class MenuMobile {
  constructor(targetElement) {
    if (!targetElement) {
      console.error("Target element provided doesn't exist.");
      return;
    }

    this.menuMobile = document.createElement("div");
    this.menuMobile.id = "menu-mobile";
    this.menuMobile.className =
      "absolute fixed top-[57px] bg-white md:hidden z-10 h-[100vh] w-full transition-transform duration-200 ease transform translate-x-[-100%]";

    this.menuMobile.innerHTML = `
      <ul class="flex flex-col">
        <li class="px-[20px] py-[30px] text-white border-b bg-blue-800 border-b-gray-500 border-l-[5px] border-yellow-500"><a href="#">Particuliers</a></li>
        <li class="px-[20px] py-[30px] text-white border-b bg-blue-800 border-gray-500"><a href="#">Entreprises/Professionels</a></li>
        <li class="px-[20px] py-[30px] text-white border-b bg-blue-800 border-gray-500"><a href="#">Nous connaître</a></li>
        <li class="px-[20px] py-[30px] border-b border-b-gray-500">
          <button aria-expanded="false" aria-controls="dropdown" class="flex items-center justify-between">
            <span>Automobile</span>
            <img src="./assets/downArrow.svg" alt="Toggle dropdown" class="h-[24px] w-[24px]" />
          </button>
        </li>
        <li class="px-[20px] py-[30px] border-b border-b-gray-500"><a href="#">Habitation</a></li>
        <li class="px-[20px] py-[30px] border-b border-b-gray-500"><a href="#">Santé et prévoyance</a></li>
        <li class="px-[20px] py-[30px] border-b border-b-gray-500"><a href="#">Épargne</a></li>
        <li class="px-[20px] py-[30px] border-b border-b-gray-500">
          <button aria-expanded="false" aria-controls="dropdown" class="flex items-center gap-[9px]">
            <span>Conseils et prévention</span>
            <img src="./assets/downArrow.svg" alt="Toggle dropdown" class="h-[24px] w-[24px]" />
          </button>
        </li>
      </ul>
    `;

    // Append menu to target element
    targetElement.appendChild(this.menuMobile);

    // Initialize menu event listeners
    this.initMenu();
  }

  initMenu() {
    const menu = this.menuMobile;
    const menuBtn = document.getElementById("menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");

    if (menuBtn && closeMenuBtn) {
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("hidden");
        closeMenuBtn.classList.toggle("hidden");
        menu.classList.remove("translate-x-[-100%]");
        menu.classList.add("translate-x-0");
        document.body.style.overflow = "hidden";
      });

      closeMenuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("hidden");
        closeMenuBtn.classList.toggle("hidden");
        menu.classList.add("translate-x-[-100%]");
        menu.classList.remove("translate-x-0");
        document.body.style.overflow = "auto";
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  new SecondaryNav(header);
  new MainNav(header);
  new MenuMobile(header);
});
