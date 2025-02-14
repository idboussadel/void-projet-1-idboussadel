const services = [
  {
    icon: "fa-laptop",
    image: "device-bg.webp",
    text: "Obtenez un devis en quelques clics",
  },
  {
    icon: "fa-file-alt",
    image: "contract-bg.webp",
    text: "Renouvelez votre contrat d'assurance automobile",
  },
  {
    icon: "fa-cogs",
    image: "garage-car-bg.webp",
    text: "Déclarez et suivre votre sinistre",
  },
  {
    icon: "fa-map-marker-alt",
    image: "localisation-bg.webp",
    text: "Trouvez une agence",
  },
];
class ServiceItem {
  constructor(targetElement, icon = "", text = "", image = "") {
    const imageClass =
      image === "device-bg.webp" || image === "localisation-bg.webp"
        ? "opacity-20"
        : "";
    const iconClass = icon ? `fas ${icon}` : "";

    const serviceItem = document.createElement("div");
    serviceItem.className =
      "service-item relative w-full cursor-pointer overflow-hidden px-[20px] py-[13px] bg-gradient-to-t from-yellow-500 group hover:outline hover:outline-2 hover:outline-blue-800 to-yellow-300 h-[180px] rounded-[16px] bg-yellow-500 flex items-center gap-4";

    serviceItem.innerHTML = `
                  <img src="./assets/services/${image}" alt="Service Icon" class="absolute h-[182px] w-[182px] ${imageClass} bottom-[35%] md:bottom-[30%] left-[60%] md:left-[55%]" />
                  
                  <div class="flex flex-col justify-between h-full w-full">
                    <span class="bg-white inline-flex items-center group-hover:bg-blue-800 justify-center rounded-full w-12 h-12 p-3 ">
                       <i  style="font-size: 24px;" class="${iconClass} text-blue-800 group-hover:text-white text-2xl" alt="Service Icon"></i>
                   </span>
                      
                      <div class="flex justify-between">
                          <h2 class="text-[18px] font-bold self-end text-blue-800">${text}</h2>
                          <img src="./assets/rightArrow.svg" alt="Right arrow icon" class="self-end h-[24px] w-[24px]" />
                      </div>
                  </div>
          `;

    targetElement.appendChild(serviceItem);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const servicesSection = document.getElementById("services-section");
  services.forEach((item) => {
    new ServiceItem(servicesSection, item.icon, item.text, item.image);
  });
});
