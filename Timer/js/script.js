let botonPlay = document.querySelector("#botonPlay");
let botonPause = document.querySelector("#botonPause");
let botonStop = document.querySelector("#botonStop");
let activado = false;

function encender() {
     actualizacion = setInterval(() => {
        let tiempo = document.querySelector("p");
        let tiempoValor = parseFloat(tiempo.innerHTML);
        let milisegundos = tiempoValor + 1; 
        tiempo.innerHTML = milisegundos + 1;
    }, 1); 
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