//Assignment code here
var pWalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pWbeta = "abcdefghijklmnopqrstuvwxyz";
var pWnumbers = "1234567890";
var pWsymbols = "~`!@#$%^&*()-_+={[}]:;'<,>.?/|";

var DisplayPassword = function() {
  if (CharacterNum = true) {
    console.log(pWnumbers.concat())
  }
}


var PasswordSymbols = function() {
  var CharacterSym = window.prompt("Does the password require any: SPECIAL-CHARACTERS? (Y/N)");
  if (CharacterSym === "" || CharacterSym === null) {
    window.alert("Please choose 'Y' for SPECIAL-CHARACTERS, or 'N' for NO-SPECIAL-CHARACTERS!")
    return PasswordSymbols();
  }
CharacterSym = CharacterSym.toLowerCase();
if (CharacterSym === "y" || CharacterSym ==="yes") {
  CharacterSym = true;
} else {
  CharacterSym = false;
}
DisplayPassword();
};

var PasswordBetas = function() {
  var CharacterBeta = window.prompt("Does the password require any: LOWERCASE-LETTERS? (Y/N)");
  if (CharacterBeta === "" || CharacterBeta === null) {
    window.alert("Please choose 'Y' for LOWERCASE-LETTERS, or 'N' for NO-LOWERCASE-LETTERS!")
    return PasswordBetas();
  }
CharacterBeta = CharacterBeta.toLowerCase();
if (CharacterBeta === "y" || CharacterBeta ==="yes") {
  CharacterBeta = true;
} else {
  CharacterBeta = false;
}
PasswordSymbols();
};

var PasswordAlphas = function() {
  var CharacterAlpha= window.prompt("Does the password require any: UPPERCASE-LETTERS? (Y/N)");
  if (CharacterAlpha === "" || CharacterAlpha === null) {
    window.alert("Please choose 'Y' for UPPERCASE-LETTERS, or 'N' for NO-UPPERCASE-LETTERS!")
    return PasswordAlphas();
  }
CharacterAlpha = CharacterAlpha.toLowerCase();
if (CharacterAlpha === "y" || CharacterAlpha ==="yes") {
  CharacterAlpha = true;
} else {
  CharacterAlpha = false;
}
PasswordBetas();
};


var passwordNumbers = function() {
  var CharacterNum = window.prompt("Does the password require any: NUMBERS? (Y/N)");
    if (CharacterNum === "" || CharacterNum === null) {
      window.alert("Please choose 'Y' for NUMBERS, or 'N' for NO-NUMBERS!")
      return passwordNumbers();
    }
  CharacterNum = CharacterNum.toLowerCase();
  if (CharacterNum === "y" || CharacterNum ==="yes") {
    CharacterNum = true;
  } else {
    CharacterNum = false;
  }
  PasswordAlphas();
};



var generatePassword = function() {{

  var choiceLength = window.prompt("How many characters must your password be? (Must be 8-128 characters)");
  
  choiceLength = parseInt(choiceLength);
  if(choiceLength >= 8 && choiceLength <= 128)
    {
      passwordNumbers();
    }
    else
    {
      alert("For character count of your password please select a number between 8-128!")
      generatePassword();
    }
  }



};


    // ""
  
    // ""

    // ""
  
    // 
  

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


