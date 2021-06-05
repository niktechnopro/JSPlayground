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

//long way but also using an Obj

// const vowels = ["a","e","i","o","u"];

// // const testString = "Hi There";
// const testString = "Why do you ask?"

// function wovels(str){//returns number of wovels in the stirng
//   str = str.toLowerCase();
//   let wovelObj = {};
//   for(let char of str){
//     if(vowels.includes(char)){
//       if(wovelObj[char]){
//         wovelObj[char] += 1;
//       }
//       else{
//         wovelObj[char] = 1;
//       }
//     }
//   }
//   // return wovelObj;
//   //or 
//   let sum = 0;
//   for(let key in wovelObj){
//     sum += wovelObj[key];
//   }
//   return sum;
// }

// const regex = new RegExp("[aeiou]", "gi");//same as /[aeiou]/gi

// const testString = "Why do you ask?"

// function wovels(str){//returns number of wovels in the stirng
//   return str.match(regex).length ? str.match(regex).length : 0; 
// }


wovels(testString);


// wovels(testString);