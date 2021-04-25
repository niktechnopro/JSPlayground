//type in type script warns of cercing number into string
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var n = 1;
n = "rob"; //gives compilation warning
var m = 1;
m = "rob"; //should not give any error as m type is any
//Vector - an array that only contains one type of variables
var names = ["Nik", "kyle", "sandeep"];
//to make
var nms = ["Nik", 1, "kyle"]; //types can be mixed
// enum - to store in variables - or consts
//Enums are used to represent a fixed number of possible values. 
//Use enums if there are a definite number of fixed values for any one variable
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    return "Nik";
}
function printName(obj) {
    console.log(obj.name);
}
printName({ name: "Nik" });
//Classes
var Stark = /** @class */ (function () {
    function Stark() {
    }
    Stark.prototype.say = function () {
        console.log("great");
    };
    return Stark;
}());
var mStark = new Stark();
mStark.say();
console.log(mStark);
//Inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name; //this. - refers to an object that will be created
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var bran = new Person("Bran");
bran.dance();
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(name: string){//not really needed here as using constructor from parent
    // 	super(name);
    // }
    Human.prototype.dance = function () {
        // console.log(" Awesome " + this.name);
        _super.prototype.dance.call(this);
    };
    return Human;
}(Person));
var bob = new Human("Bob");
bob.dance();
