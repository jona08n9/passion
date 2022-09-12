// RESPONSIVE MENU -- START

const menuOpen = document.querySelector(".menu_icon");
const menuClose = document.querySelector(".close_icon");
const header = document.querySelector("header");
const navBar = document.querySelector("nav");
const navBarLine1 = document.querySelector(".nav--line1");
const navBarLine2 = document.querySelector(".nav--line2");
const burgerIcons = document.querySelector(".burger");

// menuOpen.addEventListener(click, "openMenu");
window.addEventListener("load", addResp);
window.addEventListener("resize", addResp);

function addResp() {
  if (window.matchMedia("(min-width:768px)").matches) {
    console.log("vinduet er > 768px");
    header.classList.remove("resp");
    navBar.classList.remove("hard-hide");
    navBar.classList.remove("responsive__menu");
    burgerIcons.classList.add("hard-hide");
    navBarLine1.classList.remove("hard-hide");
    navBarLine2.classList.remove("hard-hide");
  } else {
    console.log("vinduet er < 768px");
    header.classList.add("resp");
    navBar.classList.add("hard-hide");
    navBar.classList.add("responsive__menu");
    burgerIcons.classList.remove("hard-hide");
    navBarLine1.classList.add("hard-hide");
    navBarLine2.classList.add("hard-hide");
    menuOpen.addEventListener("click", openRespMenu);
  }
}

function openRespMenu() {
  console.log("Open Menu");

  navBar.classList.remove("hard-hide");
  navBar.classList.remove("hide");
  menuClose.classList.remove("hard-hide");
  menuOpen.classList.add("hard-hide");
  menuClose.addEventListener("click", closeRespMenu);
}

function closeRespMenu() {
  console.log("Close Menu");

  navBar.classList.add("hide");
  menuClose.classList.add("hard-hide");
  menuOpen.classList.remove("hard-hide");
  menuOpen.addEventListener("click", openRespMenu);
}

// RESPONSIVE MENU -- END
