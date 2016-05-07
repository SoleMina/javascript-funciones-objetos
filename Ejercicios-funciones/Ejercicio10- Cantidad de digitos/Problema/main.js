// Escribe aquí tu codigo Javascript
var n=parseInt(prompt("Ingresar el numero que desea para determinar el total de digitos: "));
var x=0;

function cantidadDigitos(){
     while(n>=10) {
     	n=n/10;
        x++;

}alert("El número de digitos es: "+(x+1));
}cantidadDigitos();

