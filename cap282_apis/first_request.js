const request = require('request');

//este codigo, fue copiado desde git/request, y hace un request a google, funciona ok

// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


//---------------------------------------------

request('https://jsonplaceholder.typicode.com/users/2', function (error, response, body) {
 	if(!error && response.statusCode==200){
		const parseData = JSON.parse(body); //creamos el objeo
		console.log("Name: " + parseData.name + ". City: " + parseData.address.city); //aqui seleccionamos que mostrar de todos los datos del usuario.
	}
});



