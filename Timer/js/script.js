let botonPlay = document.querySelector("#botonPlay");
let botonPause = document.querySelector("#botonPause");
let botonStop = document.querySelector("#botonStop");
let activado = false;
let tiempo = document.querySelector("p");
function encender() {
     actualizacion = setInterval(() => {
        let tiempoValor = parseFloat(tiempo.innerHTML);
        let segundos = tiempoValor + 1;
        tiempo.innerHTML =  segundos ;
    }, 1000); 

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
