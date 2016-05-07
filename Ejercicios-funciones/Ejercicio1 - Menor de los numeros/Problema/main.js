// Escribe aquí tu codigo Javascript
var a = parseInt(prompt("Ingrese el número 1"));
var b = parseInt(prompt("Ingrese el número 2:"));
var c = parseInt(prompt("Ingrese el número 3"));

function menor() {
	if(a<b && a<c){
		alert("El primero número es el menor: "+a);
	}else if(b<a && b<c){
		alert("El segundo número es el menor: "+b);
	}else if(c<a && c<b){
		alert("El tercer número es el menor: "+c);
	} else{
		alert("No ha ingresado correctamente los tres números");
	}
}menor();






















/*
var n = 0;
function menor() {
	for(var i=1; i<=3; i++) {
       var n = parseInt(prompt("Ingrese el número: " +i));
	} alert("el número menor es :"+n);
}menor()
*/
