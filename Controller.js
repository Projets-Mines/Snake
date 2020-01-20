class Controller {

  constructor(serpent, carte, view) {
    this.serpent = serpent;
    this.carte = carte;
    this.View = View;
  }

  detecter_deplacement(k){


	 switch(k) {


	  	 case 37 : // touche gauche
	  
	      this.serpent.deplacer(3)
	    
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
	  }

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





}