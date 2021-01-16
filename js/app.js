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



///////////////////////////////////////////////////////////////////////
// Dialog Popup
// @param typeicon = success , error , warning , info , question //////
///////////////////////////////////////////////////////////////////////
function popup(typeicon,text){

  if(typeicon === 'error'){
    Swal.fire({
      icon: typeicon,
      title: 'มีข้อผิดพลาดบางอย่าง!',
      text: text,
    })
  }
  else if(typeicon === 'success'){
    Swal.fire({
      icon: typeicon,
      title: 'สำเร็จ!',
      text: text,
    })
  }
}


///////////////////////////////////////////////////////////////////////
// validate
// @param type = Name , email , text , number , tel ///////////////////
///////////////////////////////////////////////////////////////////////
function valid_form(input,type,ins_pass){
  let letter_name = /^[ก-๙]+$/
  let letter_email = /^[A-Za-z]+$/
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  let numbers = /^[0-9]+$/

  if(type === 'Name'){
    if(input.value.length == 0){
      popup('error','กรุณากรอกข้อมูลในช่องให้ครบ')
      return false
    }
    else if(!input.value.match(letter_name)){
      popup('error','กรุณากรอกเฉพาะตัวอักษรไทย')
      return false
    }
    else if(input.value.length >= 128){
      popup('error','กรุณากรอกไม่เกิน 128 ตัวอักษร')
      return false
    }
    else{
      return true
    }
  }
  else if(type === 'text'){
    if(input.value.length == 0){
      popup('error','กรุณากรอกข้อมูลในช่องให้ครบ')
      return false
    }
    else{
      return true
    }
  }
  else if(type === 'email'){
    if(input.value.length == 0){
      popup('error','กรุณากรอกข้อมูลในช่องให้ครบ')
      return false
    }
    else if(input.value.length >= 128){
      popup('error','กรุณากรอกไม่เกิน 128 ตัวอักษร')
      return false
    }
    else if(!input.value.match(mailformat)){
      popup('error','กรุณากรอกอีเมล์ให้ถูกต้อง')
      return false
    }
    else{
      return true
    }
  }
  else if(type === 'number'){
    if(input.value.length == 0){
      popup('error','กรุณากรอกข้อมูลในช่องให้ครบ')
      return false
    }
    else if(input.value.length >= 18){
      popup('error','กรุณากรอกไม่เกิน 18 ตัวอักษร')
      return false
    }
    else if(!input.value.match(numbers)){
      popup('error','กรุณากรอกแต่ตัวเลข')
      return false
    }
    else{
      return true
    }
  }
  else if(type === 'tel'){
    if(input.value.length == 0){
      popup('error','กรุณากรอกข้อมูลในช่องให้ครบ')
      return false
    }
    else if(input.value.length >= 10){
      popup('error','กรุณากรอกไม่เกิน 10 ตัวอักษร')
      return false
    }
    else if(!input.value.match(numbers)){
      popup('error','กรุณากรอกแต่ตัวเลข')
      return false
    }
    else{
      return true
    }
  }
  else if(type === 'pass'){
    if(input.value.length == 0){
      popup('error','กรุณากรอกข้อมูลในช่องให้ครบ')
      return false
    }
    else if(input.value.length < 6){
      popup('error','กรุณากรอกมากกว่า 6 ตัวอักษร')
      return false
    }
    else if(input.value.length > 32){
      popup('error','กรุณากรอกไม่เกิน 32 ตัวอักษร')
      return false
    }
    else{
      return true
    }
  }
  else if(type === 'cpass'){
    if(input.value.length == 0){
      popup('error','กรุณากรอกข้อมูลในช่องให้ครบ')
      return false
    }
    else if(input.value == ins_pass){
      popup('error','กรุณากรอกรหัสผ่านให้ตรงกัน')
      return false
    }
    else{
      return true
    }
  }
}