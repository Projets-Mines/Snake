class View {


  constructor(canvas,context,backgroundPath) {

  	this.canvas = canvas;
  	this.context = context;
  	this.backgroundPath = backgroundPath;

  }

  disp_background(){

  	this.canvas.style.background="url('" + this.backgroundPath + "')";
  }

  disp_walls(imgWall,x,y){

    this.context.drawImage(imgWall, x,y);

  }

  disp_serpent(iconeTete,iconeCorps,positionTete,positionQueue,positionsCorps){


    var context = this.context;
    context.clearRect(0, 0, 700, 700);

  	iconeTete.addEventListener('load', (e) => {
  		context.drawImage(iconeTete, positionTete[0],positionTete[1]);
  	});

	iconeCorps.addEventListener('load', (e) => {
  	  	context.drawImage(iconeCorps,positionQueue[0],positionQueue[1]);
  	});

  }




}