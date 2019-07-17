/* Manejo del DOM */
const login = document.getElementById("button");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const peru = document.getElementById('peru');
const brasil = document.getElementById('brasil');
const chile = document.getElementById('chile');
const mexico = document.getElementById('mexico');
const enlaceEquipo = document.getElementById('enlace-equipo');
const indicadoresi = document.getElementsByClassName('Indicadores')[0];

login.addEventListener("click", () => {
  if (usuario.value == "LABORATORIA" && password.value == "LABORATORIA") {
    document.getElementById("Ingresar").classList.add("ocultar");
    document.getElementById("nav").classList.remove("ocultar");
    document.getElementById("header").classList.remove("ocultar");
    document.getElementById("Datos").classList.remove("ocultar");
  } else {
    alert("Ingresa nuevamente");
  }
});

enlaceEquipo.addEventListener('click', () => {
  document.getElementById("Datos").classList.remove("ocultar");
  document.getElementById("nav").classList.remove("ocultar");
  document.getElementById("header").classList.remove("ocultar");
  document.getElementById("Ingresar").classList.add("ocultar");
});

const indicadorId = document.getElementById("indicadores");

const pintarPais = (listaDePais) => {
  let pais = `<option disabled selected id="indicadorId" value="indicators">busca indicador</option>`;
  for (let i = 0; i < listaDePais.length; i++) {
    pais += `<option value="${listaDePais[i]}">${listaDePais[i]}</option>`;
  }

  return pais;
}
const seccionpaises = document.getElementById("paises");
seccionpaises.addEventListener('click', (event) => {
  event.preventDefault();
  const paisSelecionado = event.target.value;
  if (paisSelecionado !== null) {
    indicadorId.innerHTML = pintarPais(banco.country(WORLDBANK, paisSelecionado));
    indicadoresi.classList.remove('ocultar');
    document.getElementById("Datos").classList.add("ocultar");
  }
})



