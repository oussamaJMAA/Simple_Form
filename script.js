

function verif() {
 
    var nom = document.querySelector('#nom').value;
    /*  document.getElementById('nom').value
    */
    var prenom = document.querySelector('#prenom').value;
   
    var tel = document.querySelector('#tel').value;
   var mail=document.querySelector('#email').value ;
    


    if (nom.charAt(0) < 'A' || nom.charAt(0) > 'Z') {
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        nom.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
}
    /*
    if (prenom.charAt(0) < 'A' || prenom.charAt(0) > 'Z') {
        
    }
   

    if (tel.substring(0, 1) != '7' || tel.length != 8) {
    

   


}


function validateForm()                                 
{ 
    var name = document.forms["myForm"]["name"];         
    if (name.value == ""){ 
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
*/
