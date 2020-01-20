class ModelSerpent {

  constructor(name, iconeTete, iconeCorps, canvas, carte, positionDepartTete, positionDepartQueue) {

  	this.name = name;

  	this.iconeTete = new Image();
  	this.iconeCorps = new Image();
  	this.iconeTete.src = iconeTete; //chemin de l'image
  	this.iconeCorps.src = iconeCorps; 

  	this.canvas = canvas;
  	this.carte = carte;

  	this.taille = 2; //tête et queue

  	this.score = 0;
  	this.vitesse = 1;
  	this direction = 1; //0: haut, 1: droite, 2:bas, 3: gauche

  	this.positionTete = positionDepartTete; //[x,y]
  	this.positionQueue = positionDepartQueue; //[x,y]
  	this.positionsCorps = []; //[[x,y][x,y] ... ]

 	//skin

  }

  avancer(){

  	//this.position .... 
  }

  deplacer(direction){

  	this.direction = direction;

  }

  manger_fruit(){

  	this.taille += 1;
  }

  mourir(){

  	this.vitesse = 0;

  } 

  score(points){

  	this.score + = points;

  }




}





