let encendido = false;
let sonidoLicuadora = document.querySelector("#sonidoLicuadora");
let sonidoClick = document.querySelector("#sonidoClick");
let apagado = document.querySelector("#imagenapagado");
let prendido = document.querySelector("#imagenprendida"); 
let 
function prender() {
    if (!encendido) {
        apagado.style.display="none";
        prendido.style.display="flex";
        sonidoClick.play();
        sonidoLicuadora.play();
        encendido = true;
    } else {
        apagado.style.display="flex";
        prendido.style.display="none";
        sonidoClick.play();
        sonidoLicuadora.pause();
        encendido = false;
        sonidoLicuadora.currentTime = 0;
    }
}