// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //declaring variables as strings, going to use them like array's
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = ["123456789"];
  const specialCharacters = "#@!%&()/";
  var characterOptions = "";
  var securePassword = "";
  var includesLowerCase, includesUpperCase, includesNumbers, includesSpecialCharacters;


  //getting the password length and not allowing incorrect values
  let passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("enter a number between 8 and 128 for password length.");
  }

  //figure out what characters they want to include
  includesLowerCase = confirm("Would you like to include lowercase letter values?");
  if (includesLowerCase) {
    characterOptions += lowercase;
    console.log(characterOptions);
  }
  includesUpperCase = confirm("Would you like to include uppercase letter values?");
  if (includesUpperCase) {
    characterOptions += uppercase;
    console.log(characterOptions);
  }
  includesNumbers = confirm("Would you like to include numbers values?");
  if (includesNumbers) {
    characterOptions += numbers;
    console.log(characterOptions);
  }
  includesSpecialCharacters = confirm("Would you like to include special characters?");
  if (includesSpecialCharacters) {
    characterOptions += specialCharacters;
    console.log(characterOptions);
  }

  //Test that all required values were used, if they werent, start over 
  //Loop through strings returning a random value of each string

  let passesTest = false;

  // securePassword = "";
  for (var i = 0; i < passwordLength; i++) {
    securePassword += characterOptions.charAt(Math.floor(Math.random() * characterOptions.length))

    switch (securePassword != null) {
       case includesLowerCase:
       
         break;
       case includesUpperCase:
        
           break;
         case includesNumbers:
        
         break;
       case includesSpecialCharacters:
    
         break;
        default:
         passesTest = true;
     }

  } return securePassword;

  //Shuffle and return the result

} 