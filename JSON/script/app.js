'use strict';
//To convert JSON into JavaScript age

 var obj= JSON.parse('{"name":"Nicholas","age": 90,"city": "New York"}');
 
  document.getElementById("demo").innerHTML= obj.name +"," +obj.age;

// To Covert javascript object into JSON.

var person={
	name:"Greek",
	age:20,
	city: "New York"
};

var jsonText= JSON.stringify(person);
alert(jsonText);