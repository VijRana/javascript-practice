'use strict';

//prototype pattern

function Person(){
}
Person.prototype.name = "Rita";
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
alert(this.name);
};
var person1 = new Person();
person1.sayName(); //”Rita”
var person2 = new Person();

person2.sayName(); //Rita

alert(person1.sayName == person2.sayName); //true
//to get prototype

alert(Person.prototype.isPrototypeOf(person1)); //true
alert(Person.prototype.isPrototypeOf(person2)); //true

//getPrototypeOf use

alert(Object.getPrototypeOf(person1) == Person.prototype); //true
alert(Object.getPrototypeOf(person1).name); //Rita

// Lool up for prperty 

function Person(){
}
Person.prototype.name = “Niki”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.name = Vikki;
alert(person1.name); //Vikki - from instance
alert(person2.name); //Niki - from prototype

//After deleting from instance , it is accessiblr from prototype

function Person(){
}
Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.name = “Greg”;
alert(person1.name); //”Greg” - from instance
alert(person2.name); //”Nicholas” - from prototype
delete person1.name;
alert(person1.name); //”Nicholas” - from the prototype

// hasOwnProperty

function Person(){
}
Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
alert(this.name);
};
var person1 = new Person();
var person2 = new Person();
alert(person1.hasOwnProperty(“name”)); //false
person1.name = “Greg”;
alert(person1.name); //”Greg” - from instance
alert(person1.hasOwnProperty(“name”)); //true
alert(person2.name); //”Nicholas” - from prototype
alert(person2.hasOwnProperty(“name”)); //false
delete person1.name;
alert(person1.name); //”Nicholas” - from the prototype
alert(person1.hasOwnProperty(“name”)); //false

//  hasPrototypeProperty
var person = new Person();
alert(hasPrototypeProperty(person, “name”)); //true
person.name = “Greg”;
alert(hasPrototypeProperty(person, “name”)); //false

//Alternate option to create Prototype.

function Person(){
}
Person.prototype = {
name : Kiran,
age : 29,
job : “Software Engineer”,
sayName : function () {
alert(this.name);
}
};

var friend = new Person();
alert(friend instanceof Object); //true
alert(friend instanceof Person); //true
alert(friend.constructor == Person); //false
alert(friend.constructor == Object); //true

//if construtor name is valid

//Keep in mind that restoring the constructor in this manner creates a property with [[Enumerable]]
//set to true
function Person(){
}
Person.prototype = {
constructor: Person,
name : Ritu,
age : 29,
job : “Software Engineer”,
sayName : function () {
alert(this.name);
}
};

// alernative 

function Person(){
}
Person.prototype = {
name : "Ritu",
age : 29,
job : “Software Engineer”,
sayName : function () {
alert(this.name);
}
};
//ECMAScript 5 only – restore the constructor
Object.defi neProperty(Person.prototype, “constructor”, {
enumerable: false,
value: Person
});

//dynamic nature of prototype

var friend= new Person();
Person.prototype.sayHi = function(){
alert(“hi”);
};
friend.sayHi(); //”hi” - works!

// But Error

function Person(){
}
var friend = new Person();
Person.prototype = {
constructor: Person,
name : "Gita",
age : 29,
job : “Software Engineer”,
sayName : function () {
alert(this.name);
}
};
friend.sayName(); //error

//native prototype

alert(typeof Array.prototype.sort); //”function”
alert(typeof String.prototype.substring); //”function”


//we can modify like other prototype

String.prototype.startsWith = function (text) {
return this.indexOf(text) == 0;
};
var msg = “Hello world!”;
alert(msg.startsWith(“Hello”)); //true

//problem with prototype

function Person(){
}
Person.prototype = {
constructor: Person,
name : "Lalitha",
age : 29,
job : “Software Engineer”,
friends : [“Shelby”, “Court”],
sayName : function () {
alert(this.name);
}
};
var person1 = new Person();
var person2 = new Person();
person1.friends.push(“Van”);
alert(person1.friends); //”Shelby,Court,Van”
alert(person2.friends); //”Shelby,Court,Van”
alert(person1.friends === person2.friends); //true

// Solution Constructor and Prototype Pattern

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.friends = [“Shelby”, “Court”];
}
Person.prototype = {
constructor: Person,
sayName : function () {
alert(this.name);
}
};
var person1 = new Person(“Willaim”, 29, “Software Engineer”);
var person2 = new Person(“Mark”, 27, “Doctor”);
person1.friends.push(“Van”);
alert(person1.friends); //”Shelby,Court,Van”
alert(person2.friends); //”Shelby,Court”
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true

//dynamic prototype:

function Person(name, age, job){
//properties
this.name = name;
this.age = age;
this.job = job;
//methods
if (typeof this.sayName != “function”){
Person.prototype.sayName = function(){
	alert(this.name);
};
}
}
var friend = new Person(“Nicholas”, 29, “Software Engineer”);
friend.sayName();




















