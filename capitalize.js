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

capitalize(s);