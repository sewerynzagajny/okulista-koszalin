"use strict";
////////////////////////////////////////////////////////////////
// COOKIES

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".cookie-banner");
  const showBannerWithDelay = function () {
    banner.classList.remove("hidden-banner");
  };

  // Funkcja do ukrycia banera
  function hideCookieBanner() {
    banner.classList.add("hidden-banner");
  }

  // Funkcja do obsługi kliknięcia "Zaakceptuj"
  function acceptCookies() {
    hideCookieBanner();
    // Zapisz informację, że użytkownik zaakceptował pliki cookie
    localStorage.setItem("cookiesAccepted", "true");
  }

  // Funkcja do obsługi kliknięcia krzyżyka
  function closeBanner() {
    hideCookieBanner();
    // Zapisz informację o zamknięciu banera
    sessionStorage.setItem("bannerClosed", "true");
  }

  // Sprawdzenie, czy użytkownik już zaakceptował pliki cookie lub zamknął banner (możesz dostosować to w zależności od potrzeb)
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");
  const bannerClosed = sessionStorage.getItem("bannerClosed");

  // Jeśli pliki cookie nie zostały jeszcze zaakceptowane i banner nie został zamknięty, pokaż baner
  if (!cookiesAccepted && !bannerClosed) {
    banner.classList.remove("hidden-banner");
    setTimeout(showBannerWithDelay, 300);
  }

  // Obsługa kliknięcia przycisku "Zaakceptuj"
  const acceptCookiesButton = document.querySelector(".accept-cookies");
  acceptCookiesButton.addEventListener("click", acceptCookies);

  // Obsługa kliknięcia krzyżyka
  const closeBannerButton = document.querySelector(".close-banner");
  closeBannerButton.addEventListener("click", closeBanner);
});

// COOKIE BANER LOOK

// const cookieBanerEl = function () {
//   const maxWidth39em = window.matchMedia("(max-width: 39em)").matches;
//   const maxWidth33em = window.matchMedia("(max-width: 33em)").matches;
//   const maxWidth25em = window.matchMedia("(max-width: 25em)").matches;
//   const container = document.querySelector(".cookie-text");
//   const htmlMobile = `<p class="cookie-text">
//   Ta strona używa plików cookie, aby zapewnić najlepsze doświadczenie
//   użytkownika.<br><a class="privacy-policy" href="privacy.html">Polityka prywatności</a>
// </p>`;
//   const html = `<p class="cookie-text">
//   Ta strona używa plików cookie, aby zapewnić najlepsze doświadczenie
//   użytkownika.
//   <a class="privacy-policy" href="privacy.html">Polityka prywatności</a>
// </p>`;

//   if (maxWidth39em && !maxWidth33em && !maxWidth25em) {
//     container.innerHTML = "";
//     container.insertAdjacentHTML("beforeend", htmlMobile);
//   } else if (maxWidth33em && !maxWidth25em) {
//     container.innerHTML = "";
//     container.insertAdjacentHTML("beforeend", html);
//   } else if (maxWidth25em) {
//     container.innerHTML = "";
//     container.insertAdjacentHTML("beforeend", htmlMobile);
//   } else {
//     container.innerHTML = "";
//     container.insertAdjacentHTML("beforeend", html);
//   }
// };

// cookieBanerEl();

// /////////////////////////////////////////////
// //CHECK PAGE SIZE
// window.addEventListener("resize", function () {
//   cookieBanerEl();
// });
