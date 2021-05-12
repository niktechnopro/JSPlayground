let test1 = [1,2,3,4];
let test2 = [1,2,3,4,5]; //---> [[1,2],[3,4],[5]]


function chunk(arr, chk){
  console.log(arr, chk);
  //make a copy of input array
  let arrayCopy = [...arr];
  let chunkedArray = [];
  // The splice() method returns an array with the deleted items
  while(arrayCopy.length >= chk){//do chunking
    chunkedArray.push(arrayCopy.splice(0,chk));
  }
  //check if anything left in arrayCopy
  if(arrayCopy.length > 0){
    chunkedArray.push(arrayCopy);
  }
  return chunkedArray;
}

//another way
//slice also returns new array with selected items - does not mutate original array
// function chunk(array, size){
//   let chunked = [];
//   let index = 0;

//   while(index < array.length){
//     chunked.push(array.slice(index, index+size));
//     index += size;
//   }
//   return chunked;
// }

//and another way
// function chunk(array, size) {
//   let chunked = [];
//   for(let i=0; i < array.length; i+=size){
//     chunked.push(array.slice(i,i+size))
//   }
//   return chunked;
// }

console.log(chunk(test2, 2));