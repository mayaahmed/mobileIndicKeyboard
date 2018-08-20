
var string = ""
var letter =  document.getElementById("letterDiv");
var display =  document.getElementById("galleryContainer");


function alphabet_write(x)
{
    string=string+x;
    letter.innerHTML = string;
}

letter.onkeypress = function(e) {
    x=String.fromCharCode(e.keyCode);
    string=string+x;
}

var messageButton = document.getElementById('submitMessageButton');
messageButton.addEventListener('click', function (e) {
    string = "";
    e.preventDefault();
});

function keyboard_c()
{
    string = string.substr(0, string.length-1); 
    letter.innerHTML = string;
}



function number_write(x)
{
    
    if(x>=0 && x<=9)
    {
	letter.style.color= "maroon";
	if(isNaN(letter.innerHTML))
	    letter.innerHTML = 0;
	letter.innerHTML = (letter.innerHTML * 10)+x;
    }
}




function writeToMainCanvas(){

    var lines = letter.innerHTML.split('<br>');
    
    for (var i = 0; i<lines.length; i++){
	display.append(lines[i]);
	linebreak = document.createElement("br");
	display.appendChild(linebreak);

    }
}



function deleteInputText(){
letter.innerHTML='';
}
