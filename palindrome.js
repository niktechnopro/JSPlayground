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

//for number option 1
// var isPalindrome = function(x) {
//     if(x < 0) return false;
//     let temp = "";
//     for(let char of x.toString()){
//       temp = char + temp;
//     }
//     if(temp === x.toString()){
//       return true;
//     }
    
//     return false;
// };

// for number option 2
// var isPalindrome = function(x) {
//     if(x < 0) return false;
    
//     for(let i = 0, n = x.toString().length; i < n; i++){
//         if(x.toString()[i] != x.toString()[n - i - 1]) return false;
//     }
    
//     return true;
// };

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// isPalindrome(122);


palindrome("abcba");

palindrome("abba"); //true
palindrome("abcdefgh");//false