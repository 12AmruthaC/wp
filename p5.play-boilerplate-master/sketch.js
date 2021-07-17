//namespace
//const --> constant
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var aengine,world,box1,Ground

function setup() {
  createCanvas(800,400);

  aengine = Engine.create()
  world = aengine.world
  
  //var x = { a : 3}
  //javascript object notation
  /*ground = Bodies.rectangle(400, 380, 800,20 , {isStatic : true});
  //ground.width = 800
  //ground.height = 20
  World.add( world , ground);*/

  box1 = new Box(200,180,50,50);
  Ground = new ground(400,380,800,20)
  
  /*box = Bodies.circle(100,50,40 , {restitution : 1})
  World.add(world,box);

shape = Bodies.rectangle(200,150,125,125, {restitution:1});
World.add(world,shape)*/
}

function draw() {
  background(0);  
  Engine.update(aengine)

//fill("LIGHTYELLOW");
  /*rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);*/
 
  box1.display()
 Ground.display()

  /*fill("LIGHTBLUE");
  ellipseMode(RADIUS);
  ellipse(box.position.x,box.position.y,40,40);
  
  fill("LIGHTGREEN");
  rectMode(CENTER);
  rect(shape.position.x,shape.position.y,125,125);*/
}