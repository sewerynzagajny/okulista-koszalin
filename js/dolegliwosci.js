"use strict";

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////
// Slide text  and photo

const symptomsHEl = document.querySelector(".symptoms-header");
const symptomsGalleryEl = document.querySelector(".symptoms-gallery");

const slideText = function () {
  setTimeout(() => {
    symptomsHEl.classList.remove("hidden--left-slide");
  }, 500);
  setTimeout(() => {
    symptomsGalleryEl.classList.remove("hidden");
  }, 1000);
};
slideText();

///////////////////////////////////////////////////////////
// OPEN GALLERY

const sectionGalleryItemEl = document.querySelectorAll(".gallery-item img");
const PopupEl = document.querySelector(".popup");
const PopupCloseEl = document.querySelector(".popup-close");
const PopupImgEl = document.querySelector(".popup-img");
const arrowLeftEl = document.querySelector(".popup-arrow--left");
const arrowRightEl = document.querySelector(".popup-arrow--right");
const footerEl = document.querySelectorAll(".footer a");
const btnBoxEl = document.querySelectorAll(".btn-box a");
const navEl = document.querySelectorAll(".main-nav-list a");
const PopupCaptionEl = document.querySelector(".popup-caption");

const updateCaption = function () {
  const captionText = sectionGalleryItemEl[currentImgIndex]
    .closest("div")
    .querySelector(".symptoms-title").textContent;
  PopupCaptionEl.textContent = captionText;
};

let currentImgIndex;

const showNextImg = function () {
  if (currentImgIndex === sectionGalleryItemEl.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  PopupImgEl.src = sectionGalleryItemEl[currentImgIndex].src;
  updateCaption();
};

const showPreviousImg = function () {
  if (currentImgIndex === 0) {
    currentImgIndex = sectionGalleryItemEl.length - 1;
  } else {
    currentImgIndex--;
  }
  PopupImgEl.src = sectionGalleryItemEl[currentImgIndex].src;
  updateCaption();
};

const closePopup = function () {
  PopupEl.classList.add("popup-fade-out");
  const tabIndexOn = function (element) {
    element.setAttribute("tabindex", 0);
  };
  setTimeout(function () {
    PopupEl.classList.add("hidden-popup");
    PopupEl.classList.remove("popup-fade-out");
    navEl.forEach(tabIndexOn);
    sectionGalleryItemEl.forEach(tabIndexOn);
    footerEl.forEach(tabIndexOn);
    btnBoxEl.forEach(tabIndexOn);
  }, 400);
};

sectionGalleryItemEl.forEach(function (sectionGalleryItem, index) {
  const tabIndexOff = function (element) {
    element.setAttribute("tabindex", -1);
  };
  const showPopup = function (event) {
    PopupEl.classList.remove("hidden-popup");
    PopupImgEl.src = event.target.src;
    const captionText = event.target
      .closest("div")
      .querySelector(".symptoms-title").textContent;
    PopupCaptionEl.textContent = captionText;
    currentImgIndex = index;
    navEl.forEach(tabIndexOff);
    sectionGalleryItemEl.forEach(tabIndexOff);
    footerEl.forEach(tabIndexOff);
    btnBoxEl.forEach(tabIndexOff);
  };

  sectionGalleryItem.addEventListener("click", showPopup);

  sectionGalleryItem.addEventListener("keydown", function (event) {
    if (event.code === "Enter" || event.keyCode === 13) {
      showPopup(event);
    }
  });
});

PopupCloseEl.addEventListener("click", closePopup);

arrowRightEl.addEventListener("click", showNextImg);

arrowLeftEl.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", function (event) {
  if (!PopupEl.classList.contains("hidden")) {
    if (event.code === "ArrowRight" || event.keyCode === 39) {
      showNextImg();
    }
    if (event.code === "ArrowLeft" || event.keyCode === 37) {
      showPreviousImg();
    }

    if (event.code === "Escape" || event.keyCode === 27) {
      closePopup();
    }
  }
});
PopupEl.addEventListener("click", function (event) {
  if (event.target === PopupEl) {
    closePopup();
  }
});

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
