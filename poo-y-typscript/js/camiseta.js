// Clase ( modelo del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // Método (Funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("Rojo");
camiseta.modelo = "Cualquiera";
camiseta.marca = "nike";
camiseta.talla = "L";
camiseta.precio = 1500000;
var payera = new Camiseta();
payera.setColor("Azul");
payera.modelo = "payera";
payera.marca = "cualquiera";
payera.talla = "L";
payera.precio = 10;
console.log(camiseta.getColor());
