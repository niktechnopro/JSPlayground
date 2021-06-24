//longest common prefix
// let strs = ["flower","flow","flight"];
// let strs = ["dog","racecar","car"];
// let strs = ["cir","car"];
// let strs = [""];
let strs = ["a"];


var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";

    //find a smallest word and break it into pattern
    let lengthOfWords = [];
    for(word of strs){
      if(word.length > 0){
        lengthOfWords.push(word.length);
      }
    }

    if(lengthOfWords.length === 0) return "";

    let pattern = strs[lengthOfWords.indexOf(Math.min(...lengthOfWords))];
    // console.log("word for pattern pattern", pattern)
    //now that we have the pattern - let's iterate through words and see what matches
    let p = "";
    for(let idx=0, n = pattern.length; idx < n; idx++){
      p += pattern[idx];
      let charRegExp = new RegExp("\\b"+p, "gi");//creates /\b+pattern/gi
      // console.log(charRegExp)
      for (let word of strs){
        // console.log(word.match(charRegExp))
        if(word.match(charRegExp)){
          //match confirmed
          // console.log("match", p) 
        }
        else{
          if(p.length>0){
            return p.slice(0,p.length-1);
          }
          return "";
        }
      }
    }
    return p
};

//another possible way
// public String longestCommonPrefix(String[] strs) {
//     if (strs.length == 0) return "";
//     String prefix = strs[0];
//     for (int i = 1; i < strs.length; i++)
//         while (strs[i].indexOf(prefix) != 0) {
//             prefix = prefix.substring(0, prefix.length() - 1);
//             if (prefix.isEmpty()) return "";
//         }        
//     return prefix;
// }


// Input: strs = ["flower","flow","flight"]
// Output: "fl"

longestCommonPrefix(strs);