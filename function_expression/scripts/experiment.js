//private and private function: data should not changed directly.

function Person(name){
   this.getName= function(){
   	return name;
   }
   this.setName= function(value){
    name= value;
   }
}

 var person = new Person("Pradeep!!!!");
 alert(person.getName());

  person.setName("Vicky");
  console.log(person.getName());


//But in each insatnce of object , new method instance created. to solve problem

(function(){
//private variables and functions
var privateVariable = 10;
function privateFunction(){
return false;
}
//constructor
MyObject = function(){
};
//public and privileged methods
MyObject.prototype.publicMethod = function(){
privateVariable++;
return privateFunction();
};
})();

//

(function(){
var name = “”;
Person = function(value){
name = value;
};
Person.prototype.getName = function(){
return name;
};
Person.prototype.setName = function (value){
name = value;
};
})();
var person1 = new Person("Ram");
alert(person1.getName()); //Ram
person1.setName("Shyam");
alert(person1.getName()); //Shyam
var person2 = new Person(“Michael”);
alert(person1.getName()); //”Michael”
alert(person2.getName()); //”Michael”


//modular pattern

var singleton = {
name : value,
method : function () {
//method code here
}
};

var singleton = function(){
//private variables and functions
var privateVariable = 10;
function privateFunction(){
return false;
}
//privileged/public methods and properties
return {
publicProperty: true,
publicMethod : function(){
	privateVariable++;
return privateFunction();
}
};
}();


var application = function(){
//private variables and functions
var components = new Array();
//initialization
components.push(new BaseComponent());
//public interface
return {
getComponentCount : function(){
return components.length;
},
registerComponent : function(component){
if (typeof component == “object”){
components.push(component);
}
}
};
}();

