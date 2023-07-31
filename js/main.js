window.addEventListener('scroll',function(){
    this.document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
});

// show/hide button
const menu=document.querySelector('.nav_menu');
const menuBtn=document.querySelector('#open-menu-btn');
const closeBtn=document.querySelector('#close-menu-btn');
menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
});
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}

closeBtn.addEventListener('click',closeNav)
const toggle=document.getElementById('toggleDark');
const body=document.querySelector('body');
const navMenu=document.querySelector('.nav_menu');
const h1=document.querySelector('h1');
const h4=document.querySelector('h4');
toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background='white',
        body.style.color='black',
        h1.style.color='black',
        h4.style.color='black',
        body.style.transition='2s'
    }else{
        body.style.background='black',
        body.style.color='white',
        h1.style.color='white',
        h4.style.color='white',
        body.style.transition='2s'
    }
});

// show password
function myFunction() {
    var x = document.querySelector(".myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
//   scroll to top button
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});
// show password requirment
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

// blank form not submitted
function myValidation(){
    var name =document.forms['contactForm']['name'].value;
    var email =document.forms['contactForm']['email'].value;
    var message =document.forms['contactForm']['message'].value;
    var error=[];
    if(name=='' || name.length < 3){
        error[0]='Name at least must be 3 letters';
        document.getElementById('name-error').innerHTML=error[0];
    }else{
        document.getElementById('name-error').innerHTML='';
    }
    if(email=='' || email.length < 10){
        error[1]='Please write your valid email address';
        document.getElementById('email-error').innerHTML=error[1];
    }else{
        document.getElementById('email-error').innerHTML='';
    }
    if(message=='' || message.length < 25){
        error[2]='Please write your comment';
        document.getElementById('message-error').innerHTML=error[2];
    }else{
        document.getElementById('message-error').innerHTML='';
    }
    if(error.length > 0){
        return false;
    }
}