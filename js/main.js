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
  var plantillanueva =plantilla.replace("--nombre--",nombreAlumna).replace("-apellidop--",apellidoPaterno).replace("--apellidom--",apellidoMaterno)
  $("#asistencia").append(plantillanueva);

  var listaAlumna = $("<li />");

  listaAlumna.html(nombreAlumna + " " + apellidoPaterno + " " +apellidoMaterno);

}
var plantilla= ' <li>--nombre--  -apellidop-- --apellidom-- <input type="checkbox"></li> '

$(document).ready(cargarPagina);
