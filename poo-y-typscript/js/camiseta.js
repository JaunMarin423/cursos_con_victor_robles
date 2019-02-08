// Clase ( modelo del objeto)
var Camiseta = /** @class */ (function () {
    // Método (Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "larga", "Nike", "L", 14);
var payera = new Camiseta("rojo", "larga", "nike", "L", 14);
payera.setColor("Azul");
payera.modelo = "payera";
payera.marca = "cualquiera";
payera.talla = "L";
payera.precio = 10;
console.log(camiseta);
