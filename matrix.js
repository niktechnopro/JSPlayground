//matrix.js

function matrix(n){
  //create empty matrix
  let mainArray = [];
  for(let i = 0; i < 3; i++){
    mainArray.push(new Array(n).fill());
  }
  // return mainArray;
  //once matrix crated - add logic to fill it in
  console.log(mainArray);
  // return mainArray;
  let counter = 1;
  let startColumn = 0;
  let endColumn = n -1;
  let startRow = 0;
  let endRow = n - 1;

  //first row assembling
  // for(let i = 0; i <= endColumn; i++){
  //   mainArray[0][i] = i+1;
  // }
  while(startColumn <= endColumn && startRow <= endRow){
    //first for loop is responsible for assembling a top row of our solution
    for(let i = startColumn; i <= endColumn; i++){
      mainArray[startRow][i] = counter;
      counter++;
    }
    //moving to the next row
    startRow++;

    //next for loop is responsible for defining last column
    //so we iterate through rows and the last column
    for(let i = startRow; i<=endRow; i++){
      mainArray[i][endColumn] = counter;
      counter++;
    }
    //now we are done with endColumn and we can move to column right before that
    endColumn--;

    //populating bottomRow
    for(let i=endColumn; i >= startColumn; i--){
      mainArray[endRow][i] = counter;
      counter++;
    }
    //now that we are done with last row, let's move to row before
    endRow--;

    //start column
    for(let i=endRow; i>=startRow; i--){
      mainArray[i][startColumn] = counter;
      counter++;
    }

    //moving into inner row
    startColumn++;

  }
  console.log(mainArray)
}

matrix(3);
