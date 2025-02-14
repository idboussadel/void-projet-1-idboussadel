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
    return false;
  }
  input.classList.remove("border-red-400");
  return true;
};

const submitContact = (e) => {
  e.preventDefault();
  const inputNom = document.getElementById("nom");
  const inputPrenom = document.getElementById("prenom");
  const inputEmail = document.getElementById("email");
  const inputTele = document.getElementById("tele");
  const inputMessage = document.getElementById("message");
  const inputConditions = document.getElementById("conditions");
  const form = document.getElementById("contact-form");

  let isValid = true;

  const optionMmeCivilite = document.getElementById("Mme");
  const optionMCivilite = document.getElementById("M");

  // input validation
  isValid &= validate(
    inputNom.value,
    "nom",
    "^[A-Za-zÀ-ÿs]+$",
    "Name is required"
  );

  isValid &= validate(
    inputPrenom.value,
    "prenom",
    "^[A-Za-zÀ-ÿs]+$",
    "Prenom is required"
  );

  isValid &= validate(
    inputEmail.value,
    "email",
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    "Enter a valid email"
  );

  isValid &= validate(
    inputTele.value,
    "tele",
    "^(\\+?\\d{1,3}[-\\s]?)?(\\(?\\d{3}\\)?[-\\s]?)?\\d{7,15}$",
    "Enter a valid phone number"
  );

  isValid &= validate(
    inputMessage.value,
    "message",
    "^[A-Za-zÀ-ÿs]{10,}$",
    "Message is at least 10 charc"
  );

  // checked button validation
  if (!inputConditions.checked) {
    inputConditions.nextElementSibling.classList.add("text-red-400");
    isValid = false;
  } else {
    inputConditions.nextElementSibling.classList.remove("text-red-400");
  }

  // radio validation
  if (!optionMmeCivilite.checked && !optionMCivilite.checked) {
    optionMmeCivilite.nextElementSibling.classList.add("text-red-400");
    optionMCivilite.nextElementSibling.classList.add("text-red-400");
    isValid = false;
  } else {
    optionMmeCivilite.nextElementSibling.classList.remove("text-red-400");
    optionMCivilite.nextElementSibling.classList.remove("text-red-400");
  }

  console.log(isValid);
  if (isValid) {
    const newToast = new Toast(
      "Form details have been sent successfully.",
      "success"
    );
    newToast.show(document.body);
    form.reset();
  } else {
    const newToast = new Toast("Failed to send form details.", "error");
    newToast.show(document.body);
  }
};

const btn = document.getElementById("submit-form");
btn.addEventListener("click", submitContact);
