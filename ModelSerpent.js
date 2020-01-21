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
  	this.direction = 1; //0: haut, 1: droite, 2:bas, 3: gauche

  	this.positionTete = positionDepartTete; //[x,y,z] Coordonnées x,y  + direction z
  	this.positionQueue = positionDepartQueue; //[x,y,z]
  	this.positionsCorps = []; //[[x,y,z][x,y,z] ... ]

 	//skin

  }

  avancer(){

  	//this.position .... 
  }

  deplacer(direction){

  	this.direction = direction;
    this.iconeTete.src = "images/headsnake" + this.direction + ".png";

  }

  manger_fruit(){

  	this.taille += 1;
  }

  mourir(){

  	this.vitesse = 0;

  } 

  score(points){

  	this.score += points;

  }




}





