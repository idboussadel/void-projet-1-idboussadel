const carouselData = [
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
class CustomCarousel {
  constructor(targetElement, carouselData) {
    if (!targetElement) {
      console.error("Target element provided doesn't exist.");
      return;
    }

    const carousel = document.createElement("div");
    carousel.className =
      "flex gap-[20px] px-2 mx-auto overflow-hidden items-center";

    const carouselItems = carouselData.map((item) =>
      createSliderContent(
        item.imageSrc,
        item.title,
        item.description,
        item.link
      )
    );

    carousel.innerHTML = `
        <button class="max-md:hidden" aria-label="Previous slide" id="carrouselLeft" >
           <img src="./assets/cercle-arrow.svg" alt="Previous arrow" class="slider-arrow" style="transform: rotate(180deg);" />
        </button>        
          <div id="carrouselContainer" class="flex gap-4 overflow-x-auto scroll-smooth px-6 py-6">
          ${carouselItems
            .map(
              (slide, i) => `
            <div class='slide flex-1 min-w-[15rem] rounded-[16px] shadow-[0px_4px_25px_0px_#2D313F24]' role="group" aria-label='Slide ${
              i + 1
            } of ${carouselItems.length}'>
              ${slide.content}
            </div>`
            )
            .join("")}
        </div>
          <button class="max-md:hidden" id="carrouselRight" aria-label="Next slide">
            <img src="./assets/cercle-arrow.svg" alt="Next arrow" class="slider-arrow"/>
          </button>
    `;

    this.container = carousel.querySelector("#carrouselContainer");
    this.btnLeft = carousel.querySelector("#carrouselLeft");
    this.btnRight = carousel.querySelector("#carrouselRight");

    targetElement.appendChild(carousel);

    this.init();
  }

  init() {
    this.btnRight.addEventListener("click", () => {
      this.container.style.scrollBehavior = "smooth";
      this.container.scrollLeft += 300;
    });

    this.btnLeft.addEventListener("click", () => {
      this.container.style.scrollBehavior = "smooth";
      this.container.scrollLeft -= 300;
    });

    setInterval(() => {
      this.container.style.scrollBehavior = "smooth";
      this.container.scrollLeft += 300;

      if (
        this.container.scrollLeft >=
        this.container.scrollWidth - this.container.offsetWidth
      ) {
        this.container.scrollLeft = 0;
      }
    }, 3000);
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

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  new CustomCarousel(carousel, carouselData);
});
