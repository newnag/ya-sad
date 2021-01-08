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
  if(that.querySelector('ul').classList.contains('show')){
    that.querySelector('ul').classList.remove('show')
  }
  else{
    document.querySelectorAll('.aside-nav .menu li ul').forEach(Ele=>{
      Ele.classList.remove('show')
    })
    that.querySelector('ul').classList.toggle('show')
  }
}

///////////////////////////////////////////////////////////////////////
// เมนูด้านข้างของมือถือ
function open_aside_mobile(){
  document.querySelector('.aside .aside-nav').classList.add('show')
}

function close_aside_mobile(){
  document.querySelector('.aside .aside-nav').classList.remove('show')
}
