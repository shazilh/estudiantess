var estudiantes = [];

function obtenerListaEstudiantes(){
  // TO DO: Retornar la lista de estudiantes
  return estudiantes;
}
function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
      var nombre =  prompt("Ingresa el nombre:");
      var puntosTecnicos  = prompt("Ingresa los puntos tecnicos:");
      var puntosHSE=  prompt("Ingresa los puntos HSE:");

      var estudiante = {
          nombre : nombre,
          tecnico: puntosTecnicos,
          hse: puntosHSE,
      };
          estudiantes.push(estudiante);
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

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    var resultado="";
        estudiantes.forEach(function(estudiante){
        resultado +=mostrar(estudiante);
    });
    return resultado;
    // Retornar el template de todos los estudiantes
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    var estudiantesBuscados=estudiantes.filter(function(estudiante){
    return estudiante.nombre.toLowerCase()===nombre.toLocaleLowerCase();
    });
    // Retornar el objeto del estudiante buscado
    return estudiantesBuscados;
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
      var estudiantesTop = estudiantes.sort(function (a,b){
      return b.tecnico-b.tecnico;
      });
      return estudiantesTop;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var estudiantesTopHSE = estudiantes.sort(function(a,b){
    return b.hse-a.hse;
    });
      return estudiantesTopHSE;
}
