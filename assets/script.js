// Assignment Code
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
