const swiper = new Swiper('.swiper', {
    speed: 1000,
    spaceBetween: 100,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });