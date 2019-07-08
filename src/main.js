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

//const mostrar = () =>{
//const selected = document.getElementById('list').value;
  //return(selected);
//}

/*const lista = document.getElementById("list");
const indiceSeleccionado = lista.selectedIndex;
const opcionSeleccionada = lista.options[indiceSeleccionado];
const textoSeleccionado = opcionSeleccionada.text;
const valorSeleccionado = opcionSeleccionada.value;

alert("opcionSeleccionada: " + textoSeleccionado + "\n Valor de la opcion: "+ valorSeleccionado );


//const clickSeguir = document.getElementById("seguir");
//Indicadores.innerHTML= mostrar();

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

//console.log("WORLDBANK");



    //let mostrar='';
    //const paises = Object.keys(WORLDBANK);
    //if(document.getElementById('p1').checked==true){
      //  for(let i=0; i<paises.length;i++){
        //    let llamado = `<div = "banco">
          //  <p>${WORLDBANK.PER.indicators[0].indicatorName}<p></div>`;
           // mostrar+= llamado;
            
          //}
    //}
   // return;
//}







