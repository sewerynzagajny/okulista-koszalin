"use strict";

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////
// Slide text discription and photo

const listAboutMeEls = document.querySelectorAll(".list-about-me");
const photoAboutMeEls = document.querySelectorAll(".photo-about-me");
const flexTextBoxIconEls = document.querySelectorAll(".flex-text-box-icon");

const slideText = function () {
  flexTextBoxIconEls.forEach((flexTextBoxIconEl) =>
    setTimeout(() => {
      flexTextBoxIconEl.classList.remove("hidden--left-slide");
      flexTextBoxIconEl.classList.remove("hidden--right-slide");
    }, 500)
  );

  listAboutMeEls.forEach((listAboutMeEl) =>
    setTimeout(() => {
      listAboutMeEl.classList.remove("hidden");
    }, 1000)
  );

  photoAboutMeEls.forEach((photoAboutMeEl) =>
    setTimeout(() => {
      photoAboutMeEl.classList.remove("hidden");
    }, 1000)
  );
};
slideText();

//////////////////////////////////////////////////////////
// Counter
const counterElement = document.querySelector(".counter");

let count = 0;
const maxCount = 2000;
const timeAnimation = 3000;

// Obliczenie interwału między każdym krokiem odliczania
let step = (maxCount / timeAnimation) * 10;

// Funkcja odliczająca
const startCounter = function () {
  // Ustawienie interwału odliczania
  const interval = setInterval(function () {
    // Zwiększenie wartości licznika o krok
    count += step;
    // Ograniczenie wartości licznika do maksymalnej wartości
    if (count > maxCount) {
      count = maxCount;
    }
    // Wyświetlenie aktualnej wartości licznika w elemencie HTML
    counterElement.innerHTML = Math.round(count);

    // Sprawdzenie, czy osiągnięto maksymalną wartość licznika
    if (count === maxCount) {
      // Zatrzymanie odliczania po osiągnięciu maksymalnej wartości
      clearInterval(interval);
    }
  }, 10); // Interwał 10 milisekund
};
const aboutMeTextBoxEl = document.querySelector(".obsv");
const obvCounter = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setTimeout(() => {
        startCounter();
      }, 600);
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obvCounter.observe(aboutMeTextBoxEl);

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
