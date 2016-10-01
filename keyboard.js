
var string = ""
var letter =  document.getElementById("letterDiv");

function alphabet_write(x)
{
  string=string+x;
  letter.innerHTML = string;
  }


function number_c()
{
string = string.substr(0, string.length-1); 
 letter.innerHTML = string;
}



function number_write(x)
{
  
  if(x>=0 && x<=9)
  {
    letter.style.color= "maroon";
    if(isNaN(letter.value))
   letter.innerHTML = 0;
 letter.innerHTML = (letter.innerHTML * 10)+x;
  }
}

