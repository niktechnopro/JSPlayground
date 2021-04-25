//type in type script warns of cercing number into string

var n : Number = 1;

n = "rob"; //gives compilation warning


var m : any = 1;

m = "rob"; //should not give any error as m type is any

//Vector - an array that only contains one type of variables
var names : string[] = ["Nik", "kyle", "sandeep"];

//to make
var nms : any[] = ["Nik", 1, "kyle"]; //types can be mixed

// enum - to store in variables - or consts
//Enums are used to represent a fixed number of possible values. 
//Use enums if there are a definite number of fixed values for any one variable
enum Starks {Jon, Bran, Eddard, Catlyn};

var cat : Starks = Starks.Catlyn;


function getName() : string{//function returns string
	return "Nik";
}


//Interfaces - also allow to create custom properties
interface Stark {
	name: string;
	age?: number;//optional - this parameter is not required while using an interface
}

function printName(obj: Stark){
	console.log(obj.name);
}

printName({ name: "Nik" });


//Classes


class Stark  {
	name: string;

	constructor(){

	}

	say(){
		console.log("great");
	}
}


var mStark = new Stark();
mStark.say();
console.log(mStark);


//Inheritance
class Person{
	name: string;

	constructor(name: string){
		this.name = name; //this. - refers to an object that will be created
	}

	dance(){
		console.log(this.name + " is dancing");
	}
}

var bran = new Person("Bran");
bran.dance();

class Human extends Person{

	// constructor(name: string){//not really needed here as using constructor from parent
	// 	super(name);
	// }

	dance(){
		// console.log(" Awesome " + this.name);
		super.dance();
	}

}

var bob = new Human("Bob");
bob.dance();











