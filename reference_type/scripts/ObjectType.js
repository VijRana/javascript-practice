'use strict';

// First way to create  Object.

var object = new Object();
object.name="name";
object.age=19;

alert(object.age);

// second wat to create using Object Literal, recoomeded when you are going  to specify properties for readability.
var person={
	name:"Twinke",
	age:19
};
  alert(person.name);

// Object literal for large number of optional arguments.
function dispalyInfo(args){
  var output="";
  if (typeof args.name=="string") {
  	output+="Name:" +args.name+"\n";
  }
  if (typeof args.age=="number") {
  	output+="Age: " +args.age +"\n"; 
  }
  alert(output);
}

dispalyInfo({
name: "Twinke",
age:19
});

dispalyInfo({
name:"Rana"
});
//using  suare brackets 
alert(person["name"]);



