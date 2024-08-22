"use strict";

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////
//Slide BTN
const BtnEl = document.querySelector(".btn-box");
const slideBtn = function () {
  setTimeout(() => {
    BtnEl.classList.remove("hidden");
  }, 100);
};

slideBtn();

///////////////////////////////////////////////////////////
// Make mobile navigation work
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll('a[href^="#"]');
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Close mobile navigation

// const allLinks = document.querySelectorAll("a.main-nav-link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
