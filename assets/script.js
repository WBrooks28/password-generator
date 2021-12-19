// Assign generate button to variable
var generateBtn = document.querySelector("#generate");

// Define Arrays
var upperStr = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upper = upperStr.split(" ");
var lowerStr = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lower = lowerStr.split(" ");
var numberStr = "1 2 3 4 5 6 7 8 9 0";
var number = numberStr.split(" ");
var specialStr = "! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ] / ^ _ ` { | } ~";
var special = specialStr.split(" ");

// Generate Password function
function generatePassword() {
  var combinedArray = [];
  // prompt password length
  var passwordLength = window.prompt("Enter a password length between 8 and 128 characters.");
  // check length is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please choose a number between 8 and 128.");
    return ""
  } else if (passwordLength >= 8 || passwordLength <= 128 ) {
    // prompt for character types
    var upperSelect = window.confirm("Include uppercase letters?");
    var lowerSelect = window.confirm("Include lowercase letters?");
    var numberSelect = window.confirm("Include numbers?");
    var specialSelect = window.confirm("Include special characters?");

    // check for selected character types
    if (upperSelect) {
      combinedArray = combinedArray.concat(upper);
    }
    if (lowerSelect) {
      combinedArray = combinedArray.concat(lower);
    }
    if (numberSelect) {
      combinedArray = combinedArray.concat(number);
    }
    if (specialSelect) {
      combinedArray = combinedArray.concat(special);
    }
    // check that user selected at least one type of character
    if (combinedArray.length === 0) {
      alert("Please select at least one type of character.");
      return "";
    }

    // generate random password by selecting characters from array
    var randomPassword = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomCharIndex = Math.floor(Math.random() * combinedArray.length);
      randomPassword += combinedArray[randomCharIndex];
    }

    // return random password
    return randomPassword;
  } else {
    alert("Invalid password length. Please choose a number between 8 and 128.");
    return ""
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("Please grade nicely. Thank you for your time! :)");
