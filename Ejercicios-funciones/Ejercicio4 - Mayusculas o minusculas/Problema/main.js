// Escribe aquí tu codigo Javascript
var texto = prompt("Ingrese el texto a evaluar");

function evaluador(){

	if(texto==texto.toUpperCase()){

		alert("El texto está compuesto sólo por mayúsculas");

	}else if(texto==texto.toLowerCase()){

		alert("El texto está compuesto sólo por minúsculas");

	}else{
	    alert("El texto está compuesto por mayúsculas y minúsculas");
	}
}evaluador();







































/*
var n = prompt("Ingresar una cadena:");
n= n.split(" ").join("");

var longitud = n.length;

for( var i=0; i<longitud; i++){

if(a[i]===a[longitud-1-i]){
	alert("Si, es un palindromo")
}else {
	alert("No es palindromo");
}
}*