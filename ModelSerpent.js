class ModelSerpent {

  constructor(name, iconeTete, iconeCorps, positionDepartTete, positionDepartQueue) {

  	this.name = name;

  	this.iconeTete = new Image();
  	this.iconeCorps = new Image();
  	this.iconeTete.src = iconeTete; //chemin de l'image
  	this.iconeCorps.src = iconeCorps; 

  	this.taille = 2; //tête et queue

  	this.score = 0;
  	this.vitesse = 3;
    this.oldTete = []
    this.oldQueue = []
  	this.positionTete = positionDepartTete; //[x,y,z] Coordonnées x,y  + direction z
    this.positionTete[2] = 2
  	this.positionQueue = positionDepartQueue; //[x,y,z]
    this.positionQueue[2] = 2
  	this.positionsCorps = []; //[[x,y,z][x,y,z] ... ]

    this.audioMourir =  new Audio('sounds/aie.mp3');
    this.audioManger = new Audio('sounds/croq.mp3');

  }

  avancer(){

  	//this.position .... 
    
      console.log('c')
          //sauvegarde des coordonnées actuelles pour supprimer
      
      let oldQueue = this.positionQueue

      switch(this.positionTete[2]){

        case 0:  //Vers le haut

          let haut = this.positionTete[1] - this.vitesse
          this.positionTete[1] -= this.vitesse

          break;
      
        case 1: //Vers la droite

          let droite = this.positionTete[0] + this.vitesse
          this.positionTete[0] += this.vitesse
          break;

        case 2: //Vers le bas

          let bas = this.positionTete[1] + this.vitesse
          this.positionTete[1] += this.vitesse
          break;

        case 3: //Vers la gauche 

          let gauche = this.positionTete[0] - this.vitesse
          this.positionTete[0] -= this.vitesse
          break;
  
      }

      //let oldTete = this.positionTete

      if (this.positionsCorps.length != 0){
        for (var i = 0; i >= this.positionsCorps.length - 1; i++) {

          var positionCorpCourant = this.positionsCorps[i]
          //console.log()
          var directionPCC;

          if (this.oldTete[0] == positionCorpCourant[0] && this.oldTete[1] == positionCorpCourant[1] ){
            directionPCC = this.oldTete[2]
            this.positionsCorps[i][2] = directionPCC
          } else {
            directionPCC = positionCorpCourant[2]
          }

          switch(directionPCC){

            case 0:  //Vers le haut

              let haut = this.positionsCorps[i][1] - this.vitesse
              this.positionsCorps[i][1] -= this.vitesse

              break;
          
            case 1: //Vers la droite

              let droite = this.positionsCorps[i][0] + this.vitesse
              this.positionsCorps[i][0] += this.vitesse
              break;

            case 2: //Vers le bas

              let bas = this.positionsCorps[i][1] + this.vitesse
              this.positionsCorps[i][1] += this.vitesse
              break;

            case 3: //Vers la gauche 

              let gauche = this.positionsCorps[i][0] - this.vitesse
              this.positionsCorps[i][0] -= this.vitesse
              break;
    
          }

        }
      }

      if (this.oldTete[0] == this.positionQueue[0] && this.oldTete[1] == this.positionQueue[1] ){
            this.positionQueue[2] = oldTete[2]
      } 

      switch(this.positionQueue[2]){

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
  
      }

      this.score+=1;

      //supprimer effacer le canvas à l'ancienne position 
      //this.carte.context.clearRect(oldX,oldY,this.largeur,this.hauteur)

      //redéfinir le fond du canvas
      //this.carte.set_background()


      //placer le personnage à la nouvelle position sur le canvas
      //this.carte.context.drawImage(this.image,this.posX,this.posY, 20, 20)    
    
  }

  deplacer(direction){

  	this.positionTete[2] = direction;
    this.oldTete = this.positionTete;
    this.iconeTete.src = "images/new/headsnake" + this.positionTete[2] + ".png";

  }

  detecter_fruit(positionFruit){

    var x = positionFruit [0];
    var y = positionFruit [1];

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
      positionAjoutCorp[1] = this.positionQueue[1] + this.vitesse
      positionAjoutCorp[2] = this.positionQueue[2]
      this.positionsCorps.push(this.positionQueue) 

    } else if (this.positionQueue[2] == 1){

      positionAjoutCorp[0] = this.positionQueue[0] - this.vitesse
      positionAjoutCorp[1] = this.positionQueue[1] 
      positionAjoutCorp[2] = this.positionQueue[2]
      this.positionsCorps.push(this.positionQueue)

    } else if (this.positionQueue[2] == 2){

      positionAjoutCorp[0] = this.positionQueue[0] 
      positionAjoutCorp[1] = this.positionQueue[1] - this.vitesse
      positionAjoutCorp[2] = this.positionQueue[2]
      this.positionsCorps.push(this.positionQueue)

    } else if (this.positionQueue[2] == 3){

      positionAjoutCorp[0] = this.positionQueue[0] + this.vitesse
      positionAjoutCorp[1] = this.positionQueue[1] 
      positionAjoutCorp[2] = this.positionQueue[2]
      this.positionsCorps.push(this.positionQueue)

    }

    this.positionQueue = positionAjoutCorp;
    this.score+=100;

    audioManger.play();
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





