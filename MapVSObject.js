//MAP vs Object - Map is iterable and keys are ordered
//to init - constructor - new Map();

let demoMap = new Map();

demoMap.set("Rob", "Cool Teacher");
demoMap.set("Nick", "Very Intellegent");
demoMap.set("Nikolas", "Team Leader");

console.log(demoMap);//{"Rob" => "Cool Teacher", "Nick" => "Very Intellegent", "Nikolas" => "Team Leader"}
console.log(demoMap.entries());//{"Rob" => "Cool Teacher", "Nick" => "Very Intellegent", "Nikolas" => "Team Leader"}
for(let entry of demoMap.entries()){
  console.log(entry);
}

for (let [key, value] of demoMap.entries()){
  console.log(key + ' : ' + value);
}


//Weak Map:
//1 - allows garbage collection if the key has no refference;
//2 - not iterable;
let weakMap = new WeakMap();


