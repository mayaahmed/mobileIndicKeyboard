
galleryContainerdiv = document.getElementById("galleryContainer");
galleryImages =  new Array();
galleryImagesSrc =  new Array(); var status = 0;

function initial(){
 for(var i=0; i<  galleryImagesSrc.length; i++){
           galleryImages[i] = document.createElement("img");
            galleryImages[i].src=  galleryImagesSrc[i];
 // galleryImages[i].style.width = imageWidth;
           galleryContainerdiv.appendChild(galleryImages[i]);
           
         }
  }




//filter files by extension from all files selected by the user
   

function filterFiles(fileList) {
        var filteredFiles = [];
        var pripSel = document.getElementById('pripona');
        var pripona = pripSel.options[pripSel.selectedIndex].value;
        console.log('pripona=' + pripona);
        for (var i = 0, file; file = fileList[i]; i++) {
            if (endsWithIgnoreCase(file.name, pripona))
                filteredFiles.push(file);
        }
        return filteredFiles;
    }

    //JavaSript lacks this method on Strings
    function endsWithIgnoreCase(str, suffix) {
        return str.toLowerCase().indexOf(suffix.toLowerCase(), str.length - suffix.length) !== -1;
    }


function loadDir()
{
  var fileToLoad; var k= galleryImages.length;

   var filesSelected =filterFiles(document.getElementById('dir_input').files);


 if (filesSelected.length > 0)
    {
       
for(i=0; i<filesSelected.length; i++){
 fileToLoad = filesSelected[i];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                galleryImages[k] = document.createElement("img");
 galleryImages[k] .addEventListener("click", function() {
     //   alert("clicked");
}, false);
                galleryImages[k].src = fileLoadedEvent.target.result;

                galleryContainerdiv.appendChild(galleryImages[k]);
		galleryImagesSrc.push( galleryImages[k].getAttribute('src'));

		
                k=k+1; 
            };
           
           
            fileReader.readAsDataURL(fileToLoad);

        }
}                              
    }
}









function loadImageFileAsURL()
{

   var galleryContainerdiv = document.getElementById("galleryContainer");

    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
         var    len =galleryImages.length;
              galleryImages[len]           = document.createElement("img");
              galleryImages[len] .addEventListener("click", function()
 {
   // alert("clicked");
}, false);
               galleryImages[len].src = fileLoadedEvent.target.result;
                galleryContainerdiv.appendChild(galleryImages[len]);
		galleryImagesSrc.push(fileLoadedEvent.target.result );
            };

            fileReader.readAsDataURL(fileToLoad);
        }
    }
}



function resizeWidth(){


}






