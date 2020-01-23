class ModelCarte {


  constructor(canvas) {

    this.canvas = canvas;
  	this.context = this.canvas.getContext("2d");
  	canvas.crossOrigin = "Anonymous";
  	this.positionFruit;

  }

  set_fruit(){

    var randomX = Math.floor(Math.random() * ((canvas.width-37) - 37 + 1)) + 37;
    var randomY = Math.floor(Math.random() * ((canvas.height-37) - 37 + 1)) + 37;

    this.positionFruit = [randomX,randomY];

  }

  remove_fruit(x,y){

    

  }

  fruit_here(x,y){


  }



}





