//return the character that is used the most inside that string

const sample = "aabbbcccccdddddddddeeeeeeeeeeeefffff";

function whatUsedTheMost(str){
  const mMap = new Map();
  let prevCount = 0;
  //building a map
  for(let char of sample){
    if(mMap.get(char)){//means that char exists in map
      prevCount = mMap.get(char);
      mMap.set(char, prevCount+1);
    }
    else{
      mMap.set(char, 1);
    }
  }

  let mostRepeated = 0;
  let obj = {};
  //finding highest number
  for(let [key, value] of mMap){
    if(value > mostRepeated){
      obj = {};
      mostRepeated = value;
      obj[key] = value;
    }
  }

  // return obj;//returns an object
  return Object.keys(obj)[0];//returns key
}

//another way
// function maxChar(str) {
//    //build the MAP of characters in string
//   const kvmap = {};
//   for(let ch of str){
//     kvmap[ch] = kvmap[ch] + 1 || 1;
//   }
//   //find the highest value
//   let highest = Math.max(...Object.values(kvmap));
//   // console.log(kvmap, highest);
//   return Object.keys(kvmap).find(key => kvmap[key] === highest); 
// }

whatUsedTheMost(sample);
