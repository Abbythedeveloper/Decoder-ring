
const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    //removing spaces.
    if (encode === false && input.replace(" ",'').length % 2 !== 0){
      return false
    }
    const lowerCaseInput = input.toLowerCase()
       const polybiusSquare = [
      {letter: "a",
        code: "11"},
      {letter: "b",
        code: "21"},
      {letter: "c",
        code: "31"},
      {letter: "d",
        code: "41"},
      {letter: "e",
        code: "51"},
      {letter: "f",
        code: "12"},
      {letter: "g",
        code: "22"},
      {letter: "h",
        code: "32"},
      {letter: "i",
        code: "42"},
      {letter: "j",
        code: "42"},
      {letter: "k",
        code: "52"},
      {letter: "l",
        code: "13"},
      {letter: "m",
        code: "23"},
      {letter: "n",
        code: "33"},
      {letter: "o",
        code: "43"},
      {letter: "p",
        code: "53"},
      {letter: "q",
        code: "14"},
      {letter: "r",
        code: "24"},
      {letter: "s",
        code: "34"},
      {letter: "t",
        code: "44"},
      {letter: "u",
        code: "54"},
      {letter: "v",
        code: "15"},
      {letter: "w",
        code: "25"},
      {letter: "x",
        code: "35"},
      {letter: "y",
        code: "45"},
      {letter: "z",
        code: "55"},
      {letter: " ",
        code: " "}
    ];
    
    let encodedInput = [];
    if(encode === true){
      for(let i = 0; i < lowerCaseInput.length; i++){
        for(let j=0; j<polybiusSquare.length;j++){    
          if(lowerCaseInput[i] === polybiusSquare[j].letter){
            encodedInput.push(polybiusSquare[j].code)
          }
        }
      }
    }
    //polybius("thinkful"); //> "4432423352125413"
    //polybius("Hello world"); //> '3251131343 2543241341'
   
    if(encode === false){
       for(let i = 0; i < input.length; i+=2){
        for(let j=0; j<polybiusSquare.length;j++){
            if (input[i] == " "){
          encodedInput.push(" ")
          i -= 1
          //이렇게 해줌으로써 2칸옮기지않고 한칸옮기는거
          //원래였으면 0->2>4>6 이렇게 가야하는데, 0->2>4(x)5(o)->7
              
            }
          
          if(polybiusSquare[j].code === input[i]+input[i+1]&&input[i] !== " " ){
            encodedInput.push(polybiusSquare[j].letter)
          }
        }
       }
     }
    //  polybius("3251131343 2543241341", false); //> "hello world"
    //  polybius("4432423352125413", false); //> "th(i/j)nkful
    //  polybius("44324233521254134", false); //> false

    return encodedInput.join('').toString()
  }
  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };