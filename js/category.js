function open_filter(that){
  that.nextElementSibling.classList.toggle('show')
}

// ปิด Modal
function closeModal(){
  document.querySelector('.zoompic').classList.remove('show')
}

// เปิดรูปใหญ่
function zoompic(that){
  let indexs = that.querySelector('img').getAttribute('data-index')
  document.querySelector('.zoompic').classList.add('show')
  console.log(indexs)

  // สไลด์รูปใหญ่
  var swiper = new Swiper('.big-slide',{
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  swiper.slideTo(indexs)
}