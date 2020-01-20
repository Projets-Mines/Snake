class Controller {

  constructor(ModelSerpent, ModelCarte, view) {
    this.ModelSerpent = ModelSerpent;
    this.ModelCarte = ModelCarte;
    this.View = View;
  }

  detecter_deplacement(k){


	 switch(k) {


	  	 case 37 : // touche gauche
	  
	      this.ModelSerpent.deplacer(3)
	    
	      break;
	    case 38 : // touche haut

	       this.ModelSerpent.deplacer(0)
	      break;
	    case 39 : // touche droite


	       this.ModelSerpent.deplacer(1)
	      break;

	    case 40 : // touche bas
	      
	       this.ModelSerpent.deplacer(2)
	      break;

	    default :
	  }

  }

  detecter_fruit(){

  	this.ModelSerpent.manger_fruit();
  	this.ModelCarte.remove_fruit(x,y);
  	this.ModelCarte.add_fruit();

  }


  detecter_queue(){

  	this.ModelSerpent.mourir();

  }

  detecter_mur(){

  	this.ModelSerpent.mourir();

  }





}