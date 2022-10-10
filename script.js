// prompt user about number of characters- x
// error message if incorrect length selected- alert- x
// exit generate password function-return
// prompt for lower and upper case, and special char- window confirm 
// error message if none selected- alert
// exit generate password 
// create another array by joining the selected arrays
// call the array (name) 
// search on google how to select random element from an array (use for loop to do that multiple times)
// generate password using random characters





// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwrxyz'.split("");
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWRXYZ'.split("");
var numbersZeroToNine = '0123456789'.split("");
var selectedSpecialCharacters = '!@#$%^&*()_+{}:"><?/'.split("");

// prompt user about number of characters

function generatePassword() {
  var beforePass = []
  var afterPass = ""

  var length = prompt("enter character length between 8 and 128.");
  if (length < 8 || length > 128) {
    // error message if incorrect length selected
    generatePassword()
  } else {
    if (confirm("Do you want uppercase letters in your password?")) {
      beforePass = beforePass.concat(upperCaseLetters)
    }
    if (confirm("Do you want lowercase letters in your password?")) {
      beforePass = beforePass.concat(lowerCaseLetters)
    }
    if (confirm("Do you want numbers zero to nine in your password?")) {
      beforePass = beforePass.concat(numbersZeroToNine)
    }
    if (confirm("Do you want special characters in your password?")) {
      beforePass = beforePass.concat(selectedSpecialCharacters)
    }
    if (beforePass.length === 0) {
      alert("You need to choose at least one character.")
    } else {
      for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * beforePass.length)
        afterPass += beforePass[random]
      }
      console.log(beforePass)
      console.log(afterPass)
      passwordText.innerHTML = afterPass
    }
  }
}


/*lowerCaseLetters =confirm("select lowercase letters.");
upperCaseLetters =confirm("select uppercase letters.");
numbersZeroToNine =confirm("select number zero to nine.");
selectedSpecialCharacters =confirm("select special characters.")

if (lowerCaseLetters === false); {
  alert("did not select lowercase letters.");
}
if (upperCaseLetters === false); {
  alert("did not select uppercase letters.");
}
if (numbersZeroToNine === false); {
  alert("did not select numbers zero to nine.");
}
if (selectedSpecialCharacters === false); {
  alert("did not select special characters.");
}
*/

// lowerCaseLetters
// var userInputLowerCase =
//   window.prompt("select lowercase letters.");
// if (lowerCaseLetters === false); {
//   alert("did not select lowercase letters. try again.");
//   location.reload();
// }
// upperCaseLetters
// var userInputUpperCase =
//   window.prompt("select uppercase letters.");
// if (upperCaseLetters === false); {
//   alert("did not select uppercase letters. try again.");
//   location.reload();
// }
// numbersZeroToNine
// var userInputNumbersZeroToNine =
//   window.prompt("select any numbers 0-9.");
// if (numbersZeroToNine === false); {
//   alert("did not select any numbers from 0-9. try again.");
//   location.reload();
// }
// selectedSpecialCharacters
// var userInputSelectedSpecialCharacters =
//   window.prompt("select special characters.");
// if (selectedSpecialCharacters === false); {
//   alert("did not select any special characters. try again.");
//   location.reload();
// }
// create an array of the available characters which can be selected










//if (selectedSpecialCharacters === false); {
//window.prompt = ("error. try again.");
// location. reload ();
//}
//if (selectedSpecialCharacter === true);
//window.confirm("characters selected.");


// Get references to the #generate element


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
