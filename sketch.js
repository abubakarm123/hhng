var bullet,wall;
var speed,weight;


function setup()  {
createCanvas(1600,400)
speed = random(223,321)
weight = random(30,52)
thickness = random(22,83)
bullet = createSprite(50,200,50,50)
bullet.velocityX = speed;
wall = createSprite(1500,200,60,height/2)
}

function draw()  {
background("black")
if(hascollided(bullet,wall)){




bullet.velocityX = 0
var damage = 0.5* weight * speed * speed/ thickness*thickness*thickness

if (damage > 10) {
wall.shapeColor = color(255,0,0)

}



if (damage<10){

  wall.shapeColor = color(0,255,0)
}


}

  drawSprites()
}

function hascollided(ob1,ob2){
bulletRightEdge = ob1.x + ob1.width
wallLeftEdge = ob2.x
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}


