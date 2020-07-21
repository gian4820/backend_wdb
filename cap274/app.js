var express = require ("express");
app = express();

//*******************************************

app.use(express.static("public"));  // decirle que hay una carpeta public, para no crear la ruta completa en el link del css
app.set("view engine", "ejs"); //esto sirve para acortar el codigo, en este archivo, para sacarle la extension .ejs a donde linkea el render


//*******************************************

app.get("/", function(req, res){
	res.render("home");
})


app.get("/fallinlove/:con", function(req, res){
	var con = req.params.con;
	res.render("love", {variable: con});
	
})

app.get("/posts", function(req, res){
	var posts=[
		{title: "Coronavirus en CBA", author: "Gian"},
		{title:"Hola perritos", author: "Lula"},
		{title: "Hola monguis", author:"frank"},
	];
	res.render("posts", {posts: posts});
})


//*******************************************

//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Servidor Escuchando");
})