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
    menuOpen.removeEventListener("click", openRespMenu);
    header.classList.remove("resp");
    navBar.classList.add("shown");
    navBar.classList.remove("responsive__menu");
    burgerIcons.classList.add("hide");
    navBarLine1.classList.remove("hide");
    navBarLine2.classList.remove("hide");
  } else {
    console.log("vinduet er < 768px");
    header.classList.add("resp");
    navBar.classList.remove("shown");
    navBar.classList.add("responsive__menu");
    burgerIcons.classList.remove("hide2");
    navBarLine1.classList.add("hide");
    navBarLine2.classList.add("hide");
    menuOpen.addEventListener("click", openRespMenu);
  }
}

function openRespMenu() {
  console.log("Open Menu");

  navBar.classList.add("show");
  menuClose.classList.remove("hide2");
  menuClose.classList.add("show");
  menuOpen.classList.add("hide2");
  menuClose.addEventListener("click", closeRespMenu);
}

function closeRespMenu() {
  console.log("Close Menu");

  navBar.classList.remove("show");
  menuClose.classList.remove("show");
  menuClose.classList.add("hide2");
  menuOpen.classList.remove("hide2");
  menuOpen.classList.add("show");
  menuOpen.addEventListener("click", openRespMenu);
}

// function openMenu() {}
