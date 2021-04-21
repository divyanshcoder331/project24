const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    log1=createSprite(600,650,200,20);
	log1.shapeColor=("red");

	log1Body = Bodies.rectangle(600, 650, 200, 20,{isStatic:true});
 	World.add(world, log1Body);

	log2=createSprite(500,610,20,100);
	log2.shapeColor=("red");

	log2Body= Bodies.rectangle(500,610,20 , 100 , {isStatic:true} );
 	World.add(world, log2Body);

	log3=createSprite(700,610,20,100);
	log3.shapeColor=("red");

	log3Body = Bodies.rectangle(700, 610, 20, 100 , {isStatic:true} );
 	World.add(world, log3Body);

	ground=new Ground(width/2,700,900,80);
	paper=new Paper(50,650,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position ,{x:10,y:-180});
	}
}


