"use strict";

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////
// Slide text  and photo

const priceHEl = document.querySelector(".price__header__box");
const priceBoxEl = document.querySelector(".price-box");

const slideText = function () {
  setTimeout(() => {
    priceHEl.classList.remove("hidden--left-slide");
  }, 500);
  setTimeout(() => {
    priceBoxEl.classList.remove("hidden");
  }, 1000);
};
slideText();

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
