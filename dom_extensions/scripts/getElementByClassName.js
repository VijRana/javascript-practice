// Class related Additions--getElementsByClassName- accepts - a string with one  or more class and return a NodeList.


if (document.getElementsByClassName) {
	//highlight all tags with yellow color

	var tags= document.getElementsByClassName("tag");
	for(var i=0, len= tags.length; i<len; i++){
      tags[i].style.backgroundColor="yellow";
	}
	else{
		console.log("getElementsByClassName is not supported!!!!");
	}
}

