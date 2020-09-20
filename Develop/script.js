// Assignment code here
var value = "";
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

var generatePassword = function(){ 
  var passwordLength = window.prompt("How many characters would you like your password to be? (Enter a number of at least 8.")
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = window.prompt("Please choose a number between 8 and 128")
  }
  letterChoice();
  return "Your password will be " + passwordLength + " characters long with value options of " + value + "."
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordInfo = {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
