var mongoose = require("mongoose");
mongoose.connect ("mongodb://localhost/blog_demo");

//POST - Title, content
var postSchema=new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);

//----------------------------------------------------

//USER: EMAIL, NAME
var userSchema=new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);




//------------------------------------------------------

// var newUser = new User({
// 	email: "andrei@andrenani.com",
// 	name: "Andrea Inigo"
// });

// //aqui agregamos los posts al usuario-------------------

// newUser.posts.push({
// 	title: "El perreo",
// 	content: "El perreo como debe ser, y cuando debe ser. Escucha ya lo mejor de Carlo G del genero"
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log(user);
// 	}
// });


// //------------------------------------------------------

// var newPost = new Post({
// 	title: "Harry Potter",
// 	content: "Este es el posteo de la pelicula de Harry"
// });

// newPost.save(function(err, post){
// 	if (err){
// 		console.log(err);
// 	}else{
// 		console.log(post)
// 	}
// });


User.findOne({name: "Andrea Inigo"}, function(err,user){
	if(err){
		console.log(err);
	}else{
		user.posts.push({
			title: "Lo mejor del amor",
			content: "Fue lo mejor del amor lo que he 			  vivido con tigo, dejo mi ...."
		});
		
		user.save(function(err, user){
			if (err){
				console.log(err);
			}else{
				console.log(user);
			}
		});
	}
})




























