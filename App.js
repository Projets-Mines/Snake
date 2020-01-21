
var canvas = document.getElementById("carte");
var context = this.canvas.getContext('2d');

var carte = new ModelCarte(canvas);
var serpent = new ModelSerpent("Snake","images/headsnake2.png","images/bodysnake.png",canvas,carte,[100,100],[108,83]);
var view = new View(canvas,context,"images/boardgame.png");

const app = new Controller(serpent,carte,view); 

app.generate_background(canvas);
app.generate_walls();
app.generate_serpent(serpent.iconeTete,serpent.iconeCorps,serpent.positionTete,serpent.positionQueue);

var body = document.getElementById('game_body');

body.addEventListener('keydown',function(e){

	k = e.keyCode;
	e.preventDefault(); //annuler le comportement par défaut des flèches 
	app.gerer_deplacement(k);


})
 