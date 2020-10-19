// function reverse(str) {
//     let newStr = "";
//     for(let i=str.length-1; i>=0; i--){
//       newStr += str[i];
//     }
//     return newStr;
// }

// function reverse(str){
//   return str.split("").reverse().join("");
// }

// function reverse(str){
//   let newStr = "";
//   for(let letter of str){
//     newStr = letter + newStr;// appending up front
//   }
//   return newStr;
// }

function reverse(str){
  return str.split("").reduce((reversed, chr) => {
    return chr + reversed;
  }, "");
}


console.log(reverse("apple"));