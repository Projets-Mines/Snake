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
  	//this.direction = 1; //0: haut, 1: droite, 2:bas, 3: gauche
    this.oldTetes = [];
    this.oldQueue = [];
  	this.positionTete = positionDepartTete; //[x,y,z] Coordonnées x,y  + direction z
    this.positionTete[2] = 2;
  	this.positionQueue = positionDepartQueue; //[x,y,z]
    this.positionQueue[2] = 2
  	this.positionsCorps = []; //[[x,y,z][x,y,z] ... ]
    this.oldTetes.push(this.positionTete);

    //this.timer = setInterval(function(){t.avancer();}, 100);

 	//skin

  }

  avancer(){

  	//this.position .... 

      console.log(this.positionQueue+' '+this.positionTete)
          //sauvegarde des coordonnées actuelles pour supprimer
      

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


      

      for (var i = 0 ; i < this.oldTetes.length; i++) {
        console.log('controle '+this.oldTetes[i][0] == this.positionQueue[0] && this.oldTetes[i][1] == this.positionQueue[1])
        if (this.oldTetes[i][0] == this.positionQueue[0] && this.oldTetes[i][1] == this.positionQueue[1] ){
          console.log('c')
            this.positionQueue[2] = this.oldTetes[i][2]
            this.oldTetes.splice(i-1,1);
        } 


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
    var oldTeteCourant = []
    oldTeteCourant[0] = this.positionTete[0]
    oldTeteCourant[1] = this.positionTete[1]
    oldTeteCourant[2] = this.positionTete[2]
    this.oldTetes.push(oldTeteCourant)
    console.log('old tetes deplacer'+this.oldTetes)

    this.iconeTete.src = "images/headsnake" + this.positionTete[2] + ".png";

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

  }

  detecter_mur(mapHeight, mapWidth){

    if(this.positionTete[1]<=37 || this.positionTete[1]>=(mapHeight-74) || this.positionTete[0]<=37 ||this.positionTete[0]>=(mapWidth-74)){

      this.mourir();
      return 1;
    }

    return 0;

  }

  mourir(){

    if(this.vitesse!=0){

      var audio = new Audio('sounds/aie.mp3');
      audio.play();
    	this.vitesse = 0;

    }

  } 

 



}





