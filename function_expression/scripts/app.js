'use strict';

// Using function Declaration , it will not throw error
/**
sayHi();
function sayHi(){
	alert("Hi");
}
*/

/**
sayHi();//throw an error 
var sayHi= function(){
	alert("Hi");

}
*/

//never use like this , This pattern is dangerous and should not be  used.
 var condition=true;
 if ((condition)) {
 	function sayHello(){
 		alert("Hello");
 	}
 }
 else{
 	function sayHello(){
 		alert("Hello");
 	}
 }

//It is ok to use 

var  printWelcome;

if (condition) {
	printWelcome=function(){
		alert("Welcome Rana");
	};
}
else{
	printWelcome= function(){
     alert("Welcome agian");
	};
}

// To return function as value of other function

function createComparisionFunction(propertName){
  return function(Object1, Object2){
   var value1= Object1[propertyName];
   var value2= Object2[propertyName];
   if (value1<value2) {
   	return -1;
   }else if (value1>value2) {
   	return 1;
   }else{
   	return 0;
   }
  };
}

//recursive function
function factorial(num){
  if ((num<=1)) {
  	return 1;
  }else{
  	return num*factorial(num-1);
  }
}
// write using arguments.callee 

function factorial(num){
   if ((num<=1)) {
   	return 1;
   }else{
   	return num*arguments.callee(num-1);
   }
}

//it is possible to prevent it from functioning by running the following code immeddiately.

var anotherFactoial= factorial;
factorial=null;
alert(anotherFactoial(4));//error;

// named function  expression

var factorial= (function f(num){
  if (num<=1) {
  	return 1;
  }else{
  	return num*f(num-1);
  }
});

//Closure example
function createComparisionFunction(propertName){
  return function(Object1, Object2){
   var value1= Object1[propertyName];
   var value2= Object2[propertyName];
   if (value1<value2) {
   	return -1;
   }else if (value1>value2) {
   	return 1;
   }else{
   	return 0;
   }
  };
}
