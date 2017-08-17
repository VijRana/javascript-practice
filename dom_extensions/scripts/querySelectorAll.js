//  querySelectorAll()- accepts one arguments as CSS query and return all matches nodes instead of one node,
//it return a static instance of NodeList.

if(document.querySelectorAll){
    //get all <em> elements in a <div> (similar to getElementsByTagName("em"))
    var ems= document.getElementById("myDiv").querySelectorAll("em");
    console.log(ems.length);

    //get all elements with class of "selected"

    var selecteds= document.querySelectorAll(".selected");
    console.log(selecteds.length);

    //get all <strong> elements inside of <p> elements

    var strongs= document.querySelectorAll("p strong");
    console.log(strongs.length);
}else{
	console.log("Not Supported in Browser!!!");
}
// we can iterat nodeList ..........

var i,len,strong;

for(i=0, len= strongs.length; i<len; i++){
   strong= strongs[i];
   strong.className="important";
}