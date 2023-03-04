let linterna = false; 
let sonidoBatman = document.querySelector("#bati_encendido");
let sonidoClck = document.querySelector("#bati_click");
let batman = document.querySelector("#batman");
let boton = document.querySelector("#boton");

boton.addEventListener("click", ()=>{
    controlarLinterna();
})

function controlarLinterna() {
    if (!linterna) {
    linterna = true; 
    batman.classList.add("batman_activo");
    sonidoLinterna()
} else {
    linterna = false; 
    batman.classList.remove("batman_activo");
    sonidoLinterna()
}  
}

function sonidoLinterna() {
    if (sonidoBatman.paused) {
        sonidoClck.play();
        sonidoBatman.play();        
    } else {
        sonidoClck.pause();
        sonidoBatman.pause();
        sonidoBatman.currentTime = 0; 
    }
}