const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  

  ball = new Ball(200, 200, 80, 80);
  
}

function draw() {
  background(180);
  Engine.update(engine);
  

  ball.display();
  



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


