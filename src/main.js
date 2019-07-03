/* Manejo del DOM */

const clickBoton = document.getElementById("boton");
const clave = document.getElementById("clave");
const usuario = document.getElementById("usuario");

clickBoton.addEventListener("click", ()=>{
    if(clave.value =="LABORATORIA" && usuario.value == "LABORATORIA"){
      document.getElementById("Ingresar").classList.add("ocultar");
      document.getElementById("Pagina").classList.remove("ocultar");
    } else{
        alert("Ingresa nuevamente");
    }
});