const validate = (value, inputId, regex, errorMsg) => {
  const input = document.getElementById(inputId);
  const isValid = new RegExp(regex).test(value);
  const existingError = input.nextElementSibling;

  if (existingError && existingError.classList.contains("text-red-400")) {
    existingError.remove();
  }

  if (!isValid) {
    input.insertAdjacentHTML(
      "afterend",
      `<p class="text-red-400">${errorMsg}</p>`
    );
    input.classList.add("border-red-400");
  }
};

const submitContact = (e) => {
  const inputNom = document.getElementById("nom");
  const inputPrenom = document.getElementById("prenom");
  const inputEmail = document.getElementById("email");
  const inputTele = document.getElementById("tele");
  const inputMessage = document.getElementById("message");
  const inputConditions = document.getElementById("conditions");

  const optionMmeCivilite = document.getElementById("Mme");
  const optionMCivilite = document.getElementById("M");

  // input validation
  validate(inputNom.value, "nom", "^[A-Za-zÀ-ÿs]+$", "Name is required");
  validate(
    inputPrenom.value,
    "prenom",
    "^[A-Za-zÀ-ÿs]+$",
    "Prenom is required"
  );
  validate(inputEmail.value, "email", "^[A-Za-zÀ-ÿs]+$", "Enter a valid email");
  validate(
    inputTele.value,
    "tele",
    "^(\\+?\\d{1,3}[-\\s]?)?(\\(?\\d{3}\\)?[-\\s]?)?\\d{7,15}$",
    "Enter a valid phone number"
  );
  validate(
    inputMessage.value,
    "message",
    "^[A-Za-zÀ-ÿs]{10,}$",
    "Message is at least 10 charc"
  );

  // checked button validation
  if (!inputConditions.checked)
    inputConditions.nextElementSibling.classList.add("text-red-400");
  else inputConditions.nextElementSibling.classList.remove("text-red-400");

  // radio validation
  if (!optionMmeCivilite.checked && !optionMCivilite.checked) {
    optionMmeCivilite.nextElementSibling.classList.add("text-red-400");
    optionMCivilite.nextElementSibling.classList.add("text-red-400");
  } else {
    optionMmeCivilite.nextElementSibling.classList.remove("text-red-400");
    optionMCivilite.nextElementSibling.classList.remove("text-red-400");
  }
};

const btn = document.getElementById("submit-form");
btn.addEventListener("click", submitContact);
