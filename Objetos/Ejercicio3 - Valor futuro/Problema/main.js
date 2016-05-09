// Escribe aquí tu codigo Javascript
var inversion = {
	valor: null,
	tasa: null,
	periodo: null,
    valorFuturo: function() {
    	return this.valor*Math.pow(1+(this.tasa/100), this.periodo)
    },
}
inversion.valor = parseInt(prompt("Ingrese el valor de la inversión"));
inversion.tasa = parseInt(prompt("Ingrese la tasa de la inversión"));
inversion.periodo = parseInt(prompt("Ingrese el periodo respectivo"));
alert("valor: "+inversion.valor+"\n"+"tasa: "+inversion.tasa+"\n"+"periodo: "+inversion.periodo+"\n"+"resultado: "+inversion.valorFuturo());

