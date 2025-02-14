class ContactBtns extends HTMLElement {
  connectedCallback() {
    // Get the attribute 'contact-data' as a JSON string
    const contactData = JSON.parse(this.getAttribute("contact-data") || "[]");

    // Build the HTML content dynamically based on the provided data
    const buttonsHtml = contactData
      .map((item, index) => {
        return `
          <a href="${
            item.href
          }" class="text-blue-800 group flex z-50 right-0 fixed items-center rounded-tl rounded-bl" style="top: calc(40% + ${
          index * 60
        }px)">
              <img src="${
                item.icon
              }" alt="button icon" width={32} height={32} class="bg-yellow-500 px-4 pr-3 group-hover:pl-4 py-3 rounded-tl-md rounded-bl-md" />
              <span class="group-hover:text-blue-800 group-hover:font-semibold hidden py-3 flex text-center group-hover:block text-transparent group-hover:text-black group-hover:translate-x-0 translate-x-full group-hover:bg-yellow-500 group-hover:pr-3 group-hover:pl-2  transition-all duration-900 ease-out flex items-center justify-center">
                ${item.text}
              </span>
            
          </a>
        `;
      })
      .join("");

    this.innerHTML = `<div class='text-blue-800'>${buttonsHtml}</div>`;
  }
}

customElements.define("contacts-btns", ContactBtns);
