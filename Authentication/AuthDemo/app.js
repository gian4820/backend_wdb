var express  = require ("express");
var mongoose = require ("mongoose");
var passport = require ("passport");
var bodyParser = require ("body-parser");
var User = require("./models/user");
var LocalStrategy = require ("passport-local");
var passportLocalMongoose = require ("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");


var app = express();
app.set('view engine', 'ejs');
//Lo que esta abajo lo ponemos cuando necesitamos enviar info en el POST, como por ej el form registre
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
	//aqui le decimos que secret va a ser la paralbra que desencripte la informacion de la sesion
	secret: "Laiza la mejor",
	//lo de abajo corresponde, proque sino nos va a pedir que lo guardemos
	resave: false,
	saveUninitialized: false	
}));

//aqui le decimos a express que inicialize passport
app.use(passport.initialize());
app.use(passport.session());

//aqui le decimos que cuando inicie la sesion, desencripte la info del usuario, y cuando la guarde nuevamente, la encripte
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//*******************ROUTES*****************************************

app.get("/", function(req,res){
	res.render("home");
});


app.get("/secret", isLoggedIn, function(req, res){
	res.render("secret");
})


//**********************AUTH ROUTES*********************************

app.get("/register", function(req, res){
	res.render("register");
})

//handling user signup
app.post("/register", function(req, res){
	//aca traera la info del form register
	req.body.username
	req.body.password
	//en la linea de abajo le pasamos el usuario como un argumento, y la password en otro argumento condificado
	User.register(new User ({username: req.body.username}), req.body.password, function (err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}else{
			passport.authenticate("local")(req, res, function(){
				res.redirect("/secret");
			});
			
		}
	});
});


//Render Login form
app.get("/login", function(req, res){
	res.render("login");
})

//Login Logic
//middleware
app.post("/login", passport.authenticate("local",{
	successRedirect: "/secret",
	failureRedirect: "/login"
}),
	function(req, res){
	
});


//Logout
app.get("/logout", function(req, res){
	//aqui passport destruye el inicio de sesion utilizado
	req.logout();
	res.redirect("/");
})

//middleware, se hace esto, porque cuando el usuario hace logout, se puede seguir ingresando al secret, y con este
//codigo, hace que no pueda ingresar mas al secret si esta desloggeado

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		//next quiere, decir, que cuando llama a esta funcion, luego next sigue con el codigo que le sigue, que esta mas arriba
		//despues de que llama a la funcion isLoggedIn
		return next();
	}
	res.redirect("/login");
}


//**********************************************************************


//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
console.log("==================================");
console.log("Authentication Server si Listening");
console.log("==================================");
});

