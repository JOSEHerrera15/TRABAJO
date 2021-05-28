function limpiarFormulario() {
	document.getElementById("miForm").reset();
}

var NuMe = function(N1,N2,N3){
var N1 = parseFloat(document.getElementById("N1").value);
var N2 = parseFloat(document.getElementById("N2").value);
var N3 = parseFloat(document.getElementById("N3").value);
var Resultado = Math.min(N1,N2,N3)
    return "El Número Menor es el "+Resultado;
}

var Pulg = function(N1){
var CM = parseFloat(document.getElementById("CM").value);
Pulg = CM * 0.393701;
      return CM+" Centímetros son "+Pulg+" Pulgadas";
}

var Yar = function(N1){
var MTS = parseFloat(document.getElementById("MTS").value);
Yar = MTS * 1.09361;
     return MTS+" Metros son "+Yar+" Yardas";
}