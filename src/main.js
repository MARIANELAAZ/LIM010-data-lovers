/* Manejo del DOM */
const clickBoton = document.getElementById("button");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");

clickBoton.addEventListener("click", ()=>{
    if(usuario.value =="LABORATORIA" && password.value == "LABORATORIA"){
      document.getElementById("Ingresar").classList.add("ocultar");
      document.getElementById("Datos").classList.remove("ocultar");
    } else{
        alert("Ingresa nuevamente");
    }
});

const clickSeguir = document.getElementById("seguir");

clickSeguir.addEventListener("click", () =>{
    document.getElementById("Ingresar").classList.add("ocultar");
    document.getElementById("Datos").classList.add("ocultar");
    document.getElementById("Indicadores").classList.remove("ocultar");
});

const clickContinuar = document.getElementById("continuar");

clickContinuar.addEventListener("click", () => {
    document.getElementById("Ingresar").classList.add("ocultar");
    document.getElementById("Datos").classList.add("ocultar");
    document.getElementById("Indicadores").classList.add("ocultar");
    document.getElementById("Años").classList.remove("ocultar");
})

const clickPasar = document.getElementById("pasar");

clickPasar.addEventListener("click", () => {
    document.getElementById("Ingresar").classList.add("ocultar");
    document.getElementById("Datos").classList.add("ocultar");
    document.getElementById("Indicadores").classList.add("ocultar");
    document.getElementById("Años").classList.add("ocultar");
    document.getElementById("Porcentaje").classList.remove("ocultar");
})

const clickRegresar = document.getElementById("regresar");

clickRegresar.addEventListener("click", () => {
    document.getElementById("Ingresar").classList.remove("ocultar");
    document.getElementById("Datos").classList.add("ocultar");
    document.getElementById("Indicadores").classList.add("ocultar");
    document.getElementById("Años").classList.add("ocultar");
    document.getElementById("Porcentaje").classList.add("ocultar");
//Para limpiar los datos de usuario y password
    document.getElementById ("usuario").value = "";
    document.getElementById ("password").value = "";
})