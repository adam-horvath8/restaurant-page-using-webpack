// Imports
import loadPage from "./initial-page.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

console.log("fdsdffdss");

initialize();

function addNavEvents() {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
  contactBtn.addEventListener("click", loadContact);
}

function initialize() {
  loadPage();
  loadHome();
  addNavEvents();
}
