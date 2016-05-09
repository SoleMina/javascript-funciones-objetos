// Escribe aquí tu codigo Javascript
var cuatrimestre = {
	mes: null,
	cuatrimestres: function() {
		return this.mes*(1/3)
	},
}
cuatrimestre.mes = parseInt(prompt("Ingrese el mes correspondiente en número: "));
alert("El cuatrimestre correspondiente es: "+cuatrimestre.cuatrimestres());


