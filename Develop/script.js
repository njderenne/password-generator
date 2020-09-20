// Assignment code here
var value = "";

var generatePassword = function(){
  newPassword = "" 
  var passwordLength = window.prompt("How many characters would you like your password to be? (Enter a number of at least 8.")
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = window.prompt("Please choose a number between 8 and 128")
  }
  letterChoice();
  for (i = 0; i < parseInt(passwordLength); i++){
    newPassword = newPassword + value.charAt(getRandom((value.length-1)))
  }
  return "Your new SECURE password is: " + newPassword
};

var letterChoice = function() {
  value = "";
  var lowerCase = window.confirm("Do you want to include lower case letters?");
  if (lowerCase) {
    value = value + "abcdefghijklmnopqrstuvwxyz"
  }

  var upperCase = window.confirm("Do you want to include upper case letters?");
  if (upperCase) {
    value = value + "ABCEDFGHIJKLMNOPQRSTUVWXYZ"
  }

  var numbers = window.confirm("Do you want to include numbers?");
  if (numbers) {
    value = value + "1234567890"
  }
  var specialCharacters = window.confirm("Do you want to include special characters?");
  if (specialCharacters) {
    value = value + " !#$%&()*+,-./:;<=>?@[]^_{}`~"
  }
  if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
    window.alert("You need to select at least one character type to generate a password");
    letterChoice();
  }
  return value
}

function getRandom(max) {
  return Math.round(Math.random() * max);
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordInfo = {
  //going to make an object to keep the code clean



  //dont forget to do this!!!
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
