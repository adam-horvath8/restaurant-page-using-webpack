
import { createHeroSection } from "./home.js";
import pizzaImg from "./images/pizza.jpg";
import pirohyImg from "./images/pirohy.jpg";
import spagettiImg from "./images/spagetti.jpg";
import cakeImg from "./images/cake.jpg";
import "./menu-style.css";

function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const menuBtn = document.getElementById(id);
  menuBtn.classList.add("active");
}

function createMeals(mealImg, mealTitle, mealDescription) {
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("meal-div");

  const mealImgDiv = document.createElement("div");
  mealImgDiv.classList.add("meal-img");
  mealImgDiv.style.backgroundImage = `url(${mealImg})`;
  mealDiv.appendChild(mealImgDiv);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("description-div");
  mealDiv.appendChild(descriptionDiv);

  const descriptionHeading = document.createElement("h2");
  descriptionHeading.classList.add("description-heading");
  descriptionHeading.textContent = mealTitle;
  descriptionDiv.appendChild(descriptionHeading);

  const descriptionPar = document.createElement("p");
  descriptionPar.classList.add("description-par");
  descriptionPar.textContent = mealDescription;
  descriptionDiv.appendChild(descriptionPar);

  return mealDiv;
}

function loadMenu() {
  const content = document.getElementById("hero-div");
  content.textContent = "";

  let menuHeroTitle = "Our Menu";

  let menuHeroPar =
    "Here you can chose dishes from our wide offer. Our chefs make best dishes from Italian cuisine but also traditional Slovak meals. Bon Appetit!! ";

  const menuHeroSection = createHeroSection(menuHeroTitle, menuHeroPar);
  content.appendChild(menuHeroSection);

  const meals = [
    createMeals(
      pizzaImg,
      "Traditional pizza from Napoli",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    createMeals(
      pirohyImg,
      "Delicious Pirohy",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    createMeals(
      spagettiImg,
      "Spagetti tuti muti",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    createMeals(
      cakeImg,
      "Cake with fresh forest fruits",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
  ];

  meals.forEach((meal) => {
    content.appendChild(meal);
  });

  setBtnActive("menu");
}

export default loadMenu;
