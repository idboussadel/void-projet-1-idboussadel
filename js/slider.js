const carouselData = [
  {
    id: 1,
    imageSrc:
      "https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/Boost-Your-Car-Insurance.jpg",
    title: "Automobile 1",
    description:
      "Protégez votre véhicule avec une assurance automobile adaptée à vos besoins.",
    link: "#",
  },
  {
    id: 2,
    imageSrc:
      "https://t4.ftcdn.net/jpg/04/27/04/89/360_F_427048913_GFksevhIEtfN5xGyqU9iuwdsJeUdsKZy.jpg",
    title: "Habitation 2",
    description:
      "Sécurisez votre domicile avec une assurance habitation fiable.",
    link: "#",
  },
  {
    id: 3,
    imageSrc:
      "https://img.freepik.com/photos-gratuite/piles-pieces-disposees-dans-graphique-barres_35913-2518.jpg?semt=ais_hybrid",
    title: "Épargne 3",
    description: "Préparez l'avenir avec nos solutions d'épargne.",
    link: "#",
  },
  {
    id: 4,
    imageSrc:
      "https://img.freepik.com/photos-gratuite/gros-plan-docteur-stethoscope_23-2149191355.jpg?semt=ais_hybrid",
    title: "Santé et prévoyance 4",
    description:
      "Assurez-vous une tranquillité d'esprit avec nos solutions de santé et prévoyance.",
    link: "#",
  },
  {
    id: 5,
    imageSrc:
      "https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/Boost-Your-Car-Insurance.jpg",
    title: "Santé et prévoyance 5",
    description:
      "Assurez-vous une tranquillité d'esprit avec nos solutions de santé et prévoyance.",
    link: "#",
  },
  {
    id: 6,
    imageSrc:
      "https://www.iledefrance.fr/sites/default/files/styles/hub_exposition_banner_desktop/public/medias/istock-photobyphotoboy.jpg.webp?itok=_2VuK8a4",
    title: "Habitation 2",
    description:
      "Sécurisez votre domicile avec une assurance habitation fiable.",
    link: "#",
  },
  {
    id: 7,
    imageSrc:
      "https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/Boost-Your-Car-Insurance.jpg",
    title: "Automobile 10",
    description:
      "Protégez votre véhicule avec une assurance automobile adaptée à vos besoins.",
    link: "#",
  },
];

class CustomCarousel {
  constructor(targetElement, carouselData, isModal = false) {
    if (!targetElement) {
      console.error("Target element provided doesn't exist.");
      return;
    }

    const carousel = document.createElement("div");
    carousel.className =
      "flex gap-[20px] px-2 mx-auto overflow-hidden items-center";

    const carouselItems = carouselData.map((item) =>
      createSliderContent(
        item.id,
        item.imageSrc,
        item.title,
        item.description,
        item.link,
        isModal
      )
    );

    carousel.innerHTML = `
        <button class="carrouselLeft max-md:hidden" aria-label="Previous slide">
           <img src="./assets/cercle-arrow.svg" alt="Previous arrow" class="slider-arrow" style="transform: rotate(180deg);" />
        </button>        
        <div class="carrouselContainer flex gap-4 overflow-x-auto scroll-smooth px-6 py-6">
          ${carouselItems
            .map(
              (slide, i) =>
                `<div class='slide flex-1 min-w-[15rem] rounded-[16px] shadow-[0px_4px_25px_0px_#2D313F24]' role="group" aria-label='Slide ${
                  i + 1
                } of ${carouselItems.length}'>
              ${slide}
            </div>`
            )
            .join("")}
        </div>
        <button class="carrouselRight max-md:hidden" aria-label="Next slide">
            <img src="./assets/cercle-arrow.svg" alt="Next arrow" class="slider-arrow"/>
        </button>
    `;

    this.container = carousel.querySelector(".carrouselContainer");
    this.btnLeft = carousel.querySelector(".carrouselLeft");
    this.btnRight = carousel.querySelector(".carrouselRight");
    this.modals = carousel.querySelectorAll(".modals");
    this.isModal = isModal;
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

    if (this.isModal) {
      this.modals.forEach((modal) => {
        modal.addEventListener("click", () => {
          const modalId = modal.id.split("-")[1];
          const modalDiv = createModal(modalId);

          document.body.appendChild(modalDiv);
          modalDiv.classList.remove("hidden");
          document.body.style.overflow = "hidden";

          const closeButton = document.getElementById(`close-modal-${modalId}`);
          closeButton.addEventListener("click", () => {
            modalDiv.classList.add("hidden");
            document.body.style.overflow = "";
            modalDiv.remove();
          });

          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && modalDiv) {
              modalDiv.classList.add("hidden");
              document.body.style.overflow = "";
              modalDiv.remove();
            }
          });

          modalDiv.addEventListener("click", (event) => {
            if (event.target === modalDiv) {
              modalDiv.classList.add("hidden");
              document.body.style.overflow = "";
              modalDiv.remove();
            }
          });
        });
      });
    }

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

const createSliderContent = (
  id,
  imageSrc,
  title,
  description,
  link,
  isModal = false
) => {
  const content = `
      <img src="${imageSrc}" loading="lazy" alt="${title}" class="w-full h-[170px] rounded-t-[16px]" />
      <div class="flex flex-col gap-[8px] p-[20px]">
        <h3 class="font-bold text-[18px]">${title}</h3>
        <p class="text-sm">${description}</p>
        <div class="flex gap-2 items-center">
          <a href="${link}" class="text-blue-500">En savoir plus</a>
          <img src="./assets/rightArrowLight.svg" alt="Right arrow icon" loading="lazy" width={16} height={16} class="h-[16px] w-[16px] mt-1" />
        </div>
      </div>
    `;

  const result = isModal
    ? `<button id="modal-${id}" class="modals">${content}</button>`
    : `<div id="modal-${id}" class="modals">${content}</div>`;

  return result;
};

const createModal = (id) => {
  const modalDiv = document.createElement("div");
  modalDiv.id = `modal-${id}`;
  modalDiv.className =
    "modal fixed inset-0 bg-black/70 flex justify-center items-center hidden";
  let currentIndex = id - 1;

  const updateModalImage = () => {
    const imageUrl = carouselData[currentIndex].imageSrc;
    const title = carouselData[currentIndex].title;

    modalDiv.innerHTML = `
    <div class="modal-content flex flex-col bg-white rounded-lg p-6 pt-5">
      <button id="close-modal-${id}" class="text-gray-500 hover:text-gray-700 self-end" aria-label="Close modal">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#272F65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
          <path d="M18 6 6 18"/>
          <path d="m6 6 12 12"/>
        </svg>
      </button>

      <div class="flex gap-2 w-full items-center pb-2 ">
        <button id="prev-image" aria-label="Previous image" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#272F65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>

        <!-- Image -->
        <img src="${imageUrl}" alt="${title}" class="rounded-lg w-full h-full max-h-[70vh]">

        <button id="next-image" aria-label="Next image" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#272F65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  `;

    // Re-attach event listeners after updating the modal content
    const prevButton = modalDiv.querySelector(`#prev-image`);
    const nextButton = modalDiv.querySelector(`#next-image`);

    prevButton.addEventListener("click", () => {
      console.log("prev");
      currentIndex =
        (currentIndex - 1 + carouselData.length) % carouselData.length;
      updateModalImage();
    });

    nextButton.addEventListener("click", () => {
      console.log("next");
      currentIndex = (currentIndex + 1) % carouselData.length;
      updateModalImage();
    });
  };

  updateModalImage(); // Initially load the image

  return modalDiv;
};

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  new CustomCarousel(carousel, carouselData);
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel-modal");
  new CustomCarousel(carousel, carouselData, true);
});
