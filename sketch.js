var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,150,50);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(200, 400, 50, 150);
  movingRect.shapeColor = "purple";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background("lime");  

  movingRect.x =World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2  &&
     fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
     fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "yellow";

  }
  else{
    fixedRect.shapeColor = "skyblue";
    movingRect.shapeColor = "peachpuff";
  }
  drawSprites();
}