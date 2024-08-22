"use strict";

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////
// Carusel Hero

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const indicatorsContainer = document.querySelector(".indicators");

let currentIndex = 0;
let intervalId;

function startAutoSlide() {
  intervalId = setInterval(goToNextSlide, 4000);
}

function restartAutoSlide() {
  clearInterval(intervalId);
  startAutoSlide();
}

// Dodaj wskaźniki (kropki)
slides.forEach((slide, index) => {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  indicator.addEventListener("click", () => {
    goToSlide(index);
    restartAutoSlide();
  });
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll(".indicator");

function goToSlide(index) {
  slides[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  currentIndex = index;

  slides[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");
}

function goToNextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex);
}

function goToPrevSlide() {
  let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(prevIndex);
}

nextBtn.addEventListener("click", () => {
  goToNextSlide();
  restartAutoSlide();
});
prevBtn.addEventListener("click", () => {
  goToPrevSlide();
  restartAutoSlide();
});

// Automatyczne przewijanie co 4 sekundy
startAutoSlide();
// setInterval(goToNextSlide, 4000);

// Inicjalizacja pierwszego slajdu jako aktywnego
goToSlide(currentIndex);

////////////////////////////////////////////////////////
// Slide text hero discription

const heroDiscriptionEls = document.querySelectorAll(".hero-discription");
const mottoEl = document.querySelector(".motto");
const btnEls = document.querySelectorAll(".btn");

const slideTextHero = function () {
  heroDiscriptionEls.forEach((heroDiscriptionEl, i) =>
    setTimeout(() => {
      heroDiscriptionEl.classList.remove("hero-discription--hidden");
    }, 500 + i * 1000)
  );

  setTimeout(() => {
    mottoEl.classList.remove("hidden");
  }, 500 + 3 * 1000);

  btnEls.forEach((btnEl) =>
    setTimeout(() => {
      btnEl.classList.remove("hidden");
    }, 500 + 4 * 1000)
  );
};
slideTextHero();

////////////////////////////////////////////////////////
//Slide details section
const detailsContainerEl = document.querySelector(".details__container");
const slideTextImg = function () {
  setTimeout(() => {
    detailsContainerEl.classList.remove("hidden");
  }, 100);
};

slideTextImg();

/////////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const headerEl = document.querySelector(".header");
const obsNav = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      headerEl.style.opacity = 0;
      headerEl.style.pointerEvents = "none";
    } else if (entry.isIntersecting && headerEl.style.opacity == 0) {
      headerEl.style.opacity = 1;
      headerEl.style.pointerEvents = "auto";
    }
  },
  {
    root: null,
    threshold: 1,
    rootMargin: "80px",
  }
);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting === true && ent.boundingClientRect.y < 0) {
      headerEl.style.opacity = 0;
      headerEl.style.pointerEvents = "none";
      setTimeout(() => {
        if (document.body.classList.contains("sticky")) {
          document.body.classList.remove("sticky");
          headerEl.style.opacity = 1;
          headerEl.style.pointerEvents = "auto";
        }
      }, 300);
    } else if (ent.isIntersecting && headerEl.style.opacity == 0) {
      headerEl.style.opacity = 1;
      headerEl.style.pointerEvents = "auto";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obsNav.observe(headerEl);
obs.observe(sectionHeroEl);

/////////////////////////////////////////////////////////////
// Sticky navigation backup

// const sectionHeroEl = document.querySelector(".section-hero");
// const headerEl = document.querySelector(".header");
// const obsNav = new IntersectionObserver(function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) headerEl.style.opacity = 0;
//   else headerEl.style.opacity = 1;
// });

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }
//     // ent.boundingClientRect.y < -80)
//     else if (ent.isIntersecting === true && ent.boundingClientRect.y < 0) {
//       headerEl.style.opacity = 0;
//       setTimeout(() => {
//         document.body.classList.remove("sticky");
//       }, 300);
//     }
//     // else if (ent.boundingClientRect.y >= 0) {
//     //   headerEl.style.opacity = 1;
//     // }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obsNav.observe(headerEl);
// obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close mobile navigation
    // const headerEl = document.querySelector("header");
    // if (anchor.classList.contains("main-nav-link") && headerEl) {
    //   headerEl.classList.toggle("nav-open");
    // }
  });
});

///////////////////////////////////////////////////////////
// Make mobile navigation work

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

/////////////////////////////////////////////////////////
//  MOBILE CHANGES
const MobileEl = function () {
  const maxWidth = window.matchMedia("(max-width: 27em)").matches;
  const container = document.querySelector(".details__header");
  const htmlMobile = `  <h2 class="details__header">
  „Piękne spojrzenie,<br> nowe perspektywy”
</h2>`;

  if (maxWidth) {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", htmlMobile);
  }
};

MobileEl();

/////////////////////////////////////////////////////////
//  MOBILE CHANGES
const MobileDetailsEl = function () {
  const maxWidth = window.matchMedia("(max-width: 24em)").matches;
  const container = document.querySelector(".details__tab-container");
  const htmlMobile = `<div class="details__tab-container">
  <button
    class="details__tab details__tab--active"
    data-tab="1"
  >
    Chirurgia
  </button>
  <button class="details__tab" data-tab="2">
    Badania
  </button>
  <button class="details__tab" data-tab="3">
   Konsultacje
  </button>
</div>`;

  if (maxWidth) {
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", htmlMobile);
  }
};

MobileDetailsEl();

/////////////////////////////////////////////
//CHECK PAGE SIZE
// window.addEventListener("resize", function () {
//   MobileEl();
//   MobileDetailsEl();
// });

// Odśwież przy pierwszym ładowaniu
// window.addEventListener("load", function () {
//   MobileEl();
//   MobileDetailsEl();
// });

////////////////////////////////////////////////////////
// Tabbed component (details section)
const tabs = document.querySelectorAll(".details__tab");
const tabsContainer = document.querySelector(".details__tab-container");
const tabsContent = document.querySelectorAll(".details__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".details__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("details__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("details__content--active"));

  // Activate tab
  clicked.classList.add("details__tab--active");

  // Activate content area
  document
    .querySelector(`.details__content--${clicked.dataset.tab}`)
    .classList.add("details__content--active");
});
