var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("sfsdf", "asdfas", "asdfas", "asdfas", 12);
console.log(camiseta);
var sudadera_nike = new Sudadera("Azules", "frutas", "cortos", "sochimilco", 0);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");
console.log(sudadera_nike);
/*
var camiseta = new Camiseta("rojo","larga","Nike","L",14);



var payera = new Camiseta("rojo", "larga", "nike", "L", 14);

payera.setColor("Azul");
payera.modelo = "payera";
payera.marca = "cualquiera";
payera.talla = "L";
payera.precio = 10;

console.log(camiseta);*/
