// Escribe aquí tu codigo Javascript
var circulo = {
	radio: null,
	area: function() {
		return 3.14*Math.pow(this.radio,2)},
	longitud: function() {
        return this.radio*2*3.14},
}
circulo.radio = parseInt(prompt("Ingresa el radio del circulo"));

alert("La longitud del circulo es: "+circulo.longitud()+"\n"+"Área : "+circulo.area());


