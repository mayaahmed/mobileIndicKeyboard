
var string = ""
var letter =  document.getElementById("messageTextArea");
var display =  document.getElementById("textContainer");
 var lines  ="";
var submitTextArray = new Array();

function alphabet_write(x)
{
    string=string+x;
    letter.value = string;
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
    letter.value = string;
}



function number_write(x)
{
    
    if(x>=0 && x<=9)
    {
	letter.style.color= "maroon";
	if(isNaN(letter.value))
	    letter.value = 0;
	letter.value = (letter.value * 10)+x;
    }
}





function writeToMainCanvas(){

submitTextArray.push(letter.value);
 writeDetail(letter.value);

    
// letter.value='';

}

function writeDetail(stringTowrite){
lines = stringTowrite.split('\n');
    for (var i = 0; i<lines.length; i++){
	display.append(lines[i]);
	linebreak = document.createElement("br");
	display.appendChild(linebreak);

    }

}


function undoText(){
display.innerHTML='';
submitTextArray.pop();
for (var i=0; i<submitTextArray.length;i++)
writeDetail(submitTextArray[i]);
}




function deleteInputText(){
letter.value='';
}
