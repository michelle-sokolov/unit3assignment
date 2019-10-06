//prompt user to choose if they want a special character
//prompt user to choose if they want a number
//prompt user to choose if they want a lower case character - 
//prompt user to choose if they want a upper case character 
//event.preventDefault(); will be needed aparently to prevent the default behavior of a form 


var passLength = prompt("Enter desired length of password (between 8 and 126 characters)");
var specialCharacter = confirm("Do you want your password to have special characters?");
var numberCharacter = confirm("Do you want your password to have numeric characters?");
var lowerCaseCharacter = confirm("Do you want your password to have lower case letters?");
var upperCaseCharacter = confirm("Do you want your password to have upper case letters?");

//add to random list

//make lists of each type of character
//if user wants __ the list we're taking from is __

var arrSpecialCharacter = ["!@#$%^&*()_+".split("")];
var arrNumberCharacter = [1,2,3,4,5,6,7,8,9,0];
var arrLowerCaseCharacter = ["abcdefghijklmnopqrstuvwxyz".split("")]; 
var arrUpperCaseCharacter = ["ABCDEFGHIJKLMNOPQRSTUVWZYZ".split("")]; 

//create function to generate password using conditions user choose
//if you're reading this peter it doesn't work :(

function generate(){
    event.preventDefault();
    passwordCharSet = "";

    if (specialCharacter) {
        passwordCharSet += arrSpecialCharacter;
      }
    if (numberCharacter) {
        passwordCharSet += arrNumberCharacter;
      }
    if (lowerCaseCharacter === true) {
        passwordCharSet += arrLowerCaseCharacter;
      }
    if (upperCaseCharacter === true) {
        passwordCharSet += arrUpperCaseCharacter;
      }
        {
        userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
        );
      }
      //add password to textbox/display area
      document.getElementById("display").value = password;
  
  }
 
 
//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}
