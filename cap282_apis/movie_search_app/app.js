var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


//******************************** Home

app.get("/", function(req, res){
	res.render("search");
})



//********************************* Pagina Results
app.get("/results", function (req, res){
	var query = req.query.search; //aca le asignamos la clave ingresada en el input del form
	var key = "&apikey=thewdb&r"; //aca le ponemos la clave para completar la busqueda en el link
	var url = "http://www.omdbapi.com/?s=" + query + key; //este es el link de la base de peliculas + query + key
	request(url, function (error, response, body) {
 	if(!error && response.statusCode==200){
		const data = JSON.parse(body); //creamos el objeo data
		res.render("results", {data: data});
	
	}
});

});






//*******************************************

//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Servidor de Peliculas esta Escuchando");
})