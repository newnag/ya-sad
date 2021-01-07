///////////////////////////////////////////////////////////////////////
// เมนู nav ของมือถือ
function open_mobile_menu(){
  document.querySelector('nav').classList.add('show')
}

function close_mobile_menu(){
  document.querySelector('nav').classList.remove('show')
}


///////////////////////////////////////////////////////////////////////
// เปิดปิดเมนู account
function open_menu_account(){
  document.querySelector('.menu-account').classList.toggle('show')
}



///////////////////////////////////////////////////////////////////////
// เปิดเมนูหมวดหมู่ย่อย
function open_subcate(that){
  that.querySelector('ul').classList.toggle('show')
}

///////////////////////////////////////////////////////////////////////
// เมนูด้านข้างของมือถือ
function open_aside_mobile(){
  document.querySelector('.aside .aside-nav').classList.add('show')
}

function close_aside_mobile(){
  document.querySelector('.aside .aside-nav').classList.remove('show')
}
