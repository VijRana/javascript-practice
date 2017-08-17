'use strict';
 
function sayHi(){
	alert("Hello" +arguments[0] +" " +arguments[1]);
}
sayHi("Rana", "Rohit");

// There is no validation against named arguments, allow developoer to add any number of argumants.

function howManyArguments(){
	alert(arguments.length)
}
howManyArguments("String",56);
howManyArguments("Welcome");

// To add any number of arguments
function addAll(){
	if ((arguments.length==1)) {
		alert(arguments[0]+10);
	}else if(arguments.length==2){
      alert(arguments[0] +arguments[1]);
	}
}
addAll(10);
addAll(30,20);
// it can be used in conjuction with named parameter.

function doAdd(num1, num2){
    if (arguments.length==1) {
    	alert(num1+10);
    }else if(arguments.length==2){
     alert(arguments[0]  +arguments[1]);
    }
}
doAdd(20);
doAdd(20,76);

//another fact of arguments is that it's value always sync with value of corresponding  named parameter.

function doAddinSync(num1, num2){
    arguments[1]=10;
    alert(arguments[0] +num2);
}
doAddinSync(20,90);

//No Overloading

function addSomeNumber(num){
   return num + 100;
}
function addSomeNumber(num){
    return num+200;
}

var result= addSomeNumber(100);
alert(result);
