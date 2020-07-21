
echo("Echo", 5);


function echo (palabra, numero ){
	var cont1 =0;
	var cont2 =0;
	if (palabra === "Echo"){
		do{
		cont1+=1;		
		console.log("Echo!!!")
		}while(cont1<numero);
	}
	else if (palabra === "Tater Tots"){
		do{
			cont2+=1;
			console.log("Tater Tots");
		}while(cont2<numero);
	}
	else{
		console.log("Eligio una opcion incorrecta");
	}
}
