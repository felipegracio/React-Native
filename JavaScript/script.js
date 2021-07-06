//Função entrar 





function entrar(){

	var area = document.getElementById('area');
	var nome = prompt('Digite seu nome');

	if(nome =='' || nome == null){
		alert('Voce nao digitou o nome');
		area.innerHTML = 'Bem vindo...';
	} else{
		area.innerHTML=nome;
	}
	
	

}


function entrar2(){
	var area2 = document.getElementById('area2');
	var sobrenome = prompt('Digite seu sobrenome');
	area2.innerHTML = sobrenome;
}
