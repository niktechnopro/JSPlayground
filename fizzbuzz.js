function fizzBuzz(n){
  let str = "";
  for (let i = 1; i <= n; i++){
    if(i % 3 === 0) str += "fizz";
    if(i % 5 === 0) str += "buzz";
    // if(i % 3 === 0 && i % 5 === 0)console.log("fizzBuzz")
    // if(str) console.log(str + " : " + i);
    if(str){
      console.log(str);
    } 
    else{
      console.log(i);
    }
    str = "";
  }
}

fizzBuzz(15);