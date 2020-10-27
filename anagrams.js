//anagram - letters can be rearraanged to form different word/sentence
let stringA = "rail safety";
let stringB = "Fairy Taless"
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
        break;
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
  if(Object.keys(objA).length > Object.keys(objB).length){
    return comparingObjects(objA, objB);
  }
  return comparingObjects(objB, objA);
}

console.log(anagrams(stringA, stringB));