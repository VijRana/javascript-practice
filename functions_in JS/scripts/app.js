//'use strict';

  
  function sayHi(name, message){
    alert("Hello " +name+"," +message);
}

    sayHi("Twinkle","How are you today?");

  function isChecking(){
  	var number=0;
  	for(var i=1; i<10; i++){
       if(i%5==0){
           continue;
       }
       number++;
  	}
  	return number;

  	alert("ohh Yes io got it function!!!");
  }

  var result= isChecking();
  alert(result);

/**
function sayHi(){
	alert("Hello world!!!!");
}
sayHi();
*/

function sayHello(name,message){
	alert("Hello" + arguments[0] +" " +arguments[1]);
	alert(arguments.length);
}
sayHello("Rana","Good Morning!!");

function howManyArguments(){
	alert("Number of arguments    " +arguments.length);
}

howManyArguments("Rana", 1234, 78978);
howManyArguments("Welcoxme", "Ram");

function addNumber(){
	if(arguments.length==1){
      alert(arguments[0] +10);
	}
	else if (arguments.length==2) {
		alert(arguments[0] + arguments[1]);
	}
}

addNumber(10);
addNumber(20, 90);
