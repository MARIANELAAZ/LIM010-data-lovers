// funcion para obtener los nombres de los paises
const country = (data, nombrePais) => {
  const arrayCodigoPaises = [];
  let rutaCodigoPais = data[nombrePais].indicators;
  for (let i = 0; i < rutaCodigoPais.length; i++) {
    arrayCodigoPaises.push(rutaCodigoPais[i]['countryName'] + "" + rutaCodigoPais[i]['indicatorName']);
  }; 

  return arrayCodigoPaises;
};
// funcion para saber la data de los indicadores
const datoIndicador = (dataPrincipal, Pais, indice) => {
  let rutaCodigoData = dataPrincipal[Pais].indicators[indice].data;
  return rutaCodigoData;
};
// WORLDBANK.PER.indicators[0].data

// funcion para ver los datos del indicador por años(rango)
const fecha = (objectData, anioInicial, anioFinal) => {
  let nuevoArray = [];
  const arrayData = Object.entries(objectData);
  nuevoArray = arrayData.filter(array => array[0] <= anioFinal && array[0] >= anioInicial);
  return nuevoArray;
};

// funcion para ordenar los datos ascendente y descendente  

const ordenarDatos = (objectData, condicion) => {
  const arrayDataOrdenar = Object.entries(objectData);
  if (condicion === 'asc') {
    arrayDataOrdenar.sort((aa, bb) => {
      return aa[1] - bb[1];
    });
  } else if (condicion === 'des') {
    arrayDataOrdenar.reverse();
  }
  return arrayDataOrdenar;
};
// funcion para sumar y dividir el promedio
const promedio = (arrayValor) => {
  let suma = 0;
  let div;
  for (let i = 0; i < arrayValor.length; i++) {
    suma = suma + arrayValor[i][1];
    div = suma / arrayValor.length;
  }
  return div;
};

window.banco = {
  country: country,
  datoIndicador: datoIndicador,
  fecha: fecha,
  ordenarDatos: ordenarDatos,
  promedio: promedio,
  
};
