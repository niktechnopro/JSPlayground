
const mapping = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40, 
  XC: 90,
  CD: 400,
  CM: 900
}

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

const regOne = /IV/g;
const regTwo = /IX/g;
const regThree = /XL/g;
const regFour = /XC/g;
const regFive = /CD/g;
const regSix = /CM/g;

const regexps = [
  regOne, regTwo, regThree, regFour, regFive, regSix
];

// the search() method to return the first occurrence

var romanToInt = function(num) {
    //convert to array
    let numArray = num.split("");
    //let's find if we have any regEx in num
    for(let reg of regexps){
      if(reg.test(num)){
        let regOccurenceIdx = num.search(reg);
        let match = num.match(reg);
        numArray.splice(regOccurenceIdx, 2, match[0]);//find match and substitute
      }
    }
    // console.log(numArray)
    //now we need to substitute with numbers and calculated
    let sum = 0;
    for(let n of numArray){
      sum += mapping[n];
    }
    return sum;
};

// Input: s = "III"
// Output: 3

romanToInt("III");