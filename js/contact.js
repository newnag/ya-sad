// เช็คข้อมูลการส่งข้อความติดต่อ
function send_contact(){
  let input_name = document.querySelector('#name')
  let input_email = document.querySelector('#email')
  let input_text = document.querySelector('#text')
  let count = 0

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

  if(!valid_form(input_text,'text')){
    input_text.classList.add('valid-red')
    count++
  }
  else{
    if(input_text.classList.contains('valid-red')){
      input_text.classList.remove('valid-red')
      count--
    }
  }

  if(count <= 0){
    popup('success','กรอกข้อมูลถูกต้อง')
  }
}