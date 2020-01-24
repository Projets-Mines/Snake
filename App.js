var canvas = document.getElementById("carte");
var body = document.getElementById('game_body');
var context = this.canvas.getContext('2d');

var carte = new ModelCarte(canvas,"images/new/food.png", "images/new/wall.png");
var serpent = new ModelSerpent("Snake","images/new/headsnake2.png","images/new/bodysnake.png", [100,100],[108,83]);
var view = new View(canvas,context,"images/new/boardgame.png");
var app = new Controller(serpent,carte,view); 

app.start_game();

body.addEventListener('keydown',function(e){

        k = e.keyCode;
        e.preventDefault(); //annuler le comportement par défaut des flèches 
        app.gerer_deplacement(k);


})

