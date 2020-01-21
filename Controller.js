class Controller {

  constructor(serpent, carte, view) {
    this.serpent = serpent;
    this.carte = carte;
    this.view = view;
  }

  gerer_deplacement(k){

	 switch(k) {

	  	 case 37 : // touche gauche

	      this.serpent.deplacer(3);
	    
	      break;
	    case 38 : // touche haut

	      this.serpent.deplacer(0)
	      break;
	    case 39 : // touche droite


	      this.serpent.deplacer(1)
	      break;

	    case 40 : // touche bas
	      
	      this.serpent.deplacer(2)
	      break;

	    default :
	    return;
	  }

	  var iconeTete = this.serpent.iconeTete;
	  var iconeCorps = this.serpent.iconeCorps;
	  var positionTete = this.serpent.positionTete;
	  var positionQueue = this.serpent.positionQueue;
	  var positionsCorps = this.serpent.positionsCorps;

	  this.view.disp_serpent(iconeTete,iconeCorps,positionTete,positionQueue,positionsCorps);
	  this.generate_walls();
  }

  detecter_fruit(){

  	this.serpent.manger_fruit();
  	this.carte.remove_fruit(x,y);
  	this.carte.add_fruit();

  }


  detecter_queue(){
  	
  	this.serpent.mourir();

  }

  detecter_mur(){

  	this.serpent.mourir();

  }

  generate_background(){

  	this.view.disp_background();
  }

  generate_walls(){

  	var imgWall = new Image();
  	imgWall.src = "images/wall.png";

  	var view = this.view;
  	var canvasHeight = this.carte.canvas.height;
  	var canvasWidth = this.carte.canvas.width;

  	imgWall.addEventListener('load', (e) => {

  			let i =0;

  			while(i<canvas.width){

  				view.disp_walls(imgWall,i,0);
  				i+=37;
  			}

  			i =0;

  			while(i<canvasWidth){

  				view.disp_walls(imgWall,0,i);
  				i+=37;
  			}

  			i =0;

  			while(i<canvasWidth){

  				view.disp_walls(imgWall,canvasHeight-37,i);
  				context.drawImage(imgWall, canvas.height-37 ,i);
  				i+=37;
  			}

  			i =0;

  			while(i<canvasWidth){

  				view.disp_walls(imgWall,i,canvasHeight-37);
  				i+=37;
  			}

  	 });
  }

  generate_serpent(){

  	var iconeTete = this.serpent.iconeTete;
  	var iconeCorps = this.serpent.iconeCorps;
  	var positionTete = this.serpent.positionTete;
  	var positionQueue = this.serpent.positionQueue;

  	view.disp_serpent(iconeTete,iconeCorps,positionTete,positionQueue);

  }







}