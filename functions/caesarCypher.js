
function caesarCipher(str, shiftCount) {

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"];
  
    let strArr = str.split('');
  
    let shiftArr = strArr.map((e,i) => {
      
      let upperCase = false;
      
      if(e === e.toUpperCase()) {
        upperCase = true;
      }
      
      
      let index = alphabet.indexOf(e.toLowerCase());
      console.log(index)
      
      if(index  === -1) {
        return e
      }
      
      if(index + shiftCount > 25) {
        let diff = 25 - index;
        let newIndex = (shiftCount - diff) -1;
        if(upperCase) {
          upperCase = false;
          return alphabet[newIndex].toUpperCase();
        }
        return alphabet[newIndex]
      }
         if(upperCase) {
          upperCase = false;
          return alphabet[index+ shiftCount].toUpperCase();
        }
      
      return alphabet[index+ shiftCount]
      
    })
    
    return shiftArr.join('')
                  
}

export default caesarCipher