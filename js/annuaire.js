const annuaireData = [
  {
    name: "John Doe",
    adresse: "123 Main St, Paris, France",
    phone: "+33 1 23 45 67 89",
    link: "#",
  },
  {
    name: "Jane Smith",
    adresse: "456 Oak Rd, Lyon, France",
    phone: "+33 4 56 78 90 12",
    link: "#",
  },
  {
    name: "Marie Dubois",
    adresse: "789 Pine Ave, Marseille, France",
    phone: "+33 6 98 76 54 32",
    link: "#",
  },
  {
    name: "Pierre Lefevre",
    adresse: "101 Maple St, Toulouse, France",
    phone: "+33 5 12 34 56 78",
    link: "#",
  },
  {
    name: "Sophie Martin",
    adresse: "202 Birch Rd, Bordeaux, France",
    phone: "+33 7 65 43 21 09",
    link: "#",
  },
  {
    name: "Michel Fournier",
    adresse: "303 Cedar Dr, Nice, France",
    phone: "+33 4 23 45 67 89",
    link: "#",
  },
  {
    name: "Lucie Moreau",
    adresse: "404 Elm St, Lille, France",
    phone: "+33 1 87 65 43 21",
    link: "#",
  },
  {
    name: "David Simon",
    adresse: "505 Redwood Ave, Nantes, France",
    phone: "+33 3 65 87 90 12",
    link: "#",
  },
  {
    name: "Claire Bernard",
    adresse: "606 Willow St, Rennes, France",
    phone: "+33 2 89 54 32 10",
    link: "#",
  },
  {
    name: "François Lefevre",
    adresse: "707 Poplar Rd, Strasbourg, France",
    phone: "+33 9 56 78 21 03",
    link: "#",
  },
  {
    name: "François Lefevre",
    adresse: "707 Poplar Rd, Strasbourg, France",
    phone: "+33 9 56 78 21 03",
    link: "#",
  },
  {
    name: "François Lefevre",
    adresse: "707 Poplar Rd, Strasbourg, France",
    phone: "+33 9 56 78 21 03",
    link: "#",
  },
  {
    name: "François Lefevre",
    adresse: "707 Poplar Rd, Strasbourg, France",
    phone: "+33 9 56 78 21 03",
    link: "#",
  },
  {
    name: "François Lefevre",
    adresse: "707 Poplar Rd, Strasbourg, France",
    phone: "+33 9 56 78 21 03",
    link: "#",
  },
];
const annuaire = document.getElementById("annuaire");
const loadMoreBtn = document.getElementById("load-more-btn");
const nbrItems = 3;
let annuaireIndex = 6;

const loadMore = (item) => {
  const annuaireDiv = document.createElement("div");
  annuaireDiv.className =
    "bg-white px-4 py-3 flex flex-col gap-2 rounded-md border";
  annuaireDiv.innerHTML = `
    <h3 class="font-bold">${item.name}</h3>
    <p>${item.adresse}</p>
    <p>${item.phone}</p>
    <a href=${item.link}>Voir itinéraire</a>
  `;

  annuaire.appendChild(annuaireDiv);
};

annuaireData
  .filter((_, index) => index >= 0 && index < nbrItems * 2)
  .forEach((item) => loadMore(item));

loadMoreBtn.addEventListener("click", () => {
  annuaireIndex += nbrItems;
  let i = 0;
  console.log(
    annuaireData.filter(
      (_, index) => index >= annuaireIndex && index < annuaireIndex + nbrItems
    )
  );

  annuaireData
    .filter(
      (_, index) => index >= annuaireIndex && index < annuaireIndex + nbrItems
    )
    .forEach((item) => {
      loadMore(item);
      i++;
    });

  if (!annuaireData[annuaireIndex] - 3 + i) loadMoreBtn.className = "hidden";
});
