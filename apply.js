var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  addNumbers: function(a, b, c){
    return this.firstName + " just calculated " + a + " " + b + " " + c;
  }
}
//implicit rule of “this” for JS - it’s value in nested objects always going to be “this” of closest parent;
//In JS whenever you see <call>, <apply>, <bind> (only used on functions) -  first parameter of a call method is what we want “this” to refer to;


var ellie = {
  firstName: "Ellie",
  // sayHi: function(){
  //   return "Hi " + this.firstName;
  // }
}

console.log(colt.sayHi());
console.log(colt.addNumbers.call(ellie, 1, 3, 5));
console.log(colt.sayHi.apply(ellie));
console.log(colt.addNumbers.apply(ellie, [1, 2, 3]));
//for apply - similar to call, but accepts second parameter as an array
