
//not very good solution
// function fizzBuzz(n){
//   for(let i=1; i < n; i++){
//     // console.log(i, i%3)
//     if(i%3===0 && i%5===0){
//       console.log("fizzbuzz")
//     }
//     else if(i%3 === 0){
//       console.log("fizz");
//     }
//     else if(i%5 === 0){
//       console.log("buzz");
//     }
//     else{
//       console.log(i);
//     }
//   }
// }

//better solution
function fizzBuzz(n){
  let str = "";
  for(let i=1; i < n; i++){
    // console.log(i, i%3)
    if(i%3 === 0) str += "fizz";
    if(i%5 === 0) str += "buzz";
    if(str.length === 0) str = i;
    console.log(str);
    str = "";
  }
}

fizzBuzz(121)
