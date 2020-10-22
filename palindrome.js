//option 1
function palindrome(str) {
    let reversed = "";
    for (let ch of str){
      reversed = ch + reversed;
    }
    return str === reversed;
}

//option 2
function palindrome(str) {
    let strCopy = [...str];//converts string into array
    return strCopy.every((char, idx) => {
      return char === strCopy[strCopy.length - idx -1];
    });
}

palindrome("abba"); //true
palindrome("abcdefgh");//false