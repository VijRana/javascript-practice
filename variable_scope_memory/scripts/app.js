'use strict';

var message= "Primitive type";
message=" Second Primitive type value";

//alert(message);

//Reference Type...................................................................

var person= new Object();
person.name="Nicholas";
//alert(person.name);

//  In primitive, we can not add property, to do so it will  throw error;

/**
var name= "Nicholas";
 name.age=27;
 alert(name.age);
 */
 
 //Copying values, two are not affecting each other
/**
 var num1=5;
 var num2= num1;
 alert(num2);
 */

 // but in the refernce type , modifying  will effect in other object

/**
 var object1= new Object();
 var object2= object1;
 object1.name="Nicholas";
 alert(object2.name);
*/
 // When passing by reference , changes in local affecting outside of the function

 function addItem(num){
    num+=10;
    return num;
 }

var count=20;
var result= addItem(count);
//alert(count);
//alert(result);

// Passed by value but taking as reference value
 function setName(obj){
   obj.name="Nicholas";
 }

 var person= new Object();
  setName(person);
  alert(person.name);

//typeof is good for primitive type,but ECMAscript provide instanceof operator
alert(person instanceof Object);
