// Interface
interface CamisetaBase{
  setColor(color);
  getColor();
}

// Decorador

function estampar(logo: string){
  return function (target: Function){
    target.prototype.estampacion = function (): void{
      console.log("Camiseta estampada con el logo de: " + logo);
      
    }
  }
}

// Clase ( modelo del objeto)
@estampar('Gucci Gang')
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

// Clase hija
class Sudadera extends Camiseta{
  public capucha: boolean;

  setCapucha(capucha: boolean){
    this.capucha = capucha;
  }
  
  getCapucha(): boolean{
    return this.capucha;
  }
}

var camiseta = new Camiseta("sfsdf", "asdfas", "asdfas","asdfas", 12);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("Azules", "frutas", "cortos","sochimilco", 0);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");
console.log(sudadera_nike);

// Compilar en tipescript $ tsc -w *.ts




/*
var camiseta = new Camiseta("rojo","larga","Nike","L",14);



var payera = new Camiseta("rojo", "larga", "nike", "L", 14);

payera.setColor("Azul");
payera.modelo = "payera";
payera.marca = "cualquiera";
payera.talla = "L";
payera.precio = 10;

console.log(camiseta);*/

