var mongoose = require ("mongoose");


//USER: EMAIL, NAME
var userSchema=new mongoose.Schema({
	email: String,
	name: String,
	//en las referencias, cambiamos el Schema, del post
	posts: [{
		type: 	mongoose.Schema.Types.ObjectId,
		ref: "Posts"
	}]
});

module.exports = mongoose.model("User", userSchema);
