var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 100, 30, 80);
  movingRect.shapeColor = "green"
  fixedRect = createSprite(400, 400, 80, 30);
  fixedRect.shapeColor = "green"
  movingRect.velocityY = 5
  fixedRect.velocityY = -5
}

function draw() {
  background(0,0,0);

  bounceOff(movingRect, fixedRect);
  drawSprites();
}