function validar(){

	var valor = document.getElementById("numero").value;
	var letra = document.getElementById("nome").value;

	if(valor.length >2 ){
		alert("Digite apenas 2 números");
		document.formulario.numero.focus();
		return false;

	}else if(letra.length <= 3){
		alert("O nome deve ter mais que 3 caracter");
		document.formulario.nome.focus();
		return false;

	}else{
		alert("formulario enviado")
		return true;
	}



}