// Escribe aquí tu codigo Javascript
var n=0;

var x=parseInt(prompt("Ingrese un número"));

function primo(x){

	for(var i=1;i<=x;i++) {

		resultado =  x %  i;
		if(resultado == 0){
			n+=1
		}
	}
	if(n==2){
		return " Sí es primo"	
	}else{
		return " No es primo"
	}

}
alert("El número "+x+primo(x));