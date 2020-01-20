const app = new Controller(new Model(), new View());

body[0].addEventListener('keydown',function({

	k = e.keyCode;
	e.preventDefault(); //annuler le comportement par défaut des flèches 
	app.detecter_deplacement(k);


}))
 
