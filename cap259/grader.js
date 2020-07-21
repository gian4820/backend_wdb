// verificar el promedio de las notas de los alumnos
var notas1 =[90, 98, 89, 100, 100, 86,94];
var notas2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

average(notas1);
average(notas2);

function average (arr){
var tot=0;	
var prom=0;
	for(var i=0; i<arr.length; i++){
		tot+= arr[i];				
	}
	prom=tot/arr.length;
	//el siguiente metodo, redondea la variable prom
	prom = Math.round(prom);
	console.log("Las notas " + arr + " tienen un promedio de: " + prom );
}