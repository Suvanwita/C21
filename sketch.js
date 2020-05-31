var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200, 100, 50, 80);
  gameObject2 = createSprite(600, 100, 50, 80);
  


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1.velocityY=2;
  gameObject2.velocityY=-2;
  gameObject1.velocityX=2;
  gameObject2.velocityX=-2;
}

function draw() {
  background(0,0,0);  

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(gameObject1,gameObject2);
  
  drawSprites();
}
