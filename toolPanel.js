var imageBox = document.getElementById("imageButton");   
var editTextBox = document.getElementById("textButton");  
var imageDiv = document.getElementById("imageDiv"); 
var textDiv = document.getElementById("writingToolsDiv"); 
slideOpen(textDiv);

imageBox.addEventListener("click", showImageBox, false);

editTextBox.addEventListener("click", showTextBox, false);

function showImageBox(){

slideClose(textDiv );
slideOpen(imageDiv);
}



function showTextBox(){

slideOpen(textDiv);
slideClose(imageDiv);
}

function slideOpen(el){
// el.style.transition="height 1s linear 0s";
el.style.width="100%";
el.style.height="800px";
el.style.visibility="visible";
}

function slideClose(el){
  
 
// el.style.transition="height 1s linear 0s";
el.style.width="0px";
el.style.height="0px";
el.style.border="none";
}



/*

function slideOpenColor(el){
// el.style.transition="height 1s linear 0s";
el.style.height="120px";
el.style.visibility="visible";
}
*/

