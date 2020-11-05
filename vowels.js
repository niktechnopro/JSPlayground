let v = ["a", "e", "i", "o", "u"];

//function that finds how many wovels

//solution one
// function vowels(str){
//   let n = 0;
//   for(let i =0; i< str.length; i++){
//     if(v.includes(str[i].toLowerCase())){
//       n++;
//     }
//   }
//   return n;
// }

//solution 2 -without array
// function vowels(str){
//   const vowels = "aeiou";//preffered array like in method 1
//   let n = 0;
//   for (let ch of str){
//     if (vowels.includes(ch)){
//       n++;
//     }
//   }
//   return n;
// }

//with regular expression - method 3
function vowels(str){
  const matches = str.match(/[aeiou]/gi);//array of matches, if none found - returns null
  return matches ? matches.length : 0;
}


vowels("Hi there");//returns 3 wovels