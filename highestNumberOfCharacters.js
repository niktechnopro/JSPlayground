//find max number of characters
let str = "Hello World";
// let kv = {};
// //create the object that holds all letters count
// for (let ch of str){
//   //one way
//   // if(kv.hasOwnProperty(ch)){
//   //   //increase value
//   //   kv[ch]++;
//   // }
//   // else{//add to object
//   //   kv[ch] = 1;
//   // }
  
//   //another way
//   kv[ch] = kv[ch] + 1 || 1;
// }

// console.log(kv);

function maxChar(str){
  //build the MAP of characters in string
  const kvmap = {};
  for(let ch of str){
    kvmap[ch] = kvmap[ch] + 1 || 1;
  }
  //find the highest value
  let highest = Math.max(...Object.values(kvmap));
  // console.log(kvmap, highest);

  //one way
  return Object.keys(kvmap).find(key => kvmap[key] === highest);

  //another way
  highest = 0;
  let char = "";
  for (let key in kvmap){
    if(kvmap[key] > highest){
      highest = kvmap[key];
      char = key;
    }
  }
  return char;
}

console.log("the most often value: ", maxChar(str));