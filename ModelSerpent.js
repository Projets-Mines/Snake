class ModelSerpent {

  constructor(name, iconeTete, iconeCorps, positionDepartTete, positionDepartQueue,scoreDepart) {

  	this.name = name;

  	this.iconeTete = new Image();
  	this.iconeCorps = new Image();
  	this.iconeTete.src = iconeTete; //chemin de l'image
  	this.iconeCorps.src = iconeCorps; 

  	this.taille = 2; //tête et queue

  	this.score = 0;
  	this.vitesse = 32;
  	//this.direction = 1; //0: haut, 1: droite, 2:bas, 3: gauche
    this.oldTetes = [];
    this.oldQueue = [];

  	this.positionTete = positionDepartTete; //[x,y,z] Coordonnées x,y  + direction z
    this.positionTete[2] = 2;
  	this.positionQueue = positionDepartQueue; //[x,y,z]
    this.positionQueue[2] = 2
  	this.positionsCorps = []; //[[x,y,z][x,y,z] ... ]
    //this.positionsCorps.push(this.positionQueue);
    this.oldTetes.push(this.positionTete);

    this.audioMourir =  new Audio('sounds/aie.mp3');
    this.audioManger = new Audio('sounds/croq.mp3');

    this.highScore = scoreDepart;

  }

  avancer(){


      let oldTete = []
      oldTete[0] = this.positionTete[0] 
      oldTete[1] = this.positionTete[1]
      oldTete[2] = this.positionTete[2]

      console.log('first '+this.positionTete)

     switch(this.positionTete[2]){

        case 0:  //Vers le haut
          //console.log('haut')
          let haut = this.positionTete[1] - this.vitesse
          this.positionTete[1] -= this.vitesse

          break;
      
        case 1: //Vers la droite
          //console.log('droite')
          let droite = this.positionTete[0] + this.vitesse
          this.positionTete[0] += this.vitesse
          break;

        case 2: //Vers le bas
          //console.log('bas')
          let bas = this.positionTete[1] + this.vitesse
          this.positionTete[1] += this.vitesse
          break;

        case 3: //Vers la gauche 
          //console.log('gauche')
          let gauche = this.positionTete[0] - this.vitesse
          this.positionTete[0] -= this.vitesse
          break;
  
      }

      console.log('second '+this.positionTete)


      if (this.positionsCorps.length != 0){

        this.positionsCorps.unshift([oldTete[0], oldTete[1], oldTete[2]])
        
        this.positionQueue[0] = this.positionsCorps[this.positionsCorps.length - 1][0];
        this.positionQueue[1] = this.positionsCorps[this.positionsCorps.length - 1][1];
        this.positionQueue[2] = this.positionsCorps[this.positionsCorps.length - 1][2];

        this.positionsCorps.pop()

      } else {
        //console.log('oldTete ' + oldTete + ' new tete ' + this.positionTete)
        this.positionQueue[0] = oldTete[0]
        this.positionQueue[1] = oldTete[1]
        this.positionQueue[2] = oldTete[2];
      }

      

      this.set_score(1);  
    
  }

  set_score(x){

    this.score += x;

    if(this.highScore<this.score){

      this.highScore = this.score;
    }

  }

  deplacer(direction){

  	this.positionTete[2] = direction;
    var oldTeteCourant = []
    oldTeteCourant[0] = this.positionTete[0]
    oldTeteCourant[1] = this.positionTete[1]
    oldTeteCourant[2] = this.positionTete[2]
    this.oldTetes.push(oldTeteCourant)
    console.log('old tetes deplacer'+this.oldTetes)
    this.iconeTete.src = "images/new/headsnake" + this.positionTete[2] + ".png";

  }

  detecter_fruit(positionFruit){

    switch(this.positionTete[2]){

      case 0:

        if( (this.positionTete[0]>=positionFruit[0] && this.positionTete[0]<=(positionFruit[0]+29)
          && this.positionTete[1]>=positionFruit[1] && this.positionTete[1]<=(positionFruit[1]+29) )
          ||(this.positionTete[0]+32>=positionFruit[0] && this.positionTete[0]+32<=(positionFruit[0]+29)
          && this.positionTete[1]>=positionFruit[1] && this.positionTete[1]<=(positionFruit[1]+29))
            ){
          return 1;
        }

      break;

      case 1:

        if( (this.positionTete[0]+32>=positionFruit[0] && this.positionTete[0]+32<=(positionFruit[0]+29)
          && this.positionTete[1]>=positionFruit[1] && this.positionTete[1]<=(positionFruit[1]+29))
          ||(this.positionTete[0]+32>=positionFruit[0] && this.positionTete[0]+32<=(positionFruit[0]+29)
          && this.positionTete[1]+32>=positionFruit[1] && this.positionTete[1]+32<=(positionFruit[1]+29))
            ){
          return 1;
        }

      break;

      case 2:

      if( (this.positionTete[0]>=positionFruit[0] && this.positionTete[0]<=(positionFruit[0]+29)
          && this.positionTete[1]+32>=positionFruit[1] && this.positionTete[1]+32<=(positionFruit[1]+29) )
          ||(this.positionTete[0]+32>=positionFruit[0] && this.positionTete[0]+32<=(positionFruit[0]+29)
          && this.positionTete[1]+32>=positionFruit[1] && this.positionTete[1]+32<=(positionFruit[1]+29))
            ){
          return 1;
      }


      break;

      case 3:

       if( (this.positionTete[0]>=positionFruit[0] && this.positionTete[0]<=(positionFruit[0]+29)
          && this.positionTete[1]>=positionFruit[1] && this.positionTete[1]<=(positionFruit[1]+29))
          ||(this.positionTete[0]>=positionFruit[0] && this.positionTete[0]<=(positionFruit[0]+29)
          && this.positionTete[1]+32>=positionFruit[1] && this.positionTete[1]+32<=(positionFruit[1]+29))
            ){
          return 1;
        }

    
      break;

      default:
      return;

    }

  }

  manger_fruit(){

  	this.taille += 1;
    let positionAjoutCorp = []

    positionAjoutCorp[0] = this.oldTetes[this.oldTetes.length -1][0] 
    positionAjoutCorp[1] = this.oldTetes[this.oldTetes.length -1][1] 
    positionAjoutCorp[2] = this.oldTetes[this.oldTetes.length -1][2] 
    this.positionsCorps.unshift([positionAjoutCorp[0], positionAjoutCorp[1], positionAjoutCorp[2]])

    /*if(this.positionTete[2] == 0){

      positionAjoutCorp[0] = this.positionTete[0] 
      positionAjoutCorp[1] = this.positionTete[1] + 32
      positionAjoutCorp[2] = this.positionTete[2]
      this.positionsCorps.unshift([this.positionTete[0], this.positionTete[1], this.positionTete[2]]) 

    } else if (this.positionTete[2] == 1){

      positionAjoutCorp[0] = this.positionTete[0] - 32
      positionAjoutCorp[1] = this.positionTete[1] 
      positionAjoutCorp[2] = this.positionTete[2]
      this.positionsCorps.unshift([this.positionTete[0], this.positionTete[1], this.positionTete[2]]) 

    } else if (this.positionTete[2] == 2){

      positionAjoutCorp[0] = this.positionTete[0] 
      positionAjoutCorp[1] = this.positionTete[1] - 32
      positionAjoutCorp[2] = this.positionTete[2]
      this.positionsCorps.unshift([this.positionTete[0], this.positionTete[1], this.positionTete[2]]) 

    } else if (this.positionTete[2] == 3){

      positionAjoutCorp[0] = this.positionTete[0] + 32
      positionAjoutCorp[1] = this.positionTete[1] 
      positionAjoutCorp[2] = this.positionTete[2]
      this.positionsCorps.unshift([this.positionTete[0], this.positionTete[1], this.positionTete[2]]) 

    }*/

    //this.positionQueue[0] = positionAjoutCorp[0];
    //this.positionQueue[1] = positionAjoutCorp[1];
    //this.positionQueue[2] = positionAjoutCorp[2];
    this.score+=100;

    this.audioManger.play();
  }

  detecter_mur(mapHeight, mapWidth){

    if(this.positionTete[1]<=37 || this.positionTete[1]>=(mapHeight-74) || this.positionTete[0]<=37 ||this.positionTete[0]>=(mapWidth-74)){
      //Rencontre un mur : meurt
      this.mourir();
      return 1;
    }

    //Ne meurt pas
    return 0;

  }


  detecter_corps(){

    for (var i = 0; i<this.positionsCorps.length; i++){
      if ( this.positionTete[0] == this.positionsCorps[i][0] && this.positionTete[1] == this.positionsCorp[i][1]){
        this.mourir()
      }

    }
    return 0;


  }

  mourir(){

    if(this.vitesse!=0){

      //Jouer le son de mort
      this.audioMourir.play();
    	this.vitesse = 0;

    }

  } 


}





