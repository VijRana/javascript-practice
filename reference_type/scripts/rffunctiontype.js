
// functions are object in ECMA Script and function name is pointer to a function

// function declaration
/**
function sum(num1, num2){
    return num1+num2;
}
*/

// we can use function expression

/**
var sum= function(num1,num2){
   return num1+num2;
}
 */
var modifiedSum= function sum(i1,i2){
	return i1+i2;
}

alert(modifiedSum(10,10));//20
//alert(sum(10,10));// error

//
 var anotherSum= modifiedSum;
 alert(anotherSum(10,20));
 
 modifiedSum=null;
 alert(anotherSum(80,70));

 // function declaration versus function expression

 // only difference , how they read and available in excution contex.


console.log(sum(10,90));
 function sum(num1,num2){
 	return num1+num2;
 }

//console.log(add(90,70));
var add= function(num1,num2){
   return num1+ num2;
};

// function as values

 function callSomeFunction(someFunction,someArguments){
    return someFunction(someArguments);
 }

 function add10(num){
   return num +10;
 }
 var result= callSomeFunction(add10,10);
 console.log(result);

// can  return function

function createComparisionFunction(propertyName){
    return function(object1, object2){
      var valu1= object1[propertyName];
       var valu2= object2[propertyName];
        if(valu1<valu2){
            return -1;
        } else if(valu1>valu2){
             return 1;
        }else{
        	return 0;
        }
    }
}

var data= [
{name: "Rajesh", age: 30},
{name:"Wikki", age: 45}
];
data.sort(createComparisionFunction("name"));

console.log(data[0].name);//Rajesh
data.sort(createComparisionFunction("age"));

// Two special object exist inside an object: arguments, this.

 function factorial(num){
            if (num <= 1) {
                return 1;
            } else {
                return num * arguments.callee(num-1)
            }
        }

        var trueFactorial = factorial;
        
        factorial = function(){
            return 0;
        };
        
        alert(trueFactorial(5));   //120
        alert(factorial(5));       //0

// this object

window.color = “red”;
var o = { color: “blue” };
function sayColor(){
alert(this.color);
}
sayColor(); //”red”
o.sayColor = sayColor;
o.sayColor(); //”blue”

// methods: apply() , call()

function sum(num1, num2){
return num1 + num2;
}
function callSum1(num1, num2){
return sum.apply(this, arguments); //passing in arguments object
}
function callSum2(num1, num2){
return sum.apply(this, [num1, num2]); //passing in array
}
alert(callSum1(10,10)); //20
alert(callSum2(10,10)); //20

//The true power of apply() and call() lies not in their ability to pass arguments but rather in their
//ability to augment the this value inside of the function.













