//'use strict';
//Simple way to create Custom Object
/**
var person = new Object();
person.name = “Nicholas”;
person.age = 29;
person.job = “Software Engineer”;
person.sayName = function(){
alert(this.name);
};

//OR

var person = {
name: “Nicholas”,
age: 29,
job: “Software Engineer”,
sayName: function(){
alert(this.name);
}
};
*/

/**
// writable,value attribute example
var person= {};
Object.defineProperty(person,"name",{
 writable:false,

 value:"Rana"
});

alert(person.name);//
person.name="Ravina";
alert(person.name);//
*/
/**
// configurable example
var person= {};
Object.defineProperty(person,"name",{
 configurable:false,

 value:"Rana"
});

alert(person.name);//
delete person.name;
alert(person.name);// Rana
*/

/**
//try to modify twice
var person = {};
Object.defineProperty(person, “name”, {
configurable: false,
value: “Nicholas”
});
//throws an error
Object.defineProperty(person, “name”, {
confi gurable: true,
value: “Nicholas”
});

*/
//Accessor properties 

var book={
_year:2004,
edition:1
};

Object.defineProperty(book,"year",{
get: function(){
	return this._year;
},
set: function(newValue){
      if(newValue >2004){
          this._year= newValue;
          this.edition+=newValue-2004;
      }
}
});

book.year = 2005;
alert(book._year);
alert(book.edition); //2

// For Multilple properties.

var book = {};
Object.defineProperties(book, {
_year: {
value: 2004
},
edition: {
value: 1
},
year: {
get: function(){
return this._year;
},
set: function(newValue){
if (newValue > 2004) {
this._year = newValue;
this.edition += newValue - 2004;
}
}
}
});

//Reading property attribute
var descriptor = Object.getOwnPropertyDescriptor(book, “_year”);
alert(descriptor.value); //2004
alert(descriptor.configurable); //false
alert(typeof descriptor.get); //”undefi ned”
var descriptor = Object.getOwnPropertyDescriptor(book, “year”);
alert(descriptor.value); //undefi ned
alert(descriptor.enumerable); //false
alert(typeof descriptor.get); //”function”

















