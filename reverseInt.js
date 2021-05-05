// function reverseInt(n){
//   //convert number to string, so we can use methods
//   //1.check the sign negative or positive
//   let sign = Math.sign(n);//we'll multiply on this
//   //2.check if ends with 0 and if yes, remove it
//   let newStr = n.toString();

//   while(newStr.endsWith("0")){
//     newStr = newStr.slice(0,-1);//slice method does not mutate original string
//   }
//   let result = "";
//   for(let v of n.toString()){
//     if(!Number.isNaN(parseInt(v))){
//       result = v + result;
//     }
//   }
//   return parseInt(result) * sign;
// }

//second way
// function reverseInt(n){
//   const reversed = n.toString().split("").reverse().join("");
//   if(n < 0){
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }


//third way
const reverseInt = (n) => {
  let sign = Math.sign(n);
  let reversed = "";
  for(let char of n.toString()){
    reversed = char + reversed;
  }
  reversed = sign * parseInt(reversed);
  return reversed;
}

// reverseInt(1290000);
reverseInt(-109000000)