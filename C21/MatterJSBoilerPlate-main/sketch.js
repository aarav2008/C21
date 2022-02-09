
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;


var ball;
var leftside, rightside, middle;
var groundObj;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.1,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER)
	ellipseMode(RADIUS)

	groundObj=new Ground(width/2670,width,20)
	leftside=new Ground(1100,640,20,120)
	rightside=new Ground(1400,640,20,120)
	middle=new Ground(700,700,1700,20)

  
}


function draw() {
  background(0);
	bounce()
  groundObj.display()
  leftside.display()
  rightside.display()
  middle.display()
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();


}
function bounce(){
if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5});
}
  if (keyCode=== DOWN_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:5});
}
if (keyCode=== LEFT_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-5,y:0});
}
if (keyCode=== RIGHT_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:0});
}
	
}




