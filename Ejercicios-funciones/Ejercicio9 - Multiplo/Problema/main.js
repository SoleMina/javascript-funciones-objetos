// Escribe aquí tu codigo Javascript
var numero=parseInt(prompt("Ingrese el número que desea saber sus múltiplos"));
var resultado=0;

function multiple(){
	for(var i=0; i<10; i++){

		var multiplo=numero*i
		resultado+=multiplo+" "
	}
	alert("Los 10 primeros múltiplos de "+numero+" son: "+resultado);

}multiple();



