type letrasonumeros = string | number;

// String
let cadena: letrasonumeros | number = "https://www.facebook.com/Manyjuan";

cadena = 12;

// Number 

let edad: number= 12;

// Boleano

let verdadero_falso: boolean = true;

// Any cualquier cosa

let cualquiera: any = "hola" ;

cualquiera=77;

// Array 
var lenguajes: Array <any> = ["php", "js", "css", 13];

let years: number[]= [13, 12, 14];

// let vs var

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
    
}

console.log(numero1, numero2);


console.log(cadena, edad, verdadero_falso, cualquiera, lenguajes, years);


// Cuando utiliso let es por bloque y var es para una variable global
