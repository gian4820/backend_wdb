var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

///adding a new cat to the db
//En estas lineas comentadas es para crear un nuevo gato a l bd. Abajo podemos hacer lo mismo pero de otra manera

// var georgy = new Cat({
// 	name: "Georgy",
// 	age: 14,
// 	temperament: "Grouchy"
// });

// georgy.save(function(err, cat){
// 	if(err){
// 		console.log("Algun error");
// }
// 	else{
// 		console.log("================================")
// 		console.log("Guardamos un nuevo gato a la db");
// 		console.log("================================")

// 	console.log(cat);
// }
// })



Cat.create({
	name: "Laiza",
	age: 10,
	temperament: "Manzita"
},
	function(err, cat){
	if (err){
		console.log("UPS error!");
		console.log(err);
	}
	else{
		console.log("=============")
		console.log(cat);
		console.log("=============")

	}
});

//muetra todos los cats de la db

Cat.find({}, function(err, cats){
		if(err){
			console.log("=============")
			console.log("Oh no! Error");
			console.log("=============")

		}
	else{
		console.log("=============")
		console.log("All the cats");
		console.log("=============")

		console.log(cats);
	}
});