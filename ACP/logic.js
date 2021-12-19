

var nbAxes = 20;
var bruit = false;
var number = 3;


document.getElementById("nb_axes").textContent=localStorage.getItem('nb_axes');

document.getElementById("bruit").textContent=localStorage.getItem('bruit');

document.getElementById("chiffre").textContent=localStorage.getItem('chiffre');







function validate(form) {


nbAxes = document.getElementById("axesID").value;
localStorage.setItem('nb_axes', nbAxes.toString());
bruit = document.getElementById("bruitID").checked;
if(bruit){
    localStorage.setItem('bruit', "bruit appliqué");
}
else{
    localStorage.setItem('bruit', "bruit non appliqué");
}
number = document.getElementById("numberID").value;
localStorage.setItem('chiffre', number.toString());


}

function validate2() {

    setTimeout(function(){
        console.log("");
    },13000);


    nbAxes = document.getElementById("axesID").value;
    localStorage.setItem('nb_axes', nbAxes.toString());
    bruit = document.getElementById("bruitID").checked;
    if(bruit){
        localStorage.setItem('bruit', "bruit appliqué");
    }
    else{
        localStorage.setItem('bruit', "bruit non appliqué");
    }
    number = document.getElementById("numberID").value;
    localStorage.setItem('chiffre', number.toString());
    
    document.location.reload(true)

    }
    
    




