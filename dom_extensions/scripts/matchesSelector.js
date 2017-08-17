// meatchselector was introduced in Selector API Level 2- return or false

//  This method alllow you to easily check if an element would be returned by querySelector or querySelectorAll().

 function matchesSelector(element, selector){
            if (element.matchesSelector){
                return element.matchesSelector(selector);
            } else if (element.msMatchesSelector){
                return element.msMatchesSelector(selector);
            } else if (element.mozMatchesSelector){
                return element.mozMatchesSelector(selector);
            } else if (element.webkitMatchesSelector){
                return element.webkitMatchesSelector(selector);
            } else {
                throw new Error("Not supported.");
            }
        }
        
        if (matchesSelector(document.body, "body.page1")){
            alert("It's page 1!");
        }
