var express = require("express");
app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends= ["Pedro", "Alejandra", "Camila", "Rita"];


app.get("/", function(req, res){
	res.render("home");
})



app.post("/addfriend", function(req, res){
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect("/friends");
	
})


app.get("/friends", function(req, res){
	res.render("friends", {friends: friends});
})


//*******************************************

//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Servidor Escuchando");
})