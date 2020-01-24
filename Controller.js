class Controller {

  constructor(serpent, carte, view) {
    this.serpent = serpent;
    this.carte = carte;
    this.view = view;
    var t = this;
    this.timer = setInterval(function(){t.generate_avancer();}, 60); //timer pour déplacer l'ennemi
    
  }

  gerer_deplacement(k){

	 switch(k) {

	  	 case 37 : // touche gauche

	      this.serpent.deplacer(3);
	    
	      break;
	    case 38 : // touche haut

	      this.serpent.deplacer(0);

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
	
  }

  generate_avancer(){

      if(this.serpent.vitesse!=0){
        this.serpent.avancer();
      }
      
      if(this.serpent.detecter_fruit(this.carte.positionFruit)==1){
        
        //this.serpent.manger_fruit();
        console.log("FRUIT")
        this.generate_fruit();
       
      }

      //Vérifier si le serpent rencontre un mur ou se mord
      if(this.serpent.detecter_mur(this.carte.canvas.height, this.carte.canvas.width)!=1 && this.serpent.detecter_corps()!=1){

        var iconeTete = this.serpent.iconeTete;
        var iconeCorps = this.serpent.iconeCorps;
        var positionTete = this.serpent.positionTete;
        var positionQueue = this.serpent.positionQueue;
        var positionsCorps = this.serpent.positionsCorps;

        this.view.disp_serpent(iconeTete,iconeCorps,positionTete,positionQueue,positionsCorps);

      }else{

        //Mort: relancer le jeu
        this.view.add_new_score(this.serpent.score);
        this.start_game();

      }

      //Appel de la vue pour afficher le score actuel
      this.view.disp_score(this.serpent.score);
      
  }


  generate_background(){

  	this.view.disp_background();

  }

  generate_walls(){

    this.carte.iconeMur.addEventListener('load', (e) => {

       this.carte.set_walls();
       this.view.disp_walls(this.carte.iconeMur,this.carte.positionsWalls);

     });
  }

  generate_serpent(){

  	var iconeTete = this.serpent.iconeTete;
  	var iconeCorps = this.serpent.iconeCorps;
  	var positionTete = this.serpent.positionTete;
  	var positionQueue = this.serpent.positionQueue;
    var positionsCorps = this.serpent.positionsCorps;

    var iconeTeteState = false;
    var iconeCorpsState = false;

    iconeTete.addEventListener('load', (e) => {
       iconeCorpsState = true;
    });

    iconeCorps.addEventListener('load',(e)=>{
      iconeCorpsState = true;
    });

    if(iconeTeteState && iconeCorpsState){
    	this.view.disp_serpent(iconeTete,iconeCorps,positionTete,positionQueue,positionsCorps);
    }

  }

  generate_fruit(){

    this.carte.set_fruit();
    var positionFruit = this.carte.positionFruit;
    console.log('generate_fruit')

    this.carte.iconeFruit.addEventListener('load',(e)=>{
      console.log("fruit chargé")
      this.view.disp_fruit(this.carte.iconeFruit,this.carte.positionFruit);
    });

    if(this.view.fruit==true){

      this.view.disp_fruit(this.carte.iconeFruit,this.carte.positionFruit);

    }

  }

  start_game(){

    this.serpent = new ModelSerpent("Snake","images/new/headsnake2.png","images/new/bodysnake.png", [100,100],[108,83]);
    var serpent = this.serpent;

    this.generate_fruit();
    this.generate_background(this.carte.canvas);
    this.generate_walls();
    this.generate_serpent(serpent.iconeTete,serpent.iconeCorps,serpent.positionTete,serpent.positionQueue);

    this.generate_avancer();
     
  }

}