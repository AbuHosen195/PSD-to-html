gsap.from("#banner-left-text", {
  x: -100,
  delay: 0.5,
  duration: 2,
});
gsap.from("#banner-right-mobile", {
  x: 100,
  delay: 0.5,
  duration: 2,
});
/**
 * owl carousel function code start
 * **/
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
