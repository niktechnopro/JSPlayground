//from codewars



function sortVowels(s){
  //code
  let regex = /[aeiouAEIOU]/gi;
  if(typeof(s) !== "string") return "";
  let str="";
  let char;
  for(let i = 0; i < s.length; i++){
    char = s[i];
    str += (regex.test(char) ? ("|"+char) : (char+"|"));
    if((s.length > 0) && (s.length-1 !== i)){
      str+="\n";
    }
  }
  return str;
}


describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
    Test.assertEquals(sortVowels('Rnd Te5T'), 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
    Test.assertEquals(sortVowels(1337), '');
    Test.assertEquals(sortVowels(undefined), '');
  });
});