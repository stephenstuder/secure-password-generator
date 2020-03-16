// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "123456789";
  const specialCharacters = "?=.*[!@#$%^&*";
  let regexTestValues= "";
  const lowercaseTester = "(?=.*[a-z])";
  const uppercaseTester = "(?=.*[A-Z])";
  const numberTester = "(?=.*[0-9])";
  const specialCharacterTester = "(?=.*[!@#\$%\^&\*])(?=.{8,})";
  let characterOptions = "";
  let securePassword = "";
  let includesLowerCase, includesUpperCase, includesNumbers, includesSpecialCharacters;


  //getting the password length and not allowing incorrect values
  let passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("enter a number between 8 and 128 for password length.");
    if (passwordLength < 8){
      alert("You must select a number greater than 8");
    } else if (passwordLength > 128){
      alert("You must select a less than 128");
    } else if (passwordLength > 8 || passwordLength < 128) {
      break;
    } else {
      alert("Your entry does not appear to be valid, please enter a number between 8 and 128")
    }
  }

  //figure out what characters they want to include and simultaneously build a regex test
  includesLowerCase = confirm("Would you like to include lowercase letter values?");
  if (includesLowerCase) {
    characterOptions += lowercase;
    regexTestValues+= lowercaseTester;
  }
  includesUpperCase = confirm("Would you like to include uppercase letter values?");
  if (includesUpperCase) {
    characterOptions += uppercase;
    regexTestValues+= uppercaseTester;
  }
  includesNumbers = confirm("Would you like to include numbers values?");
  if (includesNumbers) {
    characterOptions += numbers;
    regexTestValues+= numberTester;
  }
  includesSpecialCharacters = confirm("Would you like to include special characters?");
  if (includesSpecialCharacters) {
    characterOptions += specialCharacters;
    regexTestValues+= specialCharacterTester;
  }

  //Builds the regex test applicable to the situation created by the user
  let regexTest = new RegExp(regexTestValues);

  //Loop through pool of requested characters returning a random value each iteration

  let passesTest = false;
  let failCount = 0

  // Creates password, test if conditions are met before returning the password
  while (passesTest != true) {
    securePassword = "";
    for (let i = 0; i < passwordLength; i++) {
      securePassword += characterOptions.charAt(Math.floor(Math.random() * characterOptions.length))
      //tests that the generated password meets the requirements
      if (regexTest.test(securePassword)) {
        passesTest = true;
      } else {
        passesTest = false;
        console.log(failCount++);
      }
    }
  } return securePassword;
  
} 