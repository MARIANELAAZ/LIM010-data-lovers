//funcion para obtener los nombres de los paises

const country = (data, nombrePais) => {
  const arrayCodigoPaises = [];
  let rutaCodigoPais = data[nombrePais].indicators;
  for (let i = 0; i < rutaCodigoPais.length; i++) {
    arrayCodigoPaises.push(rutaCodigoPais[i]['countryName']+"-"+ rutaCodigoPais[i]['indicatorName']);
  }

  return arrayCodigoPaises;
}
const fecha = (anioIncial,anioFinal,anioValor) => {
const nuevoArray= [];
const rutaAnio= Object.keys(anioValor); // todos los años (keys)//
const rutaValor= Object.keys(anioValor); // todos los valores del año//
for (let i = 0; i < rutaAnio.length; i++){
  if (anioIncial >= rutaAnio [i] && anioFinal <= rutaAnio[i]){
   nuevoArray.push( rutaAnio [i], rutaValor[i])
  }
  }
  console.log(fecha);
// return nuevoArray;
}
  
  


//WORLDBANK.CHL.indicators[0].countryCode
//  funcion para mostrar los nombres
window.banco = {
  country:country,
  fecha:fecha

}
