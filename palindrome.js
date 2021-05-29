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

//same as 1st method
// const str = "I am the greatest";
// const str = "abba";

// function isPalindrome(st){
//   let str = st.toLowerCase();
//   let reversed = "";
//   for (let char of str){
//     reversed = char + reversed;
//   }
//   // console.log(reversed);
//   return reversed === str;
// }

// function isPalindrome(str){
//   str = str.toLowerCase();
//   for(let i = 0, n = str.length; i < n; i++){
//     if(str.charAt(i) !== str.charAt(n -1 - i)) return false;
//   }
//   return true;
// }

// isPalindrome(str);



palindrome("abcba");

palindrome("abba"); //true
palindrome("abcdefgh");//false