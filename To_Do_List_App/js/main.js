let tituloTarea = document.querySelector("#tiuloAñadir");
let btnAñadir = document.querySelector("#btnAñadir");
let tabla = document.querySelector("#ListaTareas");
let btnEliminar = document.querySelectorAll(".eliminar");

btnAñadir.addEventListener("click", ()=>{
    let valorTarea = tituloTarea.value;
    if (valorTarea != "") {
        let filaNueva = tabla.insertRow();
        let tareaNueva = filaNueva.insertCell();
        let btnAcciones = filaNueva.insertCell();
        tareaNueva.innerHTML = valorTarea;
        btnAcciones.innerHTML = '<button class="finalizado"><i class="fa-solid fa-check"></i></button> <button class="editar" onclick="editarTarea(this)"><i class="fa-solid fa-pen"></i></button> <button class="eliminar" onclick="eliminarFila(this)"><i class="fa-solid fa-trash"></i></button>'
        tituloTarea.value = "";   
    }
});
function eliminarFila(boton) {
    let fila = boton.parentNode.parentNode;
    let tabla = fila.parentNode;
    tabla.deleteRow(fila.rowIndex);
  }

function editarTarea(boton) {
    let tareaEditar = boton.parentNode.previousSibling;
    let titulo = tareaEditar.value;
    let tituloNuevo = prompt("Edite su tarea:", titulo);
    if (tituloNuevo != "") {
        tareaEditar.innerHTML = tituloNuevo;
    }

}
  
  
  
  
  