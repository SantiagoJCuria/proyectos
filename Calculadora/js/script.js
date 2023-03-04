var ResultadoActual = 0;
var operadorActual = "";

function añadirResultado(valor) {
  var result = document.getElementById("respuesta");
  result.valor += valor;
}

function borrar() {
  ResultadoActual = 0;
  operadorActual = "";
  var result = document.getElementById("respuesta");
  result.valor = "";
}

function sumar() {
  ResultadoActual = parseFloat(document.getElementById("respuesta").valor);
  operadorActual = "+";
  var result = document.getElementById("respuesta");
  result.valor = "";
}

function restar() {
  ResultadoActual = parseFloat(document.getElementById("respuesta").valor);
  operadorActual = "-";
  var result = document.getElementById("respuesta");
  result.valor = "";
}

function multiplicar() {
  ResultadoActual = parseFloat(document.getElementById("respuesta").valor);
  operadorActual = "*";
  var result = document.getElementById("respuesta");
  result.valor = "";
}

function dividir() {
  ResultadoActual = parseFloat(document.getElementById("respuesta").valor);
  operadorActual = "/";
  var result = document.getElementById("respuesta");
  result.valor = "";
}

function igual() {
  var result = document.getElementById("respuesta");
  var valor = parseFloat(result.valor);
  switch(operadorActual) {
    case "+":
      ResultadoActual += valor;
      break;
    case "-":
      ResultadoActual -= valor;
      break;
    case "*":
      ResultadoActual *= valor;
      break;
    case "/":
      ResultadoActual /= valor;
      break;
    default:
      ResultadoActual = valor;
  }
  result.valor = ResultadoActual;
}
