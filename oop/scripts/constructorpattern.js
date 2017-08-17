'use strict';

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.sayName = function(){
alert(this.name);
};
}
var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
var person2 = new Person(“Greg”, 27, “Doctor”);

//use of constructor property.
alert(person1.constructor == Person); //true
alert(person2.constructor == Person); //true

// use of indatneof- often used
alert(person1 instanceof Object); //true
alert(person1 instanceof Person); //true
alert(person2 instanceof Object); //true
alert(person2 instanceof Person); //true

//  Contructor as function

//use as a constructor

var person = new Person(“Ram”, 29, “Software Engineer”);
person.sayName(); //”Ram”
//call as a function
Person(“Shyam”, 27, “Doctor”); //adds to window
window.sayName(); //”Shyam”
//call in the scope of another object
var o = new Object();
Person.call(o, “Kristen”, 25, “Nurse”);
o.sayName(); //”Kristen”


//problem with constructor

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.sayName = new Function(“alert(this.name)”); //logical equivalent
}

alert(person1.sayName == person2.sayName); //false

//To avoid this problem
//If the object needed multiple methods, that would
//mean multiple global functions, and all of a sudden the custom reference type defi nition is no longer
//nicely grouped in the code.

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.sayName = sayName;
}
function sayName(){
alert(this.name);
}
var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
var person2 = new Person(“Greg”, 27, “Doctor”);






