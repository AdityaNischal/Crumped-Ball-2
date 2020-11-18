
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin1,dustbin2,dustbin3
function preload()
{
	
}

function setup() {
	createCanvas(1550, 500);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	ground = new Ground(800,450,1600,10);

	paper = new Paper(200,200,25);

	dustbin = new Dustbin(1050,398,100,100);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

 ground.display();

 paper.display();

 dustbin.display();

 

 
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:225,y:225});
	}
}




