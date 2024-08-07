// Animation On Scroll------------
AOS.init();
// Preloader---------
const loader = document.querySelector(".loader");
window.onload = () => {
  loader.classList.add("disppear");
};
// Navigation Js-----------
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("#logo").style.fontSize = "20px ";
  } else {
    document.querySelector("#logo").style.fontSize = "35px ";
  }
};
// Typed.js / js for Typing on Text
var typed = new Typed(".typing", {
  strings: [
    "MERN Stack Developer.",
    "Programming.",
    "Frontend Development.",
    "JavaScript Development.",
    "React-Js Developer.",
    "Clear Code Design.",
  ],
  typeSpeed: 60,
  loop: true,
  backSpeed: 60,
});
// Owl Carousel Js
$(document).ready(function () {
  // Scond Carousel
  $(".carousel2").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    nav: false,
    dots: false,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // First Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    nav: true,
    navText: `◀▶`,
    dots: false,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 2200,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
