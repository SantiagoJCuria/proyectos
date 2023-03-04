let elemento = "8+8-3";
console.log(eval(elemento));

let respuestaActual = 0;
function añadirAPantalla(valor){
  let respuesta = document.getElementById("respuesta");
  respuesta.value += valor;
}
function limpiarRespuesta (){
  respuestaActual = 0;
  let respuesta = document.getElementById("respuesta");
  respuesta.value = "";
}

function resultado(){
  let respuesta = document.getElementById("respuesta");
  let valor = eval(respuesta.value);
  respuesta.value = valor;
}

function suma(){
  let respuesta = document.getElementById("respuesta");
  respuesta.value += "+";
}
function resta(){
  let respuesta = document.getElementById("respuesta");
  respuesta.value += "-";
}
function division(){
  let respuesta = document.getElementById("respuesta");
  respuesta.value += "/";
}
function multiplicacion(){
  let respuesta = document.getElementById("respuesta");
  respuesta.value += "*";
}
function parentesis(){
  let respuesta = document.getElementById("respuesta");
  respuesta.value += "(";
}
function parentesisCierre(){
  let respuesta = document.getElementById("respuesta");
  respuesta.value += ")";
}
function porcentaje(){
  let respuesta = document.getElementById("respuesta");
  respuesta.value += "%";
}