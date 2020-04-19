var person = {
  firstName: "Clint",
  sayHi: function(){
    console.log(this === person)
    return "Hi " + this.firstName;
  },
  dog: {
    sayHello: function(){
      return "Hello " + this.firstName;
    },
    determineContext: function(){
      return this === person;
    }
  }
}

console.log(person.sayHi());
console.log(person.dog.sayHello.call(person));//invoking function with owner object as an argument;
console.log(person.dog.determineContext.call(person));//invoking function with the owner object as an argument

var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
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
console.log(colt.sayHi.call(ellie));
