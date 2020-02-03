class ModelCarte {


  constructor(canvas, iconeFruit, iconeMur) {

    this.canvas = canvas;
  	this.context = this.canvas.getContext("2d");
  	//canvas.crossOrigin = "Anonymous";

    this.iconeFruit = new Image();
    this.iconeMur = new Image();

    this.iconeFruit.src = iconeFruit;
    this.iconeMur.src = iconeMur;

  	this.positionFruit;
    this.positionsWalls= [];

  }

  set_fruit(){

    var randomX = Math.floor(Math.random() * ((canvas.width-74) - 37 + 1)) + 37;
    var randomY = Math.floor(Math.random() * ((canvas.height-74) - 37 + 1)) + 37;

    this.positionFruit = [randomX,randomY];

    return this.positionFruit;

  }

  set_walls(){

    var canvasHeight = this.canvas.height;
    var canvasWidth = this.canvas.width;

    let i =0;

    while(i<canvas.width){

      this.positionsWalls.push([i,0]);
      i+=37;
    }

    i =0;

    while(i<canvasWidth){

     this.positionsWalls.push([0,i]);
     i+=37;

    }

    i =0;

    while(i<canvasHeight){

     this.positionsWalls.push([canvasWidth-37,i]);
     i+=37;
    
    }

    i =0;

    while(i<canvasWidth){

      this.positionsWalls.push([i,canvasHeight-37]);
      i+=37;

    }

    return 0;
  }


}





