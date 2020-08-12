var ground,object1,object2,object3,object4,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,500,1200,10);
	object1 = new Dustbin(800,385,200,200);
	object2 = new Ground(700,445,10,100);
	object3 = new Ground(900,445,10,100);
	object4 = new Ground(800,490,195,10);
	ball = new Paper(200,445);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  ground.display();
  object2.display();
  object3.display();
  object4.display();
  object1.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-100})
	}
}



