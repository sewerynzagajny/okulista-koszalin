"use strict";

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////
// Slide google map photo

const googleMapEl = document.querySelector(".google-map");

const slideTextHero = function () {
  setTimeout(() => {
    googleMapEl.classList.remove("hidden");
  }, 500);
};
slideTextHero();

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
