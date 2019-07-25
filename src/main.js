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
 let objetoWorldbank ={};
  indicadorId.addEventListener('change',(event)=>{
  let seleccionarIndicador = event.target.value;
  console.log(event.target.value);
  objetoWorldbank= banco.datoIndicador(WORLDBANK, paisSelecionado, seleccionarIndicador);
   console.log(objetoWorldbank);
  });

  const buscar= document.getElementById('buscar');
  const numero1= document.getElementById('n1');
  const numero2= document.getElementById('n2');
  const mostrar = document.getElementById('tabla');

  buscar.addEventListener('click',()=>{
     const busqueda= fecha(objetoWorldbank,numero1.value, numero2.value);
     mostrar.innerHTML= mostrarTabla(busqueda);
    //  console.log(busqueda);
   })
  
  const ascendente =document.getElementById('ascendente');
  const descendente =document.getElementById('descendente');
  
  orden.addEventListener('change',()=>{
    const orden=document.getElementById('orden').value;
    mostrar.innerHTML=mostrarTabla(ordenarDatos(objetoWorldbank,orden));
    // console.log(ordenarDatos(objetoWorldbank,orden));
  })
 
const mostrarTabla = (arrayTabla) => {
let templateTable = `
<tr>
  <th>Fecha</th>
  <th>Porcentaje</th>  
</tr>`;
for(let i = 0; i < arrayTabla.length; i++){
  if(arrayTabla [i][1]!== ""){
  templateTable += ` <tbody><tr>
  <td>${arrayTabla[i] [0]}</td>
  <td>${arrayTabla[i] [1]}</td>
</tr> `
  }
}
return templateTable;
};

//  const verPromedio = document.getElementById('promedio');
//  const resultado = document.getElementById('resultado');

// //  const verPromed = (object) =>{
// //   const arrayValor= Object.values(object)
// //   const nuevoArray= [];
// //   for(i=0; i< arrayValor.length; i++){
// //       if(arrayValor[i] !== ''){
// //         nuevoArray.push(Number(arrayValor[i]));
// //       }
// //     }
// //     return nuevoArray;
// //   }

// verPromedio.addEventListener('click',()=>{
// // resultado.innerHTML=promedio(objetoWorldbank);
// const num=converArrValor(objetoWorldbank);
// console.log(promedio(num));
//  })

// verPromedio.addEventListener('click',()=>{
//   const arrayValor= Object.values(objetoWorldbank);
//   const nuevoArray= [];
//   for(i=0; i< arrayValor.length; i++){
//       if(arrayValor[i] !== ''){
//         nuevoArray.push(Number(arrayValor[i]));
//       }
//     }
//   resultado.innerHTML=promedio(nuevoArray);
//   // console.log(parseFloat(promedio(banco.objetoWorldbank)));
//   console.log(promedio(nuevoArray));
//    })

   