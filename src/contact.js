// Imports
import { contentDiv } from "./index.js";
import { body } from "./index.js";
import "./contact-style.css";
import logoImg from "./images/logo-adare-restaurant.png";
import backgroundImg from "./images/background-adare-restaurant.jpg";

// Code
export function createContact() {
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
  heading.innerText = "Do you have any Questions?";

  const par = document.createElement("p");
  par.innerText =
    "You can contact use and make your reservation at the telephone number: +420 123 456 856. You can also write an email at bestrestaurant@gmail.com" ;

  contentDiv.appendChild(heroDiv);
  heroDiv.append(heading, par);

}