// Escribe aquí tu codigo Javascript
var a = parseInt(prompt("Ingrese el primer número"));
var b = parseInt(prompt("Ingrese el segundo número"));
var c = parseInt(prompt("Ingrese el tercer número"));

function ordenar(){
	var x = [a, b, c];
	var ordenados = x.sort();
	alert("El orden sería el siguiente: "+ordenados);
}ordenar();


