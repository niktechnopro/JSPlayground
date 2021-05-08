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

//option 3
function palindrome(str){
  for(let i = 0; i<str.length; i++){
    // console.log(str[i], str[str.length - i - 1]);
    if(str[i] != str[str.length - i - 1]) return false;
  }
  return true;
}


palindrome("abcba");

palindrome("abba"); //true
palindrome("abcdefgh");//false