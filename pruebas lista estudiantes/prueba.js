var estudiantes =[];

function obtenerListaEstudiantes(){
  return estudiantes;
}
function agregarEstudiante(){
  var nombre=prompt("Ingresa el nombre del Estudiante:");
  var puntosTecnicos=prompt("Ingresa los puntosTecnicos:");
  var puntosHSE=prompt("Ingresa los puntosHSE");

  var estudiante ={
      nombre:nombre,
      tecnico:puntosTecnicos,
      hse:puntosHSE
  };
  return estudiantes.push(estudiante);
  return estudiante;
}
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}
function mostrarLista(estudiantes){
  var lista="";
  estudiantes.forEach(function(estudiante){
}


  }
