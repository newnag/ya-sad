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