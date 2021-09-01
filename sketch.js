

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engin, world, ball, leftSide, rightSide, groundObj
var radius = 30
var ball
function preload()
{
	image = loadImage('crumpled ball.png')
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(260,650,45)
  groundObj=new ground(width/2,670,width,20);
   leftSide = new ground(1100,600,20,120); 
   rightSide = new ground(1350,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   
   ball.display()
    groundObj.display(); 
	leftSide.display(); 
	rightSide.display(); 
} 
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50}); } }
 




