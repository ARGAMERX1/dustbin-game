
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
 



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin = new Dustbin(200,200,30,30);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.display();
 
}



