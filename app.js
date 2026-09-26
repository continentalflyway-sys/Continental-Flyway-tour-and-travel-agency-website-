const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  const closeMenu = () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", (event) => {
    if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const tripType = document.getElementById("tripType");
const returnField = document.getElementById("returnField");
const returnInput = document.getElementById("return");
const departInput = document.getElementById("depart");

if (departInput && returnInput) {
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  departInput.min = localDate;
  returnInput.min = localDate;
  departInput.addEventListener("change", () => {
    returnInput.min = departInput.value || localDate;
    if (returnInput.value && departInput.value && returnInput.value < departInput.value) {
      returnInput.value = departInput.value;
    }
  });
}

if (tripType && returnField && returnInput) {
  const updateReturnField = () => {
    const isRoundTrip = tripType.value === "Round trip";
    returnField.hidden = !isRoundTrip;
    returnInput.required = isRoundTrip;
    if (!isRoundTrip) returnInput.value = "";
  };
  tripType.addEventListener("change", updateReturnField);
  updateReturnField();
}

const swapButton = document.getElementById("swapCities");
if (swapButton) {
  swapButton.addEventListener("click", () => {
    const from = document.getElementById("from");
    const to = document.getElementById("to");
    if (from && to) {
      [from.value, to.value] = [to.value, from.value];
      from.focus();
    }
  });
}

const flightForm = document.getElementById("flightForm");
const formMessage = document.getElementById("formMessage");
if (flightForm && formMessage) {
  flightForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!flightForm.reportValidity()) return;
    const data = new FormData(flightForm);
    const summary = [
      `Trip: ${data.get("tripType")}`,
      `From: ${data.get("from")}`,
      `To: ${data.get("to")}`,
      `Departure: ${data.get("depart")}`,
      data.get("tripType") === "Round trip" ? `Return: ${data.get("return")}` : null,
      `Travellers: ${data.get("travellers")}`
    ].filter(Boolean).join(" | ");
    formMessage.textContent = `Your flight request is ready: ${summary}. This demo does not check live fares yet.`;
    formMessage.classList.add("notice-success");
  });
}

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");
if (contactForm && contactMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Continental Flyway enquiry — ${data.get("interest")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\nMessage:\n${data.get("message")}`
    );
    contactMessage.textContent = "Your email app should open with the enquiry prepared. Your email app should open with the enquiry prepared.";
    window.location.href = `mailto:continentalflyway@gmail.com?subject=${subject}&body=${body}`;
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
