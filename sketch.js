
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}
	var block1_options={
		restitution:0.4,
		friction:0.07,
		frictionAir:0.01
	}
	var block2_options={
		restitution:0.05,
		friction:0.7,
		frictionAir:0.03
	}
	var block3_options={
		restitution:0.5,
		friction:0.01,
		frictionAir:1
	}
	block1 = Bodies.circle(220,10,20,block1_options);
	World.add(world,block1);
	block2 = Bodies.rectangle(110,50,10,20,block2_options);
	World.add(world,block2);
	block3 = Bodies.rectangle(350,50,10,20,block3_options);
	World.add(world,block3);
	


	Engine.run(engine);
	ellipseMode(RADIUS);
	rectMode(CENTER);
	
}


function draw() {
  
  background('black');
  ellipse(block1.position.x, block1.position.y,20);
  rect(block2.position.x, block2.position.y,20);
  rect(block3.position.x, block3.position.y,20);
  Engine.update(engine);
  drawSprites();
 
}



