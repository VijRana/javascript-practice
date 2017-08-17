//'use strict';

// To see how execution context works.

function compare(value1, value2) {
	 if(value1<value2){
        return -1;
	 }
	 else if(value1>value2){
        return 1;
	 }
	 else{
	 	return 0;
	 }
}

 
//Closure example
function createComparisionFunction(propertyName){
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

//create function
var compareName= createComparisionFunction("name");

// call function
var result= compareName({name:"Avi"}, {name:"Twinkle"});

//alert(result);
compareName=null;

alert(result);

// closure and variable, closure always get last value of containing function.
 function createFunction(){
 	var result= new Array();
    for(var i=0;i<10; i++ ){
     result[i]= function(){
     	return i;
     };
    }
    return result;
 }

// ouput will i=10; for all function. To solve problem
 function createModifiedFunction(){
 	var result= new Array();
 	for(var i=0; i<10; i++){
      result[i]= function(num){
        return function(){
        	return num;
        };
      }(i);
 	}
 	return result;
 }

 //this object
var name= "The Global Objetc ";

var object={
	name:"My Objetc",
	getNameFun: function(){
	return function(){
		return this.name;
	};
  }
};

alert(object.getNameFun()());// The Gobal Object  in non strict, error in strict mode

//To Solve problem, we can store this value in other variable.

 var name="The Global";

 var object={
 	name:"My Object",
 	getNameFun: function(){
 		var that = this;
 		return function(){
          return that.name;
 		};
 	}
 };

 alert(object.getNameFun()());// My Object




// Mimick Block scope
/**
function outPutNumber(count){
  for(var i=0; i<count; i++){
  // alert(i);
  }

  var i;// ignores by browser.
  alert(i);

}
 outPutNumber(10);
*/
 //  anonymous function as private scope

/**
function outputNumber(count){
   (function(){

     for(var i=0; i<count; i++){
       alert(i);
     }
   })();
   alert(i);// error, i is not defined
}

outputNumber(5);
*/

// Private scope used to avoid in polluting global scope
// variable now becomes a variable that is local to anonymous function.

(function(){
   var now= new Date();
   if(now.getMonth()==0 && now.getDate()==1){
    alert("Happy New Year");
   }

})();


// Private Variable, num1, num2, sum are accessible inside function only.

function add(num1, num2){
  var sum= num1+num2;
  return sum;
}

// To use outside of funnction , we can use concept of closure. Priveledged methods

// first way to create Priviledged method in constructor. We can access private variables and functions using public method only.

function MyObject(){
	//private variables and functions
	 var privateVariable=10;

	 function privateFunction(){
	 	return false;
	 }

	 //privilegec method

	 this.publicMethod= function(){
	 	privateFunction++;
	 	return privateFunction();
	 }
}

// we can use private and priviledged members to hide data that should not be changed directly.

function person(name){

	this.getName=  function(){
		return name;
	};

	this.setName= function(value){
     name= value;
	};
}

var person= new person("Geeta");
alert(person.getName());
person.setName("Gopi");
alert(person.getName());

// But there is downside in contructor pattern, so we can use prototype pattern.
//since it is defeined on prototype pattern , so every insatnce  will use the same function.

(function(){
    // private variable and private function
var privateVar=10;

function privateFcn(){
	return false;
}
//constructor
MyObj= function(){

};
//public and priviledge  method
MyObject.prototype.publicMethod= function(){
	privateVar++;
	return privateFcn();
};

}) ();


for(var prop in Function){
   document.write(prop);
}