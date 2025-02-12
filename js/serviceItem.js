class ServiceItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const icon = this.getAttribute("icon") || "";
    const text = this.getAttribute("text") || "";
    const image = this.getAttribute("image") || "";
    const imageClass =
      image === "device-bg.png" || image === "localisation-bg.png"
        ? "opacity-20"
        : "";
    const iconClass = icon ? `fas ${icon}` : "";

    this.innerHTML = `
              <div class="service-item relative cursor-pointer overflow-hidden px-[20px] py-[13px] bg-gradient-to-t from-yellow-500 group hover:outline hover:outline-2 hover:outline-blue-800 to-yellow-300 h-[180px] w-auto rounded-[16px] bg-yellow-500 flex items-center gap-4">
                  <img src="./assets/services/${image}" alt="Service Icon" class="absolute h-[182px] w-[182px] ${imageClass} bottom-[35%] md:bottom-[30%] left-[60%] md:left-[55%]" />
                  
                  <div class="flex flex-col justify-between h-full w-full">
                    <spa class="bg-white inline-flex items-center group-hover:bg-blue-800 justify-center rounded-full w-12 h-12 p-3 ">
                       <i class="${iconClass} text-blue-800 group-hover:text-white text-2xl" alt="Service Icon"></i>
                   </spa>
                      
          
                      <div class="flex justify-between">
                          <p class="text-[18px] font-bold self-end text-blue-800">${text}</p>
                          <img src="./assets/rightArrow.svg" alt="Right arrow icon" class="self-end h-[24px] w-[24px]" />
                      </div>
                  </div>
              </div>
          `;
  }
}

customElements.define("service-item", ServiceItem);
