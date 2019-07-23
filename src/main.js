/* Manejo del DOM */
const login = document.getElementById('button');
const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const peru = document.getElementById('peru');
const brasil = document.getElementById('brasil');
const chile = document.getElementById('chile');
const mexico = document.getElementById('mexico');
const enlaceEquipo = document.getElementById('enlace-equipo');
const indicadoresi = document.getElementsByClassName('Indicadores')[0];
const fechaInicio = document.getElementById('fechainicio');
const fechaFin = document.getElementById('fechafin');
const indika = document.getElementById('indika');
//evento click para ingresar al login
login.addEventListener('click', () => {
  if (usuario.value == 'LABORATORIA' && password.value == 'LABORATORIA') {
    document.getElementById('Ingresar').classList.add('ocultar');
    document.getElementById('nav').classList.remove('ocultar');
    document.getElementById('header').classList.remove('ocultar');
    document.getElementById('datos').classList.remove('ocultar');
  } else {
    alert('Ingresa nuevamente');
  }
});
//evento click para navegacion del menu
enlaceEquipo.addEventListener('click', () => {
  document.getElementById('datos').classList.remove('ocultar');
  document.getElementById('nav').classList.remove('ocultar');
  document.getElementById('header').classList.remove('ocultar');
  document.getElementById('Ingresar').classList.add('ocultar');
  indicadoresi.classList.add('ocultar');
});

//funcion para que mostrar paises
let paisSelecionado;
const seccionpaises = document.getElementById('paises');
seccionpaises.addEventListener('click', (event) => {
  event.preventDefault();
  paisSelecionado = event.target.value;
  if (paisSelecionado !== null) {
    indicadorId.innerHTML = pintarPais(banco.country(WORLDBANK, paisSelecionado));
    indicadoresi.classList.remove('ocultar');
    document.getElementById('datos').classList.add('ocultar');
  } 
});
//funcion que muestra los indicadores de cada pais 
const indicadorId = document.getElementById('indicadores');
const pintarPais = (listaDePais) => {
  let pais = `<option disabled selected id='indicadorId' value='indicators'>busca indicador</option>`;
  for (let i = 0; i < listaDePais.length; i++) {
    pais += `<option  value="${i}" id="${i}">${i} - ${listaDePais[i]}</option>`;
  }
  return pais;
}
//muestra los datos de los indicadores (años y porcentaje)
 let objectData ={};
indicadorId.addEventListener('change',(event)=>{
  let seleccionarIndicador = event.target.value;
  console.log(event.target.value);
  objectData= banco.datoIndicador(WORLDBANK, paisSelecionado, seleccionarIndicador);
  // console.log(objectData);
  });


const mostrar = document.getElementById('tabla');


let templateTable = `
<tr>
  <th>Fecha</th>
  <th>Porcentaje</th> 
 
</tr>`;
​
for(let i = 0; i < .length; i++){
  templateTable += `<tr>
  <td>${[i].}</td>
  <td>${[i].}</td>
 
</tr>`
}