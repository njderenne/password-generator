// Assignment code here
generatePassword = function(){ 
  passwordLength = window.prompt("How many characters would you like your password to be? (Enter a number of at least 8.")
  return "Your password will be " + passwordLength + " characters long."
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
