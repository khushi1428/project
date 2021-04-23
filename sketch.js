var bullet,wall,car;
var thickness, speed,weight;
function setup() {
  createCanvas(800,1600);
  speed=random(223,321);
  weight=random(30,52)
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(1200,200,thickness,height/2);
 car.velocityX=speed;
 thickness=random(23,83)
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(wall.width+car.width)/2)
  {
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22500
    if(deformation>180)
    {
      car.shapeColor(255,0,0);
    }
if(deformation<180&&deformation>100)
{
  car.shapeColor(230,230,0);
}
if(deformation<100)
{
  car.shapeColor(0,255,0)
}
  }


  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge);
{
return true;
}
return false;
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
if(damage>10)
{
  wall.shapeColor=color(255,0,0)
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}