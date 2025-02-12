class CostumSlider extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const encodedContenu = this.getAttribute("data-contenu") || "";
    let contenu = JSON.parse(decodeURIComponent(encodedContenu));
    const slideWidth = 240;

    let offset = 0;

    // Generate slides
    const slidesHtml = contenu
      .map(
        (slide, i) => `
        <div class='slide flex-1 min-w-[15rem] overflow-hidden rounded-[16px] shadow-[0px_4px_25px_0px_#2D313F24]' 
             role="group" aria-label='Slide ${i + 1} of ${contenu.length}'>
          ${slide.content}
        </div>`
      )
      .join("");

    this.innerHTML = `
      <div class="flex gap-[20px] mx-auto max-w-[75rem] items-center">
        <button aria-label="Previous slide" class="prev-btn">
          <img src="./assets/cercle-arrow.svg" alt="Previous arrow" class="!h-[70px] !w-[70px] rotate-180" />
        </button>

        <div class="mx-auto overflow-hidden px-5 py-8">
          <div class="slides flex gap-[20px] transition-transform duration-300 ease">
            ${slidesHtml}
          </div>
        </div>

        <button aria-label="Next slide" class="next-btn">
          <img src="./assets/cercle-arrow.svg" alt="Next arrow" class="h-[70px] w-[70px]" />
        </button>
      </div>
    `;

    const slideElements = this.querySelectorAll(".slide");
    const slides = this.querySelector(".slides");
    const maxOffset = (contenu.length - 1) * slideWidth;

    this.querySelector(".next-btn").addEventListener("click", () => {
      if (offset < maxOffset) {
        offset += slideWidth;
        slides.style.transform = `translateX(-${offset}px)`;
      }
    });

    this.querySelector(".prev-btn").addEventListener("click", () => {
      if (offset > 0) {
        offset -= slideWidth;
        slides.style.transform = `translateX(-${offset}px)`;
      }
    });
  }
}

const offresSection = document.getElementById("offres-section");

if (offresSection) {
  const slider = document.createElement("costum-slider");

  slider.setAttribute(
    "data-contenu",
    encodeURIComponent(
      JSON.stringify([
        {
          content:
            "<div><img src='./assets/carousel/car.jpg' alt='Automobile' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Automobile 1</h3><p class='text-sm'>Protégez votre véhicule avec une assurance automobile adaptée à vos besoins.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='./assets/carousel/familly.png' alt='Habitation' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Habitation 2</h3><p class='text-sm'>Sécurisez votre domicile avec une assurance habitation fiable.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='./assets/carousel/invest.jpg' alt='Épargne' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Épargne 3</h3><p class='text-sm'>Préparez l'avenir avec nos solutions d'épargne.<br />...</p><div class='flex gap-2 items-center'><a href='#'  class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='./assets/carousel/health.webp' alt='Santé et prévoyance' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Santé et prévoyance 4</h3><p class='text-sm'>Assurez-vous une tranquillité d'esprit avec nos solutions de santé et prévoyance.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
        {
          content:
            "<div><img src='./assets/carousel/health.webp' alt='Santé et prévoyance' class='w-full h-[170px] rounded-t-[16px]'/><div class='flex flex-col gap-[8px] p-[20px]'><h3 class='font-bold text-[18px]'>Santé et prévoyance 5</h3><p class='text-sm'>Assurez-vous une tranquillité d'esprit avec nos solutions de santé et prévoyance.</p><div class='flex gap-2 items-center'><a href='#' class='text-blue-500'>En savoir plus</a><img src='./assets/rightArrowLight.svg' alt='Right arrow icon' class='h-[16px] w-[16px] mt-1' /></div></div></div>",
        },
      ])
    )
  );

  slider.setAttribute("nbrSlidesShow", 4);

  offresSection.appendChild(slider);
}

customElements.define("costum-slider", CostumSlider);
