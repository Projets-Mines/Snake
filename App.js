
var canvas = document.getElementById("carte");

var carte = new ModelCarte(canvas);
var serpent = new ModelSerpent("Snake","images/headsnake.png","images/bodysnake.png",canvas,carte,100,100);
var view = new View(carte,"images/boardgame.png");

const app = new Controller(serpent,carte,view);

//TESTS : 

view.disp_background();
view.disp_walls();

/*
body[0].addEventListener('keydown',function({

	k = e.keyCode;
	e.preventDefault(); //annuler le comportement par défaut des flèches 
	app.detecter_deplacement(k);


}))
 
*/