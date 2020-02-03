var canvas = document.getElementById("carte");
var body = document.getElementById('game_body');
var context = this.canvas.getContext('2d');

/*<<<<<<< HEAD
var carte = new ModelCarte(canvas);
var serpent = new ModelSerpent("Snake","images/headsnake2.png","images/bodysnake.png",canvas,carte,[100,132],[100,100]);

var view = new View(canvas,context,"images/boardgame.png");

const app = new Controller(serpent,carte,view); 

app.generate_fruit();
app.generate_background(canvas);
app.generate_walls();
app.generate_serpent(serpent.iconeTete,serpent.iconeCorps,serpent.positionTete,serpent.positionQueue);
app.generate_avancer()

var body = document.getElementById('game_body');
=======*/
var carte = new ModelCarte(canvas,"images/new/food.png", "images/new/wall.png");
var serpent = new ModelSerpent("Snake","images/new/headsnake2.png","images/new/bodysnake.png", [100,100],[108,83],0);
var view = new View(canvas,context,"images/new/boardgame.png");
var app = new Controller(serpent,carte,view); 

app.start_game();
//>>>>>>> devYael

body.addEventListener('keydown',function(e){

        k = e.keyCode;
        e.preventDefault(); //annuler le comportement par défaut des flèches 
        app.gerer_deplacement(k);


})

