//iterative solution;

function fibonacci(n){
  let result = [];
  //iterative solution
  for(let idx=0; idx <= n; idx++){
    if(result.length > 1){
      result.push(result[idx-2] + result[idx-1]);
    }
    else{
      result.push(idx)
    }
  }
  return result[n]
}


fibonacci(2);

//iterative solution;

// function fibonacci(n){
//   let result = [];
//   //iterative solution
//   for(let idx=0; idx <= n; idx++){
//     if(result.length > 1){
//       result.push(result[idx-2] + result[idx-1]);
//     }
//     else{
//       result.push(idx)
//     }
//   }
//   return result[n]
// }


// function fibonacci(n){
//   if(n < 2){
//     return n;
//   }
//   return fibonacci(n-1) + fibonacci(n-2);
// }

// fibonacci(5);