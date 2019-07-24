//funcion para obtener los nombres de los paises
const country = (data, nombrePais) => {
  const arrayCodigoPaises = [];
  let rutaCodigoPais = data[nombrePais].indicators;
  for (let i = 0; i < rutaCodigoPais.length; i++) {
    arrayCodigoPaises.push(rutaCodigoPais[i]['countryName']+"-"+ rutaCodigoPais[i]['indicatorName']);
  }

  return arrayCodigoPaises;
}
//funcion para saber la data de los indicadores
const datoIndicador = (dataPrincipal, Pais,indice)=>{
    let rutaCodigoData = dataPrincipal[Pais].indicators[indice].data;
    return rutaCodigoData;
};
//WORLDBANK.PER.indicators[0].data

//funcion para ver los datos del indicador por años(rango)
const fecha = (objectData,anioInicial,anioFinal) => {
  let nuevoArray= [];
  const arrayData = Object.entries(objectData);
  nuevoArray = arrayData.filter(array => array[0]<=anioFinal && array[0]>=anioInicial);
  return nuevoArray;
  }
  
  //funcion para ordenar los datos ascendente y descendente  
const ordenarDatos =(objectData, condicion)=>{
     const arrayDataOrdenar = Object.entries(objectData);
     if (condicion==='asc'){
      arrayDataOrdenar.sort(function(a, b) {
        return a[1] - b[1];
      });
     }else if (condicion==='des'){
       arrayDataOrdenar.reverse();
     }
     return arrayDataOrdenar;
   }

window.banco = {
  country:country,
  datoIndicador: datoIndicador,
  fecha:fecha,
  ordenarDatos:ordenarDatos,
}