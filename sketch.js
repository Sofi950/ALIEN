var coco 
var piña

function setup() {
  createCanvas(400,400);
  coco= createSprite(200,200,30,30);
  piña = createSprite(300,300,30,30);
  piña.shapeColor = "orange"
}

function draw() 
{
  background("red");
drawSprites()
if (keyIsDown(LEFT_ARROW)){
//piña.velocityX= -4 
piña.position.x -= 4
}
}




