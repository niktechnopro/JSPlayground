const possible_codes = "1", "2", "3"];
var item;
let newArray = [];
let result = "";

const timer = setInterval(()=>{
  //generate random number
  item = possible_codes[Math.floor(Math.random() * possible_codes.length)];
  // console.log(item)
  if(newArray.length < 3){
    newArray.push(possible_codes[item-1])
  }

  if(newArray.length === 3){
    for(let idx = 0; idx < newArray.length; idx += 1){
      if(newArray[idx] === possible_codes[idx]){
        result += "1";
      }
    }
    newArray = [];
  }
  console.log("result: ", result)
  if(result === "111"){
    console.log("we got a match - launch the logic");
  }

  result = "";

}, 500);


