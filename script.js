window.onload = function () {
    let zodis = "namas";
    let zodis1 = "kosmonautas";
    let zodis2 = "rutina";
    let zodis3 = "dehidatacija";
    
    console.log(zodzioIlgis(zodis));
    console.log(zodzioIlgis(zodis1));
    console.log(zodzioIlgis(zodis2));
    console.log(zodzioIlgis(zodis3));
   
   
    
}
function zodzioIlgis(text)
{  if((text.length>10)){
    return true;
}
else((text.length<10))
return false;

}
    
    
