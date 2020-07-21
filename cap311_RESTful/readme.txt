RESTful ROUTING

THE TABLE OF ALL THE RESTful ROUTES

NAME		PATH		HTTP VERB		PURPOSE
=================================================
index		/dogs		GET			List all dogs
new			/dogs/new	GET			Show new dog form
create		/dogs		POST		Create a new dog, then redirect anywhere
show		/dogs/:id	GET			Show info of selected dog
edit	/dogs/:id/edit	GET			Show edit form for one dog
Update		/dogs/:id	PUT			Update any dog, then redirect anywhere
destroy		/dogs/:id	DELETE		Delete selected dogs, then redirect anywhere


*Al crear una nueva carpeta o projecto, poner en consola en la carepta:
	*npm init
	*npm install express mongoose body-parser --save