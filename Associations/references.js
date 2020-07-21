var mongoose = require("mongoose");
mongoose.connect ("mongodb://localhost/blog_demo_2"); //cambiamos el nombre de la base

var Post = require("./models/post");
var User = require("./models/user");
//----------------------------------------------------

//POST CREATE

Post.create({
	title: "UFC 226",
	content: "Ufc proximo, donde vendra una pelea de cinturon"
},
	function(err, post){
		User.findOne({email: "alnso@f1.com"}, function(err, foundUser){
			if(err){
				console.log(err);
			}else{
				foundUser.posts.push(post);
				foundUser.save(function(err, data){
					if(err){
						console.log(err);
					}else{
						console.log(data);
					}
				});
			}
		});
	}
);

//*****************************************************

// User.create( {
// 	email: "alnso@f1.com",
// 	name: "Fernando Alonso"
	
// });


//******************************************************

//Find User
// User.findOne({email: "alnso@f1.com"}).populate("posts").exec(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });


//Find all post from that user
