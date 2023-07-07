// Imports
import { contentDiv } from "./index.js";
import { body } from "./index.js";
import "./home-style.css";
import logoImg from "./images/logo-adare-restaurant.png";
import backgroundImg from "./images/background-adare-restaurant.jpg";
import dezertImg from "./images/dsc_3013.jpg";
import  pastaImg  from "./images/pasta.jpg";
import  steakImg  from "./images/steak.jpg";
// Code
export function testing() {
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

  contentDiv.appendChild(nav);
  nav.appendChild(navList);
  navList.append(homeTab, menuTab, contactTab);

  // Hero section
  const heroDiv = document.createElement("div");
  heroDiv.classList.add("hero-div");

  const heading = document.createElement("h1");
  heading.innerText = "let's meat";

  const par = document.createElement("p");
  par.innerText =
    "We love sharing good food with great people. We bring over 30 years industry experience and passion to Adare. With a dishes that are carefully designed to bring you a truly satisfying Irish food experience that you are sure to remember.";

  contentDiv.appendChild(heroDiv);
  heroDiv.append(heading, par);

  // Meals Div
  const pastaDiv = document.createElement("div");
  pastaDiv.style.backgroundImage = `url(${pastaImg})`;
  pastaDiv.classList.add("cell");

  const steakDiv = document.createElement("div");
  steakDiv.style.backgroundImage = `url(${steakImg})`;
  steakDiv.classList.add("cell");

  const dezertDiv = document.createElement("div");
  dezertDiv.style.backgroundImage = `url(${dezertImg})`;
  dezertDiv.classList.add("cell");

  const mealsDiv = document.createElement("div");
  mealsDiv.classList.add("meals-div");

  mealsDiv.append(pastaDiv, steakDiv, dezertDiv);
  contentDiv.appendChild(mealsDiv);
}
