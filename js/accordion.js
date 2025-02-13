const accordionsData = [
  {
    question: "Qu'est-ce qu'une garantie Responsabilité Civile ?",
    answer:
      "La garantie responsabilité civile Auto prend en charge l'indemnisation des dommages subis par des tiers lorsque votre véhicule est impliqué. Ces dommages peuvent être la conséquence d'un accident, incendie, explosion ou dus à la chute d'accessoires, objets ou substances transportés par le véhicule.",
  },
  {
    question: "Qu'est-ce que la franchise auto ?",
    answer:
      "La franchise appliquée sur l’assurance de votre véhicule est la somme restant à votre charge en cas de sinistre. Elle est soit relative soit absolue, selon votre contrat.",
  },
  {
    question: "Comment contacter le service clientèle en cas de sinistre ?",
    answer:
      "Contactez le n° 2526. Il s'agit d'un seul numéro pour déclarer votre sinistre, choisir la procèdure d'indemnisation et suivre votre dossier étape par étape.",
  },
  {
    question: "Quand peut-on changer son assurance Auto ?",
    answer:
      "Vous pouvez changer d’assurance auto à la date d'échéance de votre contrat en respectant la période de préavis. Si vous souhaitez avoir une idée sur les offres de RMA, réalisez votre devis gratuit en ligne et en quelques minutes.",
  },
];

const accordionList = document.getElementById("accordion-list");

accordionsData.forEach((accordion) => {
  const accordionItem = document.createElement("li");
  accordionItem.innerHTML = `
          <div
            class="accordion cursor-pointer border items-center pl-6 pr-5 py-3 rounded-md bg-white"
          >
            <div class="flex justify-between">
              <h3 class="font-bold">
                ${accordion.question}
              </h3>
              <img
                src="./assets/cercle-plus.svg"
                alt="x/twitter icon"
                class="accord-display w-[30px] h-[30px]"
              >
              <img
                src="./assets/cercle-minus.svg"
                alt="x/twitter icon"
                class="accord-collapse w-[30px] h-[30px] hidden"
              >
            </div>

            <p class="hidden pt-3 transition-all duration-500 ease-in-out">
            ${accordion.answer}
            </p>
          </div>
        `;

  accordionList.appendChild(accordionItem);
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const displayBtn = accordion.querySelector(".accord-display");
  const collapseBtn = accordion.querySelector(".accord-collapse");
  const content = accordion.querySelector("p");

  accordion.addEventListener("click", (event) => {
    accordion.classList.toggle("bg-blue-100");
    accordion.classList.toggle("border-blue-800");

    displayBtn.classList.toggle("hidden");
    content.classList.toggle("hidden");
    collapseBtn.classList.toggle("hidden");
  });
});
