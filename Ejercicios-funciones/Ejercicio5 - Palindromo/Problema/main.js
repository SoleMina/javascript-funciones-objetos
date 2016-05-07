// Escribe aquí tu codigo Javascript

var n = prompt("Ingresar una cadena:");
n= n.split(" ").join("");

var longitud = n.length;

for( var i=0; i<longitud; i++){

if(n[i]===n[longitud-1-i]){
	console.log("Si, es un palindromo")
}else {
	console.log("No es palindromo");
}
}