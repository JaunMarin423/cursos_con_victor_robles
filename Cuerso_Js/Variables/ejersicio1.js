'use trict'

/*programa que pida dos numeros y que diga cual es el mayor,
el menor  y si son iguales
Si los numeros son imaginarios o son letra que vuelva pedir numeros
*/

var n1 = parseInt(prompt('introduce el primer numero', 0));
var n2 = parseInt(prompt('introduce el segundo numero', 0));

while (n1 <= 0 || n2 <=0 || isNaN(n1) || isNaN(n2)) {
   n1 = parseInt(prompt('introduce el primer numero', 0));
   n2 = parseInt(prompt('introduce el segundo numero', 0));
}
if (n1 == n2 ) {
  alert("es igual " + n1 + " a " + n2);
}else if (n1 > n2) {

}else if (n2 > n1) {
  alert(n2 + " es es mayor " + " a " + n1);
}else {
  alert("Ingrese un numero porfavor");
}
