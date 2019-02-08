"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada !!");
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta("Rojas", "adasd", "adsadg", "fwqe", 12);
    };
    return Main;
}());
var main = new Main();
