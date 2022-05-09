// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
// All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false;
    const lowerCaseInput = input.toLowerCase();
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split('')
  
  // const string = 'word';
  // string.split('');
  // Result : ['w', 'o', 'r', 'd']
    let resultFinal = [];
    // [
    //   '.', 'w', 'a', 'e', 's', 'z',
    //   'r', 'd', 'x', 't', 'f', 'c',
    //   'y', 'g', 'v', 'u', 'h', 'b',
    //   'i', 'j', 'n', 'o', 'k', 'm',
    //   'p', 'l'
    // ]
    // you can use .indexOf() and .lastIndexOf() to determine if an index is repeated. Meaning, if the first occurrence of the character is also the last occurrence, then you know it doesn't repeat. If not true, then it does repeat.

    for (let i=0; i<alphabetArray.length; i++){
      if ( alphabetArray.indexOf(alphabetArray[i]) !== alphabetArray.lastIndexOf(alphabetArray[i]) ){
        return false;
      }
    }
    //space
    for(let i =0; i<lowerCaseInput.length; i++){
      if(lowerCaseInput[i]=== " "){
        resultFinal.push(" ")
      }

// encode
// substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik")
for(let j=0; j<trueAlphabet.length; j++){
  if(encode && trueAlphabet[j]===lowerCaseInput[i]){
    resultFinal.push(alphabet[j]) //J는 숫자인데
    //그 위에 trueALphabet J를 의미하는거 7,8이런거 
  }
}



//decode//
//substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"    
for(let j =0; j<alphabet.length; j++){
    if(encode ===false && alphabet[j] === lowerCaseInput[i]){
      resultFinal.push(trueAlphabet[j])
     }
    }
    }

  return resultFinal.join('')
  }
  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
