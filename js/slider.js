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

const offresSection = document.getElementById("offres-section");

if (offresSection) {
  const slider = document.createElement("custom-carousel");

  slider.setAttribute(
    "data-contenu",
    encodeURIComponent(
      JSON.stringify([
        {
          content:
            "<div><img src='https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/Boost-Your-Car-Insurance.jpg' alt='Automobile' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Automobile 1</h3><p class='text-sm'>Protégez votre véhicule avec une assurance automobile adaptée à vos besoins.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='https://t4.ftcdn.net/jpg/04/27/04/89/360_F_427048913_GFksevhIEtfN5xGyqU9iuwdsJeUdsKZy.jpg' alt='Habitation' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Habitation 2</h3><p class='text-sm'>Sécurisez votre domicile avec une assurance habitation fiable.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='https://img.freepik.com/photos-gratuite/piles-pieces-disposees-dans-graphique-barres_35913-2518.jpg?semt=ais_hybrid' alt='Épargne' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Épargne 3</h3><p class='text-sm'>Préparez l'avenir avec nos solutions d'épargne.<br />...</p><div class='flex gap-2 items-center'><a href='#'  class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src=' https://img.freepik.com/photos-gratuite/gros-plan-docteur-stethoscope_23-2149191355.jpg?semt=ais_hybrid' alt='Santé et prévoyance' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Santé et prévoyance 4</h3><p class='text-sm'>Assurez-vous une tranquillité d'esprit avec nos solutions de santé et prévoyance.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/Boost-Your-Car-Insurance.jpg' alt='Santé et prévoyance' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Santé et prévoyance 5</h3><p class='text-sm'>Assurez-vous une tranquillité d'esprit avec nos solutions de santé et prévoyance.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='https://t4.ftcdn.net/jpg/04/27/04/89/360_F_427048913_GFksevhIEtfN5xGyqU9iuwdsJeUdsKZy.jpg' alt='Automobile' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Automobile 1</h3><p class='text-sm'>Protégez votre véhicule avec une assurance automobile adaptée à vos besoins.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='https://www.iledefrance.fr/sites/default/files/styles/hub_exposition_banner_desktop/public/medias/istock-photobyphotoboy.jpg.webp?itok=_2VuK8a4' alt='Habitation' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Habitation 2</h3><p class='text-sm'>Sécurisez votre domicile avec une assurance habitation fiable.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='https://img.freepik.com/photos-gratuite/gros-plan-docteur-stethoscope_23-2149191355.jpg?semt=ais_hybrid' alt='Épargne' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Épargne 3</h3><p class='text-sm'>Préparez l'avenir avec nos solutions d'épargne.<br />...</p><div class='flex gap-2 items-center'><a href='#'  class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='https://t4.ftcdn.net/jpg/04/27/04/89/360_F_427048913_GFksevhIEtfN5xGyqU9iuwdsJeUdsKZy.jpg' alt='Habitation' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Habitation 2</h3><p class='text-sm'>Sécurisez votre domicile avec une assurance habitation fiable.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='https://www.iledefrance.fr/sites/default/files/styles/hub_exposition_banner_desktop/public/medias/istock-photobyphotoboy.jpg.webp?itok=_2VuK8a4' alt='Épargne' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Épargne 3</h3><p class='text-sm'>Préparez l'avenir avec nos solutions d'épargne.<br />...</p><div class='flex gap-2 items-center'><a href='#'  class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
      ])
    )
  );

  offresSection.appendChild(slider);
}

customElements.define("custom-carousel", CustomCarousel);
