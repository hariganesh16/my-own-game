const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var animatedRocketIMG,aspaceIMG,downloadIMG,alienIMG
var score=0;

function preload(){
animatedRocketIMG=loadImage("animatedRocket.jpg");
aspaceIMG=loadImage("aspace.jpg");
downloadIMG=loadImage("download.jpg");
alienIMG=loadImage("alien.jpg");
}
function setup() {
	createCanvas(1366, 653);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ufo = new Ufo (1100,200,50,50);

	enemy1=new Enemy(450,-600,60,60);
	enemy2=new Enemy(350,-100,60,60);
	enemy3=new Enemy(550,-700,60,60);
	enemy4=new Enemy(750,-10,60,60);
	enemy5=new Enemy(150,-1900,60,60);
	enemy6=new Enemy(850,-1000,60,60);
	enemy7=new Enemy(950,-800,60,60);
	enemy8=new Enemy(1050,-400,60,60);
	enemy9=new Enemy(1150,-600,60,60);
	enemy10=new Enemy(1300,-900,60,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(downloadIMG);

  ufo.display();
 enemy2.display();
 enemy3.display();
 enemy4.display();
 enemy5.display();
 enemy6.display();
 enemy7.display();
 enemy8.display();
 enemy9.display();
 enemy10.display();

 text("Score: " + score, 200, 200);

}

function keyPressed(){
	
	 if(keyCode===UP_ARROW){
	translation={x:0,y:-20}
	Matter.Body.translate(ufo.body,translation);
	}
	else if(keyCode===DOWN_ARROW){
	translation={x:0,y:20}
	Matter.Body.translate(ufo.body,translation);
	}
	
}

 function collide(){

	if (ufo.isTouching.enemy1){
		score=score+10;
	}
	if (ufo.isTouching.enemy2){
		score=score+10;
	}
	if (ufo.isTouching.enemy3){
		score=score+10;
	}
 }
 function touches(){}
