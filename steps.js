//one sided steps

//iterative solution
// function steps(n){
//   console.log(n)
//   for(let i = 1; i<=n; i++){
//     let str = "#".repeat(i) + " ".repeat(n-i);
//     console.log(str);
//   }
// }


//recursive solution
// function steps(...args){
//   let n = args[0];
//   let tempHelper = args[1] ? args[1] : n;
//   //base condition/case - when we exit
//   if(n <= 0){
//     return;
//   }
//   let str = "#".repeat(tempHelper - n + 1).concat(" ".repeat(n-1));
//   console.log(str)
//   steps(n-1, tempHelper);
// }

//recursive solution #2, works same way, but as default value of arguments;
function steps(n, tempHelper = n){//tempHelper - is a row;
  //base condition/case - when we exit
  if(n <= 0){
    return;
  }
  let str = "#".repeat(tempHelper - n + 1).concat(" ".repeat(n-1));
  console.log(str)
  steps(n-1, tempHelper);
}

//another iterative solution
// function steps(n){
//   let stairsRow = "";
//   for(let row=0; row < n; row++){
//     stairsRow = "";
//     for(let column=0; column < n; column++){
//       if(column <= row){
//         stairsRow += "#";
//       }
//       else{
//         stairsRow += " ";
//       }
//     }
//     console.log(stairsRow)
//   }
// }


steps(5);