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


//another way - just a variation
// function fibonacci(n){//time complexity O(n)
//   let result = [];
//   for(let i = 0; i <= n; i++){
//     if(i < 2){
//       result.push(i);
//     }
//     else{
//       result.push(result[i-2]+result[i-1]);
//     }
//   }
//   return result[n];
// }

// fibonacci(2);


//memoizer
function memoize(fn){
  let cache = {}; //record of all the previous calls to this function
  return function(...args){
    if(cache[args]){
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  } 
}

//recursive
function slowFib(n){//time complexity O(2^n) - exponential runtime. For each additional element of collection - the processing power required doubles;
  if(n < 2){
    return n;
  }
  return slowFib(n-1) + slowFib(n-2);
}

const fastFib = memoize(slowFib)

console.log(fastFib(7))
