// Import
import logoImg from "./images/logo-adare-restaurant.png";
import backgroundImg from "./images/background-adare-restaurant.jpg";
import "./initial-page-style.css";

function addLogo(logoImg) {
  const logo = document.createElement("img");
  logo.classList.add("logo-adare");
  logo.src = logoImg;

  return logo;
}

function createBtn(id, text) {
  const btn = document.createElement("button");
  btn.setAttribute("id", id);
  btn.classList.add("tab");

  const span = document.createElement("span");
  span.textContent = text;

  btn.appendChild(span);
  btn.classList.add("nav-btn");

  return btn;
}

function createNav(id) {
  const nav = document.createElement("nav");
  nav.setAttribute("id", id);

  const homeBtn = createBtn("home", "Home");
  const menuBtn = createBtn("menu", "Menu");
  const contactBtn = createBtn("contact", "Contact");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function createHero(id) {
  const hero = document.createElement("div");
  hero.setAttribute("id", id);

  return hero;
}

function loadPage() {
  const body = document.querySelector("body");
  body.style.backgroundImage = `url(${backgroundImg})`;


  const contentDiv = document.getElementById("content");
  const logo = addLogo(logoImg);
  body.appendChild(logo);

  const nav = createNav("navigation");
  contentDiv.appendChild(nav);

  const heroContent = createHero("hero-div");
  contentDiv.appendChild(heroContent);
}

export default loadPage;
