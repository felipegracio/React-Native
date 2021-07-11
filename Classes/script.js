
class listaTarefas{
	constructor(){
		this.tarefas =[];
	}



	addTarefa(){
		this.tarefas.push(prompt("Digite Uma Tarefa: "));
		console.log(this.tarefas);
	}

};

const minhasTarefas = new listaTarefas();

document.getElementById('novo').onclick = function(){
	minhasTarefas.addTarefa();
}