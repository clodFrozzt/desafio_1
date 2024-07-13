let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let resultado = "hola " + nombre + " " + apellido + " te tenemos que hacer una pregunta";

console.log(resultado);
alert (resultado);

let numero = parseInt(prompt("En una escala del 1 al 10 como calificas tu compra"));

if (numero > 5)
{
    alert("Calificaste tu compra con un " + numero + " genial tu experiancia fue excelente");
}   
else if (numero == 5)
{
    alert("Calificaste tu compra con un " + numero + " tu experiencia fue satisfactoria")
}
else 
{
    alert("Calificaste tu compra con un " + numero + " sentimos la mala experiencia");
}
