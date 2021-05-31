let s = "i am here";
// let s = "some text to capitalize";

//SolutionOne
function capitalize(str){
  let temp = "";
  for(let b = 0; b < str.length; b++){
    if(b === 0){
      str = str.charAt(0).toUpperCase() + str.slice(1);
    }else if(str[b-1] === " "){
      // console.log("executes: ", str[b], str)
      str = str.substring(0,b) + str[b].toUpperCase() + str.slice(b+1);
    }
  }
  return str;
}

//SolutionTwo - with list
function capitalize(str){
  for(let b = 0; b < str.length; b++){
    if(b === 0){
      str = str.charAt(0).toUpperCase() + str.slice(1);
    }else if(str[b-1] === " "){
      console.log("executes: ", str[b])
      str = str[b].toUpperCase() + str.slice(1);
    }
  }
  return str;
}

//solution 3
// let str = "I am the greatest!";
function capitalize(str){
  let firstLetter = "";
  for (let i = 0, l = str.length; i < l; i+= 1){//more efficient construct
    if(i === 0){
      str = str.charAt(0).toUpperCase().concat(str.slice(1));
    }
    if(str[i+1] && str[i] === " "){
      firstLetter = str.substring(i+1, i+2).toUpperCase();
      str = str.substring(0, i+1) + firstLetter.concat(str.substr(i+2));
    }
  }
  return str;
}


//TODO - to add a method with an Array;
//convert into array
function capitalize(str){
  let arr = str.split(" ");
  //iterate through array and capitalize first firstLetter
  for(let i = 0, n = arr.length; i < n; i+=1){
    arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

//compose the string from array

//another way
function capitalizeFirstLetter(str){
  let theFirstChar;
  for(let idx = 0, n = str.length; idx < n; idx += 1){
    if((idx === 0 && (str.charAt(0) !== " ")) || str.charAt(idx - 1) && (str.charAt(idx-1) === " ")){
      theFirstChar = str.charAt(idx).toUpperCase();
      str = str.slice(0, idx) + theFirstChar + str.slice(idx+1);
    }
  }
  return str;
}

capitalizeFirstLetter(str);

capitalize(s);