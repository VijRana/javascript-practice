'use strict';

  function printingNumber(){
  	var number=0;
  	for(var i=1; i<10; i++){
      if (i%5==0) {
         continue;
      }
      number++
  	}
  	alert(number);
  }

  printingNumber();

  /** 
       we can use continue and break with label to reach particular code.
       Generally used  within there are loop inside the loop
 
  */
    var num=0;
    outermost:
           for(var i=0; i<10; i++){
             for(var j=0; j<10; j++){
                if(i==5 && j==5){
                  break outermost;
                }
                num++;
             }
           }
           alert(num);

var num=0;
    outermost:
           for(var i=0; i<10; i++){
             for(var j=0; j<10; j++){
                if(i==5 && j==5){
                  continue outermost;
                }
                num++;
             }
           }
           alert(num);

 function evalution(){
 	alert("Strict mode sample");
 }  
evalution();




