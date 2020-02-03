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
    this.oldTete = []
    this.oldQueue = []

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

  	//this.position .... 

    //console.log(this.positionQueue+' '+this.positionTete+ ' '+ this.positionsCorps.length);
          //sauvegarde des coordonnées actuelles pour supprimer

     // if (this.positionsCorps.length == 0){

       // this.positionQueue[0] = this.positionTete[0] - 32;
        //this.positionQueue[1] = this.positionTete[1] - 32;
      
      //}

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

        this.positionsCorps[0][0] = oldTete[0];
        this.positionsCorps[0][1] = oldTete[1];
        this.positionsCorps[0][2] = oldTete[2];
        
        this.positionQueue[0] = this.positionsCorps[this.positionsCorps.length - 1][0];
        this.positionQueue[1] = this.positionsCorps[this.positionsCorps.length - 1][1];
        this.positionQueue[2] = this.positionsCorps[this.positionsCorps.length - 1][2];

        for (var i = this.positionsCorps.length - 1; i >= 1; i--) {
          this.positionsCorps[i][0] = this.positionsCorps[i - 1][0];
          this.positionsCorps[i][1] = this.positionsCorps[i - 1][1];
          this.positionsCorps[i][2] = this.positionsCorps[i - 1][2];
        
        }

      } else {
        //console.log('oldTete ' + oldTete + ' new tete ' + this.positionTete)
        this.positionQueue[0] = oldTete[0]
        this.positionQueue[1] = oldTete[1]
        this.positionQueue[2] = oldTete[2];
      }

      

      /*switch(this.positionQueue[2]){

        case 0:  //Vers le haut

          let haut = this.positionQueue[1] - this.vitesse
          this.positionQueue[1] -= this.vitesse

          break;
      
        case 1: //Vers la droite

          let droite = this.positionQueue[0] + this.vitesse
          this.positionQueue[0] += this.vitesse
          break;

        case 2: //Vers le bas

          let bas = this.positionQueue[1] + this.vitesse
          this.positionQueue[1] += this.vitesse
          break;

        case 3: //Vers la gauche 

          let gauche = this.positionQueue[0] - this.vitesse
          this.positionQueue[0] -= this.vitesse
          break;
  
      }*/

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

    this.oldTete = this.positionTete;
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

    if(this.positionQueue[2] == 0){

      positionAjoutCorp[0] = this.positionQueue[0] 
      positionAjoutCorp[1] = this.positionQueue[1] + 32
      positionAjoutCorp[2] = this.positionQueue[2]
      this.positionsCorps.push(this.positionQueue) 

    } else if (this.positionQueue[2] == 1){

      positionAjoutCorp[0] = this.positionQueue[0] - 32
      positionAjoutCorp[1] = this.positionQueue[1] 
      positionAjoutCorp[2] = this.positionQueue[2]
      this.positionsCorps.push(this.positionQueue)

    } else if (this.positionQueue[2] == 2){

      positionAjoutCorp[0] = this.positionQueue[0] 
      positionAjoutCorp[1] = this.positionQueue[1] - 32
      positionAjoutCorp[2] = this.positionQueue[2]
      this.positionsCorps.push(this.positionQueue)

    } else if (this.positionQueue[2] == 3){

      positionAjoutCorp[0] = this.positionQueue[0] + 32
      positionAjoutCorp[1] = this.positionQueue[1] 
      positionAjoutCorp[2] = this.positionQueue[2]
      this.positionsCorps.push(this.positionQueue)

    }

    this.positionQueue[0] = positionAjoutCorp[0];
    this.positionQueue[1] = positionAjoutCorp[1];
    this.positionQueue[2] = positionAjoutCorp[2];
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





