// The bind() method creates a new function that, when called, has its "this" keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.



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


//bind returns function definition - so we need a set of () to run this function
console.log(colt.sayHi());
console.log(colt.sayHi.bind(ellie)());
console.log(colt.addNumbers.bind(ellie, 1, 2, 3)());//takes arguments separately
//for apply - similar to call, but accepts second parameter as an array

var bob = {
  firstName: "bob",
  sayHi: function(){
    firstNames: "booba",
    setTimeout(function(){
      console.log(this);//refers to global scope here
    }, 1000);
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }.bind(this), 1000);
  }
}


console.log(bob.sayHi());
