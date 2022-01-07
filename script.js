//question 1 
let button1 = document.querySelector('.buttonOne') //
let button2 = document.querySelector('.buttonTwo')

let text = document.querySelector('.text')

button1.onclick = function() {
    text.innerText = "I'm right"; //changes text and shows it 
}

button2.onclick = function() {
    text.innerText = "No, I'm right"; //changes text and shows it 
}


//question 2
let headLine = document.querySelector('.header')

headLine.onmouseover = function() { //on mouse over
    alert("Hey, I told you not to hover over me!"); //alert
}

//question 3 
var button = document.querySelector('.button')
var headline = document.querySelector('.header')

button.onclick = function validateForm() {
    var passwordInput = document.form.password.value; //gets value inputted for password
    var usernameInput = document.form.username.value; //gets value inputted for username

    if(passwordInput !== '12345678') { //checks if password is correct
      alert('The password is incorrect!!'); //alerts if incorrect
      return false;
    }
    headline.innerText = 'The information in this form is correct!!'; //changes text if correct
}