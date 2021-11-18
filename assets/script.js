//Established selectable options for the Pass Word (PW) ; 
//throughout script file will also refer to capital-letter selections with (alpha), 
// lowercase-letter selections as (beta) , 
// and special-characters with the word (symbols).

const PWalpha = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]
const PWbeta = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
const PWnumbers = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
const PWsymbols = ["~" , "`" , "!" , "@" , "#", "$" , "%" , "^" , "&" , "*" , "(" , ")" , "-" , "_" , "+" , "=" , "{" , "[" , "}" , "]" , ":" , ";" , "<" , ">" , "." , "?" , "/"]

console.log (PWalpha);
console.log (PWbeta);
console.log (PWnumbers);
console.log (PWsymbols);


//Password Query/Random-Generator Suite
function makePW (x,y) {
  //Determinator for Length of Password:
  let PWLength = parseInt(prompt("How long does the password need to be? (8-128 Characters"))
    if (isNaN(PWLength)){
      prompt("Please enter a number between 8-128");
      return
    }
    if (PWLength < 8 || PWLength > 128) {
      prompt("Please enter a number between 8-128");
    }

//Selection Options for the to-be Generated Password
  let onPWalpha = confirm("Does your password need Capital-Letters? (ABC)")
  let onPWbeta = confirm("Does your password need Lowercase-Letters? (abc)")
  let onPWnumbers = confirm("Does your password need Numbers? (123)")
  let onPWsymbols = confirm("Does your password need Special Charactes? ($#!%)")

//PassWord chosen OPTions=PWcOPT
  let PWcOpt = []
    if (onPWalpha) {
      PWcOpt = PWcOpt.concat(PWalpha)
    }
    if (onPWbeta) {
      PWcOpt = PWcOpt.concat(PWbeta)
    }
    if (onPWnumbers) {
      PWcOpt = PWcOpt.concat(PWnumbers)
    }
    if (onPWsymbols) {
      PWcOpt = PWcOpt.concat(PWsymbols)
    }
  console.log(PWcOpt)

//Password Printer-Internal -> collects selected characters and sends them to the presenter on the client side
  let PWprint = "";
    for (let i=0 ; i<PWLength ; i++) {
      let randomRef = Math.floor(Math.random()*PWcOpt.length)
      let randomer = PWcOpt[randomRef]
      PWprint = PWprint + randomer
      console.log(PWprint)
    }
    return PWprint
};

//Present Password to client side
function presPW() {
  var PW = makePW();
  var PWText = document.querySelector("#password");

  PWText.value = PW;
}

//Enable Generating Click
const genClick = document.querySelector("#generate");
genClick.addEventListener("click", presPW);
