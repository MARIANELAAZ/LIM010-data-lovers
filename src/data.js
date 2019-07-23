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


window.banco = {
  country:country,
  datoIndicador: datoIndicador,
  fecha:fecha,
  ordenarDatos:ordenarDatos,
}