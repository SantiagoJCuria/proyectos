let anchoPantalla = window.innerWidth;
let primeraColumna = document.getElementById("primera_columna");
console.log(primeraColumna);
let botonRevelador = document.getElementById("boton_revelador");
console.log(botonRevelador);

function tamañoPrimeraColumna(ancho) {
    if (ancho <= 320) {
        // Si la pantalla es más grande que 768px, establecer un ancho más grande
        primeraColumna.style.width = "80%";
      } else if (ancho <= 420) {
        // Si la pantalla es más pequeña que 768px, establecer un ancho más pequeño
        primeraColumna.style.width = "70%";
      } else if (ancho <= 560){
        primeraColumna.style.width = "60%";
      } else if (ancho <= 720){
        primeraColumna.style.width = "45%";
      } else {
        primeraColumna.style.width = "35%";
      }
    }
    
    


function revelar() {
    if (primeraColumna.style.display == "none"){
        primeraColumna.style.display = "flex";
        primeraColumna.style.flexDirection = "column";
        tamañoPrimeraColumna(anchoPantalla);
        primeraColumna.style.position = "absolute";
        
    } else {
        primeraColumna.style.display = "none";
    }
}