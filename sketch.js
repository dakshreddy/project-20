var car,wall;

var speed,weight;


function setup() {
  createCanvas(800,400);
 car = createSprite(50, 50, 40, 20);
 wall = createSprite(1500,200,60,height/2);
 

  speed = random(55,90);
  waight = random(400,1500);
}

function draw() {
  background(0,0,0); 
  car.velocityX = speed;
  drawSprites();
}

