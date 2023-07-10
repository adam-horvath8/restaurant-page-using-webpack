import { contentDiv } from "./index.js";
import { body } from "./index.js";
import "./menu-style.css";
import logoImg from "./images/logo-adare-restaurant.png";
import backgroundImg from "./images/background-adare-restaurant.jpg";
import pizzaImg from "./images/pizza.jpg";
import pirohyImg from "./images/pirohy.jpg";
import spagettiImg from "./images/spagetti.jpg";
import cakeImg from "./images/cake.jpg";

export function createMenu() {
  contentDiv.classList.add("content-div");
  body.style.backgroundImage = `url(${backgroundImg})`;

  // Logo
  const logo = document.createElement("img");
  logo.src = logoImg;
  logo.classList.add("logo-adore");
  body.appendChild(logo);

  // Nav
  const nav = document.createElement("nav");

  const navList = document.createElement("ul");
  navList.classList.add("nav-list");

  const homeTab = document.createElement("li");
  homeTab.innerText = "Home";

  const menuTab = document.createElement("li");
  menuTab.innerText = "Menu";

  const contactTab = document.createElement("li");
  contactTab.innerText = "Contact";

  nav.appendChild(navList);
  navList.append(homeTab, menuTab, contactTab);
  contentDiv.appendChild(nav);
  // Hero section
  const heroDiv = document.createElement("div");
  heroDiv.classList.add("hero-div");

  const heading = document.createElement("h1");
  heading.innerText = "Our Menu";

  const par = document.createElement("p");
  par.innerText =
    "Here you can chose dishes from our wide offer. Our chefs make best dishes from Italian cuisine but also traditional Slovak meals. Bon Appetit!! ";

  contentDiv.appendChild(heroDiv);
  heroDiv.append(heading, par);

  // Meals Div
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");

  const pizzaDiv = document.createElement("div");
  pizzaDiv.style.backgroundImage = `url(${pizzaImg})`;
  pizzaDiv.classList.add("cell");

  const pizzaHeading = document.createElement("div");
  pizzaHeading.innerText = "Traditional pizza from Napoli";
  pizzaHeading.classList.add("menu-heading");

  const pizzaP = document.createElement("p");
  pizzaP.classList.add("cell");
  pizzaP.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const pirohyDiv = document.createElement("div");
  pirohyDiv.style.backgroundImage = `url(${pirohyImg})`;
  pirohyDiv.classList.add("cell");

  const pirohyHeading = document.createElement("div");
  pirohyHeading.innerText = "Delicious Pirohy";
  pirohyHeading.classList.add("menu-heading");

  const pirohyP = document.createElement("p");
  pirohyP.classList.add("cell");
  pirohyP.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const spagettiDiv = document.createElement("div");
  spagettiDiv.style.backgroundImage = `url(${spagettiImg})`;
  spagettiDiv.classList.add("cell");

  const spagettiHeading = document.createElement("div");
  spagettiHeading.innerText = "Spagetti";
  spagettiHeading.classList.add("menu-heading");

  const spagettiP = document.createElement("p");
  spagettiP.classList.add("cell");
  spagettiP.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const cakeDiv = document.createElement("div");
  cakeDiv.style.backgroundImage = `url(${cakeImg})`;
  cakeDiv.classList.add("cell");

  const cakeHeading = document.createElement("div");
  cakeHeading.innerText = "Cake with fresh forest fruits";
  cakeHeading.classList.add("menu-heading");

  const cakeP = document.createElement("p");
  cakeP.classList.add("cell");
  cakeP.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  contentDiv.appendChild(menuDiv);
  menuDiv.append(
    pizzaDiv,
    pizzaHeading,
    pirohyDiv,
    pirohyHeading,
    spagettiDiv,
    spagettiHeading,
    cakeDiv,
    cakeHeading
  );
  pizzaHeading.appendChild(pizzaP);
  pirohyHeading.appendChild(pirohyP);
  spagettiHeading.appendChild(spagettiP);
  cakeHeading.appendChild(cakeP);
}
