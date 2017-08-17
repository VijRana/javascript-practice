'use strict';

  if (document.body.firstElementChild){
            var i,
                len,
                child = document.body.firstElementChild;
                
            while(child != document.body.lastElementChild){
                document.write("<p>" + child.tagName + "</p>");
                child = child.nextElementSibling;
            }
        } else {
            document.write("<p>Element Traversal API not supported.</p>");
        }   
