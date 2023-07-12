
import "./home-style.css";
import meal3Img from "./images/dezert.jpg";
import meal1Img from "./images/pasta.jpg";
import meal2Img from "./images/steak.jpg";

export function createHeroSection(headingText, parText) {
  const heroSection = document.createElement("div");
  heroSection.classList.add("hero-section");

  const heroHeading = document.createElement("h1");
  heroHeading.classList.add("home-heading");
  heroHeading.textContent = headingText;

  heroSection.appendChild(heroHeading);

  const heroPar = document.createElement("p");
  heroPar.classList.add("home-par");
  heroPar.textContent = parText;

  heroSection.appendChild(heroPar);

  return heroSection;
}

function createImgSection(meal1, meal2, meal3) {
  const meal1Div = document.createElement("div");
  meal1Div.style.backgroundImage = `url(${meal1})`;
  meal1Div.classList.add("cell");

  const meal2Div = document.createElement("div");
  meal2Div.style.backgroundImage = `url(${meal2})`;
  meal2Div.classList.add("cell");

  const meal3Div = document.createElement("div");
  meal3Div.style.backgroundImage = `url(${meal3})`;
  meal3Div.classList.add("cell");

  const mealsDiv = document.createElement("div");
  mealsDiv.classList.add("meals-div");

  mealsDiv.append(meal1Div, meal2Div, meal3Div);

  return mealsDiv;
}

function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

function loadHome() {
  const content = document.getElementById("hero-div");
  content.classList.add("home-hero-div");

  content.textContent = "";
 

  let parText =
    "We love sharing good food with great people. We bring over 30 years industry experience and passion to Adare. With a dishes that are carefully designed to bring you a truly satisfying Irish food experience that you are sure to remember.";

  let headingText = "let's meal";

  const heroHomeSection = createHeroSection(headingText, parText);

  const mealsSection = createImgSection(meal1Img, meal2Img, meal3Img);

  setBtnActive("home");

  content.appendChild(heroHomeSection);
  content.appendChild(mealsSection);
}

export default loadHome;
