class View {

  constructor(canvas,context,backgroundPath){
  	this.canvas = canvas;
  	this.context = context;
  	this.backgroundPath = backgroundPath;

    this.walls = false;
    this.serpent = false;
    this.fruit = false;

    this.positionsWall = [];

  }

  disp_background(){

  	this.canvas.style.background="url('" + this.backgroundPath + "')";
  }

  disp_walls(imgWall,x,y){

    this.walls = true;

    this.imgWall = imgWall;
    this.positionsWall.push([x,y]);

    this.disp_all();
  }

  disp_serpent(iconeTete,iconeCorps,positionTete,positionQueue,positionsCorps){

    this.serpent = true;

    this.iconeTete = iconeTete;
    this.iconeCorps = iconeCorps;
    this.positionTete = positionTete;
    this.positionQueue = positionQueue;
    this.positionsCorps = []
    this.positionCorpCourant = []

    for (var i = 0; i < positionsCorps.length ; i++) {

      this.positionCorpCourant[0] = positionsCorps[i][0]
      this.positionCorpCourant[1] = positionsCorps[i][1]
      this.positionCorpCourant[2] = positionsCorps[i][2]
      this.positionsCorps.push(this.positionCorpCourant)

     
    }

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


  disp_all(){
 
    var context = this.context;
    context.clearRect(0, 0, 700, 700);
    
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
            context.drawImage(this.iconeCorps,this.positionsCorps[i][0],this.positionsCorps[i][1]);
      }

    }

  }

}