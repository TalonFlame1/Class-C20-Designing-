var rectangle, FixedRectangle 


function setup() {
  createCanvas(800,400);
rectangle=createSprite (500,250,100,90)
rectangle.shapeColor = "red"
FixedRectangle=createSprite(300,100,30,100)
FixedRectangle.shapeColor = 'red'
}


function draw() {
  background(255,255,255);  
  rectangle.x = mouseX
  rectangle.y = mouseY
  if (rectangle.x-FixedRectangle.x<rectangle.width/2+ FixedRectangle.width/2
     && FixedRectangle.x - rectangle.x < rectangle.width/2+ FixedRectangle.width/2
     && rectangle.y - FixedRectangle.y < rectangle.height/2+ FixedRectangle.height/2
     && FixedRectangle.y - rectangle.y < rectangle.height/2+ FixedRectangle.height/2){
 rectangle.shapeColor = "green"
 FixedRectangle.shapeColor = "green"
  }
  else{
    FixedRectangle.shapeColor = "red"
    rectangle.shapeColor = "red"
    }
  drawSprites();
}