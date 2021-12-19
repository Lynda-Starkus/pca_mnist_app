    var myPythonScriptPath = 'acp.py';

    var nbAxes = 20;
    var bruit = false;
    var number = 3;

/*
    document.getElementById("nb_axes").textContent=localStorage.getItem('nb_axes');
    
    document.getElementById("bruit").textContent=localStorage.getItem('bruit');
    
    document.getElementById("chiffre").textContent=localStorage.getItem('chiffre');
*/
    const {PythonShell} = require('python-shell');

let options = {
    mode: 'text',
    scriptPath: 'acp.py',
    args: ['5 y 2']
};

PythonShell.run('numSO1.py', options, function (err, results) {
    if (err) throw err;
    $
});
   

/*
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

    
}*/