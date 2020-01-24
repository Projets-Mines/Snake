class View {

  constructor(canvas,context,backgroundPath){
  	this.canvas = canvas;
  	this.context = context;
  	this.backgroundPath = backgroundPath;

    this.walls = false;
    this.serpent = false;
    this.fruit = false;

    this.positionsWall = [];
    this.highScore;

  }

  disp_background(){

  	this.canvas.style.background="url('" + this.backgroundPath + "')";
  }


  disp_walls(imgWall,positionsWall){

    this.walls = true;

    this.imgWall = imgWall;
    this.positionsWall = positionsWall;

    this.disp_all();
  }

  disp_serpent(iconeTete,iconeCorps,positionTete,positionQueue,positionsCorps){

    this.serpent = true;

    this.iconeTete = iconeTete;
    this.iconeCorps = iconeCorps;
    this.positionTete = positionTete;
    this.positionQueue = positionQueue;
    this.positionsCorps = positionsCorps;	

    this.disp_all();

  }

  disp_fruit(iconeFruit,positionFruit){

    this.fruit = true;

    this.iconeFruit = iconeFruit;
    this.positionFruit = positionFruit;

    this.disp_all();

  }

  disp_score(score){

    var score_label = document.getElementById("score");
    score_label.innerHTML = score;

  }

  add_new_score(score){

    if(this.highScore<score){

      this.highScore = score;
      let grille_scores = document.getElementById("high_score");

    }

  }


  disp_all(){
 
    var context = this.context;
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    if(this.walls){
      for(var i=0; i<this.positionsWall.length; i++){

        context.drawImage(this.imgWall, this.positionsWall[i][0], this.positionsWall[i][1]);

      }
    }

    if(this.fruit){
    context.drawImage(this.iconeFruit,this.positionFruit[0],this.positionFruit[1]);
    }

    if(this.serpent){
      context.drawImage(this.iconeTete, this.positionTete[0],this.positionTete[1]);
      context.drawImage(this.iconeCorps,this.positionQueue[0],this.positionQueue[1]);

      for (var i = 0; i<this.positionsCorps.length; i++) {    
            context.drawImage(this.iconeCorps,this.positionCorps[i][0],this.positionCorps[i][0]);
      }

    }

  }

}