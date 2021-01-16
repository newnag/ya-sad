// เช็คข้อมูลในช่องสมัคร
function send_contact(){
  let input_name = document.querySelector('#name')
  let input_email = document.querySelector('#email')
  let input_pass = document.querySelector('#pass')
  let input_cpass = document.querySelector('#c-pass')
  let input_type = document.querySelector('.right .select-type').getAttribute('data-choice')

  let count = 0

  //////////////////////////////////////////////////////////////////////
  // ฟังก์ชั่น valid_form ใส่ input และ type ได้แก่ Name,email,pass,number,tel
  //////////////////////////////////////////////////////////////////////

  if(!valid_form(input_name,'Name')){
    input_name.classList.add('valid-red')
    count++
  }
  else{
    if(input_name.classList.contains('valid-red')){
      input_name.classList.remove('valid-red')
      count--
    }
  }

  if(!valid_form(input_email,'email')){
    input_email.classList.add('valid-red')
    count++
  }
  else{
    if(input_email.classList.contains('valid-red')){
      input_email.classList.remove('valid-red')
      count--
    }
  }

  if(!valid_form(input_pass,'pass')){
    input_pass.classList.add('valid-red')
    count++
  }
  else{
    if(input_pass.classList.contains('valid-red')){
      input_pass.classList.remove('valid-red')
      count--
    }
  }

  if(!valid_form(input_cpass,'cpass',input_pass)){
    input_cpass.classList.add('valid-red')
    count++
  }
  else{
    if(input_cpass.classList.contains('valid-red')){
      input_cpass.classList.remove('valid-red')
      count--
    }
  }

  if(count <= 0){
    popup('success','กรอกข้อมูลถูกต้อง')
  }
}

// เลือกประเภทของสมาชิกที่ต้องการสมัคร
function select_choice_type(that){
  document.querySelectorAll('.select-type .choice .circle .inside').forEach(element => {
    element.classList.remove('select')
  });
  that.querySelector('.inside').classList.add('select')

  const data_type = that.getAttribute('data-type')
  document.querySelector('.right .select-type').setAttribute('data-choice',data_type)
}