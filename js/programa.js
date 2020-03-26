function miFuncion2(nombre){
    alert('holas desde funcion 2' + nombre);
}
function mostrarNombre(parametro){
  let nombre = parametro.value;
  alert('hola ' + nombre + " desde funcion mostrarNombre");
}
function mostrarNombre2(parametro){
  let nombre = parametro.value;
  let saludo = "Hola chingadera " + nombre.toUpperCase();
  document.getElementById('resultado').innerHTML = saludo;
}
//innerHTML sirve para colocarle elementos al div
function clasificacionEdad(edadp){
  var resultado = "a";
  var edad = edadp.value;

  if (edad > 0 && edad < 12) {
    resultado = "AA y A";
  }
  else if (edad >= 12 && edad < 15) {
    resultado = "B, AA y A";
  }
  else if (edad >= 15 && edad < 18) {
    resultado = "B15, AA, A";
  }
  else if (edad >= 18 && edad < 21) {
    resultado = "C, B15, AA, A";
  }
  else if (edad > 21) {
    resultado = "Puede ver cualquier pelicula";
  }
  else {
    resultado = "valor erroneo";
  }
  document.getElementById("clasificacion").innerHTML = resultado;
}
