var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressSanitizer = require ("express-sanitizer");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

//***********APP CONFIG*********************************

mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser:true});  //restful_blog_app es el nombre de la base de datos, si no existe ese 																						nombre la crea.
app.set("view engine", "ejs");  //esto sirve para no escribir el .ejs cuando llamamos a las paginas .ejs por ej landing.ejs
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));  //aca le decimos a express que utilice bodyParser
app.use(expressSanitizer());
app.use(methodOverride("_method")) //el nombre entre comillas, es el nombre _method que lo vamos  a llamar, le podemos poner el nombre que suisieramos.

//************MONGOOSE MODEL CONFIG*********************

var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}	
});

var Blog = mongoose.model("Blog", blogSchema);


//**************RESTFUL ROUTES**************************

app.get("/", function(req, res){
	res.redirect("/blogs");
})


app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		}
		else{
			res.render("index", {blogs: blogs});

		}
	});
});


//NEW ROUTE
app.get("/blogs/new", function(req, res){
	res.render("new");
})

//CREATE ROUTE
app.post("/blogs", function(req, res){
	//create blog
	
	//Esta linea sirve para no poner script cuando creamos un post, el console log se puede borrar, es solo mostrar lo que guarda
	console.log(req.body);
	req.body.blog.body=req.sanitize(req.body.blog.body)
	console.log("======");
	console.log(req.body);
	
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		}
		else{
			//redirect to blog index
			res.redirect("/blogs");
		}
	})
})

//SHOW POST 
app.get("/blogs/:id", function(req, res){
	// Blog.find(id, callback)  -> en id va el parametro id de arriba, y en callback va la funcion de respuesta
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
			console.log(err);
		}
		else{
			res.render("show", {blog: foundBlog});
		}
	});
	
});


//EDIT ROUTE

app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			console.log(err);
			res.redirect("/blogs");
		}else{
			res.render("edit", {blog : foundBlog});
		}
	})
})


//UPDATE ROUTE

app.put("/blogs/:id", function(req, res){
	req.body.blog.body= req.sanitize(req.body.blog.body); //Esta linea sirve para no poner script cuando actualizamos un post
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs/"+ req.params.id);
		}
	})
})


//DELETE

app.delete("/blogs/:id", function(req, res){
	Blog.findByIdAndDelete(req.params.id, function(err){
		if(err){
			res.redirect("/blogs");
		}
		else{
			res.redirect("/blogs");

		}
	})
})



//****************SERVER LISTENING**********************


//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("==================================")
	console.log("BLOG Server is Listening");
	console.log("==================================")
})