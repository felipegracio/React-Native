

//While = Enquanto 


x = 0;

while (x<10){

	document.write("</br> O valor do X e: "+x )

	x++;
}



// For = Para 


for ( y = 0; y<10; y++){

	document.write("</br> O valor de y e: "+y);

}



//Switch


document.write("</br> Escolha seu pedido </br>");
document.write("</br> 0 - Calabresa </br>");
document.write("</br> 1 - Queijo </br>");
document.write("</br> 2 - Frango </br> </br>");




function pedir(){

x = prompt("o que deseja pedir: ");

switch(x){

	case "0":
		alert("Calabresa");
		break;
    case "1":
    	alert("Queijo");
    	break;
    case "2":
    	alert("Frango");
    	break;
    default:
    	alert("não temos essa opcao");
    	break;
}

}