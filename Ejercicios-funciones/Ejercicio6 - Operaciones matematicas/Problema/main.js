// Escribe aquí tu codigo Javascript
var x=parseInt(prompt("Ingresar primer número"));
var y= parseInt(prompt("Ingresar segundo numero"));
var n=prompt("Elige una operacion:suma(a),resta(b),multiplicacion(c),division(d)");

function operadores(x,y){
    switch (n) {
        case "a":
        var suma=x+y;
        alert("suma: "+suma);
            break;
        case "b":
        if(x>y) var resta=x-y;
        else resta=y-x;
           alert("resta: "+resta);
           break;
        case "c":
         var producto=x*y;
         alert("multiplicacion: "+producto);
         break;
        case "d":
        var division=parseFloat(x/y);
        alert("division: "+division);
        break;
    }
}operadores(x,y);