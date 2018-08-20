
var string = ""
var letter =  document.getElementById("letterDiv");
var canvas =  document.getElementById("letterCanvas");
var toolsDiv = document.getElementById("writingToolsDiv");

var save =document.getElementById('saveButton');
save.addEventListener('click',saveCanvas);

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



var context = canvas.getContext("2d");
context.fillStyle = "#000";
context.font = "bold 16px Arial";


function writeToCanvas(){
    console.log(letter.innerHTML);
    var x = 30;
    var y = 30;
    var lineheight = 30;

 //   var lines = letter.innerHTML.split('\n');
    var lines = letter.innerHTML.split('<br>');
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i<lines.length; i++)
	context.fillText(lines[i], x, y + (i*lineheight) );
    // context.fillText(letter.innerHTML, 10, 20);
canvas.style.visibility ="visible";
toolsDiv.style.visibility="hidden"

}


function saveCanvas(){
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  
    window.location.href=image; // it will save locally
}

function deleteInputText(){
letter.innerHTML='';
}
