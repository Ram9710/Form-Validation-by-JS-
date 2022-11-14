function validation() {
    



const username=document.getElementById('username').value;
const email=document.getElementById('email').value;
const Password=document.getElementById('password').value;
const location=document.getElementById('location').value;
const number=document.getElementById('number').value;
const res=document.getElementById('reset')

var userCheck=/[\w.-]/;
var passCheck=/^[A-Za-z\W]{8,16}$/;
var mailCheck=/([A-Za-z0-9_]{3,})@([A-Za-z]{5}.[a-zA-Z]{2,3})/
var numCheck=/[0-9]{10}$/
var locationCheck=/[A-Za-z]/
let errors=[]
if(userCheck.test(username)){
    document.getElementById('error').innerHTML=''
    
    document.getElementById('error').style.fontWeight='700';
}else{
    document.getElementById('error').innerHTML='**Username is Invalid';
    errors.push('username')
    document.getElementById('error').style.color='red';
    
}

if(passCheck.test(Password)){
    document.getElementById('passerror').innerHTML=''
    
    document.getElementById('passerror').style.fontWeight='700';
    
}else{
   
    document.getElementById('passerror').innerHTML='Password must have at least one Uppercase,number<br>Special Character.';
    errors.push('password')
    document.getElementById('passerror').style.color='red';
    
//    return false;
}
if(mailCheck.test(email)){
    document.getElementById('mailerror').innerHTML=''
    
    document.getElementById('mailerror').style.fontWeight='700';
}else{
    document.getElementById('mailerror').innerHTML='Please provide a valid email address';
    errors.push('email')
    document.getElementById('mailerror').style.color='red';
    
}
if(locationCheck.test(location)){
    document.getElementById('locerror').innerHTML=''
    
    document.getElementById('locerror').style.fontWeight='700';
}else{
    document.getElementById('locerror').innerHTML='Please enter Location';
    errors.push('location')
    document.getElementById('locerror').style.color='red';
    
}
if(numCheck.test(number)){
    document.getElementById('numerror').innerHTML=''
    
    document.getElementById('numerror').style.fontWeight='700';
}else{
    document.getElementById('numerror').innerHTML='Enter Valid number';
    errors.push('number')
    document.getElementById('numerror').style.color='red';
    
}
if(errors.length>0){
    return false;
   
}

   
}





// GETTING DATA FROM THE FORM
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwYzFAk_hApcoEpgPgUgFUGkZ07PZ--19NmVFAIntSZ2sIjicVeMAirInc3e5c4TmTn/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  function resetForm() {
    document.getElementById('error').innerHTML=''
    document.getElementById('passerror').innerHTML=''
    document.getElementById('mailerror').innerHTML=''
    document.getElementById('numerror').innerHTML=''
    document.getElementById('locerror').innerHTML=''
    
    const Forms=document.getElementById('form')
    Forms.reset()
    
    
}



