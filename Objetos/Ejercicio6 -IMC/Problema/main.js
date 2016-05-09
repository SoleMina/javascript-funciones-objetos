// Escribe aquí tu codigo Javascript
var masaCorporal = {
	peso: null,
	altura: null,
	imc: function() {
		return (this.peso)/(Math.pow(this.altura,2))
	},
}
masaCorporal.peso = parseInt(prompt("Ingrese su peso"));
masaCorporal.altura = parseInt(prompt("Ingrese su altura en metros"));

alert("Su índice de masa corporal es: "+masaCorporal.imc());


