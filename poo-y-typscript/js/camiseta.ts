// Clase ( modelo del objeto)
class Camiseta {
  // Propiedades ( caracteristicas del obgeto

  private color: string;
  public modelo: string;
  public marca: string;
  public talla: string;
  public precio: number;

  // Método (Funciones o acciones del objeto)

  public setColor(color){
    this.color = color;
  }

  public getColor(){
      return this.color
  }
}


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

