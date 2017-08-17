'use strict ';

/**
// Usiong Array Type.
var colors= new Array();

//we can pass count

var colors= new Array(20);

//We can add already defined  values 
var colors= new Array("red","blue","green");

//We can omoit new operator having same result:

var colors= Array(3);
//OR
var names= Array("Twinkle");

//  using Array Literals
*/

var colors= ["red","blue","green"];
alert(colors[0]);
colors[2]="black";
colors[3]="Browns";

// To get Length
 alert(colors.length);
 // an uniue character is that length id not read only

 var options= ["options1","options2","options3"];
 options.length=2;
 alert(options[2]);

 //length property is useful i adding item to the end of Array.

  var values=["red","'blue"."green"];
  
  values[values.length]="balck";
  values[values.length]="brown";

  values[99]= "black";
  alert(values.length);

  //To detect Array Type  with one global context is fine
  alert(values instanceof Array);

  // if you need to pass array from one  frame to second frame.
   alert(Array.isArray(values));

   // Conversiion Technniue. using Inherited method , toLocaleString(), toString(), and valueof().....

   var fruits=["Apple", "Amngo","PineApple","Orange"];

   alert(fruits.toString);
   alert(fruits.valueof());
   alert(fruits);// all return in comma Seprated.

   //using join

   alert(fruits.join("||"));

   // Stack using Push and pop method.

   var trees= new Array();
   var count= trees.Push("Petree","Lotree");
   alert(count);

   trees.Push("polo");
   var item= trees.pop();
   alert(item);
   alert(trees.length);


   //Queue:  using sfhit, push.

   var pens= new Array();
   var count= pens.push("parker","Reylonds","Zepper");
   alert(count);
    count= pens.push("Link");
    alert(count);

    var item= pens.sfhit();
    alert(item);

    alert(pens.length);



