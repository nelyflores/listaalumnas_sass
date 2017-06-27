var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
}

var cargarPagina = function(){
  cargarLista();
}

var cargarLista = function(){
  $.getJSON(api.url, function(alumnas){
    alumnas.forEach(crearLista);
  });
}

var crearLista = function(alumna){
  var nombreAlumna = alumna.name;
  var apellidoPaterno = alumna.pLastName;
  var apellidoMaterno = alumna.mLastName;

  var listaAlumna = $("<li />");

  listaAlumna.text(nombreAlumna + " " + apellidoPaterno + " " +apellidoMaterno);

  $("#asistencia").append(listaAlumna);

}


$(document).ready(cargarPagina);
