
import { createHeroSection } from "./home.js";

function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const contactBtn = document.getElementById(id);
  contactBtn.classList.add("active");
}

function loadContact() {
  const content = document.getElementById("hero-div");

  content.textContent = '';

  let contactHeading = "Do you have any Questions?";

  let contactPar =
    "You can contact use and make your reservation at the telephone number: +420 123 456 856. You can also write an email at bestrestaurant@gmail.com";

  const contactHeroSection = createHeroSection(contactHeading, contactPar);

  content.appendChild(contactHeroSection);

  setBtnActive("contact");
}

export default loadContact;
