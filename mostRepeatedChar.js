//find the most met character in the String
const str = "hello there";

function findChar(str){
  let ds = new Object();
  //placing letters into object
  for(let char of str){
    if(ds[char]){
      ds[char] += 1;
    }
    else{
      ds[char] = 1;
    }
  }
  
  //iterating through an Object
  let temp = 0;
  let ch = ""
  for(let prop in ds){
    if(temp < ds[prop]){
      temp = ds[prop];
      ch = prop;
    }
  }

  return {
    characher: ch,
    repeats: temp
  }
}

//big O(str.length + ds.length)

findChar(str);