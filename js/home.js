///////////////////////////////////////////////////////////////////////
// สไลด์หน้าหลัก
const slide_home = new Swiper('.head-slide', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


///////////////////////////////////////////////////////////////////////
// สไลด์ของเซลล์
const slide_sale = new Swiper('.grid-sale', {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  breakpoints:{
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }
});