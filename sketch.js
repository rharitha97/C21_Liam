const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

/*Liam = student of XYZ School
Harith = teacher of XYZ School
*/

var engine, world, object, ground;

function setup() {
  var canvas = createCanvas(1200,800);
//our engine is being created in the library
  engine = Engine.create();
// create our world
  world = engine.world;

  var option = {
    restitution: 1,
    friction: 0.5
  }
  object = Bodies.rectangle(200,100,50,50, option)
  World.add(world, object);

  var ground_option = {
    isStatic: true
  }
  ground = Bodies.rectangle(600,500,1200,50, ground_option);
  World.add(world, ground)

  console.log(object);
}

function draw() {
  background(0);
  //updating the engine in to the physics engine
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50,50);
  rect(ground.position.x, ground.position.y, 1200,50);
  
}