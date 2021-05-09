//another solution would be to make arrays of keys, then sort and compare

//anagram - letters can be rearraanged to form different word/sentence
let stringA = "rail safety";
let stringB = "Fairy Tales"
//word.replace(/[^\w]/g, "").toLowerCase();


function anagrams(stringA, stringB){
  //helper function one
  function objBuilder(str){
    let obj = {}
    for(let chk of str){
      if(obj[chk]){
        obj[chk]++;
      }
      else{
        obj[chk] = 1;
      }
    }
    return obj;
  }
  //helper function 2
  function comparingObjects(gr, lw){
    for(let l of Object.keys(gr)){
      if(gr[l] !== lw[l]){
        return false;
      }
    }
    return true;
  }

  //let's normalize - remove all characters and empty spaces
  let normA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let normB = stringB.replace(/[^\w]/g, "").toLowerCase();
  //get the objects with map
  let objA = objBuilder(normA);
  let objB = objBuilder(normB);
  //compare which obj is greater
  if(Object.keys(objA).length !== Object.keys(objB).length){//immediate false;
    return false;
  }
  return comparingObjects(objB, objA);
}

console.log(anagrams(stringA, stringB));


//just to calculate number of characters in string - using Map
function numberOfCharacters(str){
  str=str.replace(/\s/g, '').toLowerCase();
  let mMap = new Map();
  for (let char of str){
    if(mMap.has(char)){
      let count = mMap.get(char)+1;
      mMap.set(char, mMap.get(char)+1);
    }
    else{
      mMap.set(char, 1);
    }
  }
  return mMap;
}



let text = "I am a sexy person";

let result = numberOfCharacters(text);
console.log(result);


for (let [key, value] of result.entries()){
  console.log("char: ", key, " : repets: ", value);
}