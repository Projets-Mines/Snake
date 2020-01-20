class View {


  constructor(carte,backgroundFile) {

  	this.carte = carte;
  	this.backgroundFile = backgroundFile;
  	
  	
  }

  disp_background(){

  	this.carte.canvas.style.background="url('" + this.backgroundFile + "')";
  }

  disp_walls(){

  	var img = new Image();
  	img.src = "images/wall.png";

  	var carte = this.carte;

  	img.addEventListener('load', (e) => {

  			let i =0;

  			while(i<carte.canvas.width){

  				carte.context.drawImage(img, i,0);
  				i+=37;
  			}

  			i =0;

  			while(i<carte.canvas.height){

  				carte.context.drawImage(img, 0,i);
  				i+=37;
  			}

  			i =0;

  			while(i<carte.canvas.height){

  				carte.context.drawImage(img, carte.canvas.height-37 ,i);
  				i+=37;
  			}

  			i =0;

  			while(i<carte.canvas.width){

  				carte.context.drawImage(img, i ,carte.canvas.height-37);
  				i+=37;
  			}

  	 });


  }




}