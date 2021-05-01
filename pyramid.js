
//steps
function steps(n){//where n - is number of steps
  console.log("steps: ", n);
  let row;
  for(let i=1; i <= n; i++){//where n = column
    row = "#".repeat(i).concat(" ".repeat(n-i));
    console.log(row);
  }
}

// steps(5);


//pyramid
function piramide(column){
  console.log(column);
  let row;
  for(let i = 1; i <= column; i++){
    row = " ".repeat(column - i) + "*".repeat(i*2-1) + " ".repeat(column-i);
    console.log(row)
  }
}

//super complicated
function piramide(n){
  const midpoint = Math.floor((2*n-1)/2);
  for(let row=0; row<n; row++){
    let level=" ";
    for(let column=0; column < (2*n-1); column++){
      if(midpoint - row <= column && midpoint + row >= column){
        level += "#";
      }
      else{
        level += " ";
      }
    }
    console.log(level);
  }
}

piramide(5);
