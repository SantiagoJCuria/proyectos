let anchoPantalla = window.innerWidth;
let primeraColumna = document.getElementById("primera_columna");
console.log(primeraColumna);

function tamañoPrimeraColumna(ancho) {
    if (ancho <= 320) {
        primeraColumna.style.width = "80%";
      } else if (ancho <= 420) {
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