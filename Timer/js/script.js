let botonPlay = document.querySelector("#botonPlay");
let botonPause = document.querySelector("#botonPause");
let botonStop = document.querySelector("#botonStop");
let activado = false;
function tiempoAumento() {
    let tiempo = document.querySelector("p");
    let tiempoValor = parseInt(tiempo.innerHTML);
    let seg = tiempoValor + 1;
    tiempo.innerHTML = seg;
}
function encender() {
     actualizacion = setInterval(tiempoAumento, 1000); 
}
function apagar() {
    clearInterval(actualizacion);

}
botonPlay.addEventListener("click", ()=>{
    botonPlay.style.display = "none";
    botonPause.style.display= "flex";
    encender()
})
botonPause.addEventListener("click", ()=>{
    botonPlay.style.display = "flex";
    botonPause.style.display= "none";
    apagar();
})

function convertirsegundos(segundos) {
    // Convertir milisegundos a segundos
    let minutos = Math.floor((segundos % 3600) / 60);
    
    // Calcular horas, minutos y segundos
    let horas = Math.floor(segundos / 3600);
    let segundosRestantes = segundos % 60;
  
    // Crear objeto con las partes del tiempo
    let tiempoFormato = {
      horas: horas,
      minutos: minutos,
      segundos: segundosRestantes
    };
  
    return tiempoFormato.horas + ":" + tiempoFormato.minutos + ":" + tiempoFormato.segundos;
  }