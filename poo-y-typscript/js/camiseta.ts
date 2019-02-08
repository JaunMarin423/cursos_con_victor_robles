// Interface

interface CamisetaBase{
  setColor(color);
  getColor();
}

// Clase ( modelo del objeto)
 class Camiseta implements CamisetaBase{
  // Propiedades ( caracteristicas del obgeto

  private color: string;
  public modelo: string;
  public marca: string;
  public talla: string;
  public precio: number;

  // Método (Funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
  public setColor(color){
    this.color = color;
  }

  public getColor(){
      return this.color
  }

}

var camiseta = new Camiseta("sfsdf", "asdfas", "asdfas","asdfas", 12);

console.log(camiseta);


/*
var camiseta = new Camiseta("rojo","larga","Nike","L",14);



var payera = new Camiseta("rojo", "larga", "nike", "L", 14);

payera.setColor("Azul");
payera.modelo = "payera";
payera.marca = "cualquiera";
payera.talla = "L";
payera.precio = 10;

console.log(camiseta);*/

