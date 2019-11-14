//prompt user to choose if they want a special character
//prompt user to choose if they want a number
//prompt user to choose if they want a lower case character - 
//prompt user to choose if they want a upper case character 
//event.preventDefault(); will be needed aparently to prevent the default behavior of a form 


var passLength = prompt("Enter desired length of password (between 8 and 126 characters)");
var newPassLength = parseInt(passLength);
var specialCharacter1 = confirm("Do you want your password to have special characters?");
var numberCharacter2 = confirm("Do you want your password to have numeric characters?");
var lowerCaseCharacter3 = confirm("Do you want your password to have lower case letters?");
var upperCaseCharacter4 = confirm("Do you want your password to have upper case letters?");

var char1 = "!@#$%^&*()"; //done
var char2 ="0123456789"; //done
var char3 ="abcdefghijklmnopqrstuvwxyz";//done
var char4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //done
var char12 ="!@#$%^&*()0123456789"; //done
var char13 = "!@#$%^&*()abcdefghijklmnopqrstuvwxyz"; //done
var char14 = "!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //done
var char123 ="!@#$%^&*()0123456789abcdefghijklmnopqrstuvwxyz"; //done
var char124 ="!@#$%^&*()0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //done
var char134 ="!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; //done
var char1234 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'; //done
var char23 = "0123456789abcdefghijklmnopqrstuvwxyz"; //done
var char234 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; //done
var char24 ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //done
var char34 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";//done
 


function makeid1(length) {
var result           = '';
    for ( var i = 0; i < length; i++) {
        if(specialCharacter1 == true && numberCharacter2 == false&& upperCaseCharacter4 == false && lowerCaseCharacter3 == false){
    var charactersLength = char1.length;
       result += char1.charAt(Math.floor(Math.random() * charactersLength));
            }
        else if(specialCharacter1 == true && numberCharacter2 == true && lowerCaseCharacter3 == false && upperCaseCharacter4 == false){
            var charactersLength = char12.length;
            result += char12.charAt(Math.floor(Math.random() * charactersLength));
        }  
        else if(specialCharacter1 == true && numberCharacter2 == false && lowerCaseCharacter3 == true && upperCaseCharacter4 == false){
            var charactersLength = char13.length;
            result += char13.charAt(Math.floor(Math.random() * charactersLength));   
        }      
        else if(specialCharacter1 == true && numberCharacter2 == false && lowerCaseCharacter3 == false && upperCaseCharacter4 == true){
            var charactersLength = char14.length;
            result += char14.charAt(Math.floor(Math.random() * charactersLength));   
        }   
        else if(specialCharacter1 == true && numberCharacter2 == true && lowerCaseCharacter3 == true && upperCaseCharacter4 == false){
            var charactersLength = char123.length;
            result += char123.charAt(Math.floor(Math.random() * charactersLength));   
        }
        else if(specialCharacter1 == true && numberCharacter2 == true && lowerCaseCharacter3 == false && upperCaseCharacter4 == false){
            var charactersLength = char124.length;
            result += char124.charAt(Math.floor(Math.random() * charactersLength));   
        }        
        else if(specialCharacter1 == true && numberCharacter2 == false && lowerCaseCharacter3 == true && upperCaseCharacter4 == true){
            var charactersLength = char134.length;
            result += char134.charAt(Math.floor(Math.random() * charactersLength));   
        }
        else if(specialCharacter1 == false && numberCharacter2 == true && lowerCaseCharacter3 == false && upperCaseCharacter4 == false){
            var charactersLength = char2.length;
            result += char2.charAt(Math.floor(Math.random() * charactersLength));
        }  
        else if(specialCharacter1 == false && numberCharacter2 == true && lowerCaseCharacter3 == true && upperCaseCharacter4 == false){
            var charactersLength = char23.length;
            result += char23.charAt(Math.floor(Math.random() * charactersLength));
        }  
        else if(specialCharacter1 == false && numberCharacter2 == true && lowerCaseCharacter3 == false && upperCaseCharacter4 == true){
            var charactersLength = char24.length;
            result += char24.charAt(Math.floor(Math.random() * charactersLength));
        }  
        else if(specialCharacter1 == false && numberCharacter2 == true && lowerCaseCharacter3 == true && upperCaseCharacter4 == true){
            var charactersLength = char234.length;
            result += char234.charAt(Math.floor(Math.random() * charactersLength));
        }          
        else if(specialCharacter1 == false && numberCharacter2 == false && lowerCaseCharacter3 == true && upperCaseCharacter4 == false){
            var charactersLength = char3.length;
            result += char3.charAt(Math.floor(Math.random() * charactersLength));
        }  
        else if(specialCharacter1 == false && numberCharacter2 == false && lowerCaseCharacter3 == true && upperCaseCharacter4 == true){
            var charactersLength = char34.length;
            result += char34.charAt(Math.floor(Math.random() * charactersLength));
        }  
        else if(specialCharacter1 == false && numberCharacter2 == true && lowerCaseCharacter3 == false && upperCaseCharacter4 == true){
            var charactersLength = char24.length;
            result += char24.charAt(Math.floor(Math.random() * charactersLength));
        }  
        else if(specialCharacter1 == false && numberCharacter2 == false && lowerCaseCharacter3 == false && upperCaseCharacter4 == true){
            var charactersLength = char4.length;
            result += char24.charAt(Math.floor(Math.random() * charactersLength));
        }  
        else {
            var charactersLength = char1234.length;
            result += char1234.charAt(Math.floor(Math.random() * charactersLength));
            }       
        }
     return result;
    }


    function generate(){
        event.preventDefault();
        document.getElementById("display").value = makeid1(newPassLength);
    }


    function copyPassword(){

        document.getElementById("display").select();
    
        document.execCommand("Copy");
    
        alert("Password copied to clipboard!");
    
    }

 
console.log(makeid1(newPassLength)); 
