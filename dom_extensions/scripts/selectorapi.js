
// querySelector() - accepts css query and return the first descendent element that matches the pattern or null

  if (document.querySelector) {

  	//get the body element
  	var body=  document.querySelector("body");
  	console.log(body.tagName);
  
  // get the element with ID "myDiv"
    var myDiv= document.querySelector("#myDiv");
    console.log(myDiv);
   
    //get the first element with a class of "selected"
     var selected= document.querySelector(".selected");
    // console.log(selected.innerHTML);

  }else{
  	console.log("Selectos API not supported in this browser!!!!!");
  }