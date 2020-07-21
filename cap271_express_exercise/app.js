// LO PRIMERO ES INSTALAR EL PACKAJE.JSON
// npm init 
//Luego completar la info que te pide


//Luego crear el archivo app.js


//luego instalar express
// npm install express --save


console.log("ESTAS CONECTADO");


//variables express
var express = require("express");
var app = express();

//*******************************************

app.get("/", function(req, res){
	res.send("Hey there wellcome to my WEB, 2 OPCIONES:, /speak/***animal***, /repeat/***mensaje***/***veces***, otra cosa error");

	
})

//*******************************************

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal;
	
	
	switch (animal){
		case "dog": 
			res.send("Dog says Guau");
			break;
		case "cow":
			res.send("Cow says Muu");
			break;
		case "pig":
			res.send("Pig says Oink");
			break;
		default:
			res.send("Error, tipea bien!");
	}
})
//*******************************************

app.get("/repeat/:palabra/:numero", function(req, res){
	var palabra = req.params.palabra;
	var numero = Number(req.params.numero);
	var result = " ";
	
	for(var i=0; i< numero; i++){
		result+= " "+palabra;
	}
	
	res.send(result);
})

//*******************************************


app.get("*", function(req, res){
	res.send("PAGINA WEB NO ENCONTRADA, VERIFIQUELO");
})




//*******************************************

//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Servidor Iniciado");
})




