var estudiantes = [];

function obtenerListaEstudiantes() {
  var estudiante = {
        nombreEstudiante: nombreEstudiante,
        puntosTecnicos: puntosTecnicos,
        puntosHSE:puntosHSE
    }
  }
    return estudiantes();
    // TO DO: Retornar la lista de estudiantes

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante

    var nombreEstudiante= prompt("Ingresa el nombre del estudiante");
    var puntosTecnicos = prompt("Ingresa los puntos técnicos del estudiante");
    var puntosHSE = prompt("Ingresa los puntos HSE del estudiante");
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
        estudiantes[0]=nombreEstudiante;
        estudiantes[1]=puntosTecnicos;
        estudiantes[2]=puntosHSE;
    // TO DO: Retornar el estudiante recientemente creado
    return estudiantes();
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + puntosTecnicos.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + puntosHSE.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    for (var i = 0, limite = estudiantes.length; i < limite; i++) {
    var estudiante = estudiantes[i];
    // Retornar el template de todos los estudiantes
    return estudiantes;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    nombre.toLowerCase(estudiantes);
    nombre.filter(estudiantes);
    // Retornar el objeto del estudiante buscado
    return (estudiantes.nombre)toLowerCase;
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var ordenarPorPuntajeTecnico = function (estudiantes.puntosTecnicos(a,b)){
        return estudiantes.puntosTecnicos.sort(b-a);
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var ordenarPorPuntajeHSE = function (estudiantes.puntosHSE(a,b)){
        return estudiantes.puntosHSE.sort(b-a);
}
