let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let resultado = "Hola " + nombre + " " + apellido + ", te tenemos que hacer una pregunta.";

console.log(resultado);
alert(resultado);

function evaluarCompra(numero) {
    if (numero > 5) {
        return "Calificaste tu compra con un " + numero + ", genial tu experiencia fue excelente.";
    } else if (numero == 5) {
        return "Calificaste tu compra con un " + numero + ", tu experiencia fue satisfactoria.";
    } else {
        return "Calificaste tu compra con un " + numero + ", sentimos la mala experiencia.";
    }
}

let numero = parseInt(prompt("En una escala del 1 al 10, ¿cómo calificas tu compra?"));
alert(evaluarCompra(numero));

function realizarEncuesta(preguntas) {
    let respuestas = [];
    for (let i = 0; i < preguntas.length; i++) {
        let respuesta = prompt(preguntas[i]);
        respuestas.push(respuesta);
    }
    return respuestas;
}

let preguntasEncuesta = [
    "¿Cómo calificas la atención al cliente?",
    "¿Recomendarías nuestro producto?",
    "¿Volverías a comprar con nosotros?"
];

let respuestasEncuesta = realizarEncuesta(preguntasEncuesta);

function mostrarMensajeFinal(respuestas) {
    let mensaje = "Gracias por completar la encuesta, " + nombre + ". Aquí están tus respuestas:\n";
    for (let i = 0; i < respuestas.length; i++) {
        mensaje += preguntasEncuesta[i] + ": " + respuestas[i] + "\n";
    }
    alert(mensaje);
}

mostrarMensajeFinal(respuestasEncuesta);
