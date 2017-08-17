//'use strict';

var color="blue";

function changeColor(){
    if (color=="blue") {
    	color="red";
    }else{
    	color="blue";
    }
    alert(color);
}
changeColor();

// In this example ,the function has scope chain with two object in it.  its own variable(upon which argument object is defined ) and global conext object.
// color is therefore accisible because it is found in scope chain.

  var color="blue";
  function changeColor(){
  	var anotherColor= "red";

  	function swapColors(){
  		var tempColor= anotherColor;
  		anotherColor=color;
  		color=tempColor;
  		//color, anotherColor, and tempColor are all accesible here
  	}
  	// color and anotherColor is accessible here but not tempColor
  	swapColors();
  }

// Variablee Declaration

/**
function add(num1, num2){
   var sum= num1+num2;
   return sum;
}
var result= add(10,20);
alert(sum);//cause an error
*/
 
 
function add(num1,num2){
 sum = num1+num2;
 return sum;
}
var result= add(20,10);
alert(sum);// 30

//Identrifier example
var color="blue";
function getColor(){
	return color;
}
alert(getColor());

// Globlal Context
 var color= "blue";
 function getColor(){
 	var color= "red";
 	return color;
 }
 alert(getColor());// red
 alert(window.color);// blue
