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
    navBar.classList.remove("responsive__menu");
    burgerIcons.classList.add("hide");
    navBarLine1.classList.remove("hide");
    navBarLine2.classList.remove("hide");
  } else {
    console.log("vinduet er < 768px");
    header.classList.add("resp");
    navBar.classList.add("responsive__menu");
    burgerIcons.classList.remove("hide");
    navBarLine1.classList.add("hide");
    navBarLine2.classList.add("hide");
  }
}

// function openMenu() {}
