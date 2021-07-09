
var total = 0;




function criar(){

	var balao = document.createElement("div");
	balao.setAttribute("class","balao");

	var x = Math.floor(Math.random() * 600);
	var y = Math.floor(Math.random() * 400);

	balao.setAttribute("style", "left:" +x+"px;top: "+y+"px");
	balao.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(balao);

}


function estourar(objeto){

	document.body.removeChild(objeto);
	total++;
	var score = document.getElementById('total');
	score.innerHTML = "Baloes estourados: " + total;

}


function carregar(){

	setInterval(criar, 1000);

}