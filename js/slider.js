const sliderData = [
  {
    imageSrc:
      "https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/Boost-Your-Car-Insurance.jpg",
    title: "Automobile 1",
    description:
      "Protégez votre véhicule avec une assurance automobile adaptée à vos besoins.",
    link: "#",
  },
  {
    imageSrc:
      "https://t4.ftcdn.net/jpg/04/27/04/89/360_F_427048913_GFksevhIEtfN5xGyqU9iuwdsJeUdsKZy.jpg",
    title: "Habitation 2",
    description:
      "Sécurisez votre domicile avec une assurance habitation fiable.",
    link: "#",
  },
  {
    imageSrc:
      "https://img.freepik.com/photos-gratuite/piles-pieces-disposees-dans-graphique-barres_35913-2518.jpg?semt=ais_hybrid",
    title: "Épargne 3",
    description: "Préparez l'avenir avec nos solutions d'épargne.",
    link: "#",
  },
  {
    imageSrc:
      "https://img.freepik.com/photos-gratuite/gros-plan-docteur-stethoscope_23-2149191355.jpg?semt=ais_hybrid",
    title: "Santé et prévoyance 4",
    description:
      "Assurez-vous une tranquillité d'esprit avec nos solutions de santé et prévoyance.",
    link: "#",
  },
  {
    imageSrc:
      "https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/Boost-Your-Car-Insurance.jpg",
    title: "Santé et prévoyance 5",
    description:
      "Assurez-vous une tranquillité d'esprit avec nos solutions de santé et prévoyance.",
    link: "#",
  },
  {
    imageSrc:
      "https://www.iledefrance.fr/sites/default/files/styles/hub_exposition_banner_desktop/public/medias/istock-photobyphotoboy.jpg.webp?itok=_2VuK8a4",
    title: "Habitation 2",
    description:
      "Sécurisez votre domicile avec une assurance habitation fiable.",
    link: "#",
  },
  {
    imageSrc:
      "https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/Boost-Your-Car-Insurance.jpg",
    title: "Automobile 10",
    description:
      "Protégez votre véhicule avec une assurance automobile adaptée à vos besoins.",
    link: "#",
  },
];
class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    this.setupEventListeners();
  }

  render() {
    const contenu = JSON.parse(
      decodeURIComponent(this.getAttribute("data-contenu")) || "[]"
    );
    this.innerHTML = `
      <div class="flex gap-[20px] mx-auto max-w-[75rem] items-center">
        <button aria-label="Previous slide" id="carrouselLeft" >
           <img src="./assets/cercle-arrow.svg" alt="Previous arrow" class="slider-arrow" style="transform: rotate(180deg);" />
        </button>        
          <div id="carrouselContainer" class="flex gap-4 overflow-x-auto scroll-smooth px-6 py-6">
          ${contenu
            .map(
              (slide, i) => `
            <div class='slide flex-1 min-w-[15rem] rounded-[16px] shadow-[0px_4px_25px_0px_#2D313F24]' role="group" aria-label='Slide ${
              i + 1
            } of ${contenu.length}'>
              ${slide.content}
            </div>`
            )
            .join("")}
        </div>
          <button id="carrouselRight" aria-label="Next slide">
            <img src="./assets/cercle-arrow.svg" alt="Next arrow" class="slider-arrow"/>
          </button>
      </div>
    `;
  }

  setupEventListeners() {
    const container = this.querySelector("#carrouselContainer");
    const btnLeft = this.querySelector("#carrouselLeft");
    const btnRight = this.querySelector("#carrouselRight");

    btnRight.addEventListener("click", () => {
      container.style.scrollBehavior = "smooth";
      container.scrollLeft += 300;
    });

    btnLeft.addEventListener("click", () => {
      container.style.scrollBehavior = "smooth";
      container.scrollLeft -= 300;
    });
  }
}

function createSliderContent(imageSrc, title, description, link) {
  return {
    content: `
      <div>
        <img src="${imageSrc}" loading="lazy" alt="${title}" class="w-full h-[170px] rounded-t-[16px]" />
        <div class="flex flex-col gap-[8px] p-[20px]">
          <h3 class="font-bold text-[18px]">${title}</h3>
          <p class="text-sm">${description}</p>
          <div class="flex gap-2 items-center">
            <a href="${link}" class="text-blue-500">En savoir plus</a>
            <img src="./assets/rightArrowLight.svg" alt="Right arrow icon" loading="lazy" width={16} height={16} class="h-[16px] w-[16px] mt-1" />
          </div>
        </div>
      </div>`,
  };
}

const offresSection = document.getElementById("offres-section");

if (offresSection) {
  const slider = document.createElement("custom-carousel");
  const sliderContent = sliderData.map((item) =>
    createSliderContent(item.imageSrc, item.title, item.description, item.link)
  );
  slider.setAttribute(
    "data-contenu",
    encodeURIComponent(JSON.stringify(sliderContent))
  );

  offresSection.appendChild(slider);
}

customElements.define("custom-carousel", CustomCarousel);
