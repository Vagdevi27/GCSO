var car, wall;
var speed, weight;
var deformation = 0;

function setup() {
  createCanvas(1600,400);
  car =  createSprite(50, 200, 50, 50);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "brown";

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  car.velocityX = speed;
}

function draw() {
  background("lightblue");  
  drawSprites();
  
  collision();

}

function collision(){
  
  if(wall.x - car.x < car.width/2 + wall.width/2){

      car.velocityX = 0;
      deformation = (0.5*weight*speed*speed )/22500;
      if(deformation < 100){
        car.shapeColor = "green";
      }
      else if(deformation < 180 && deformation > 100)
      {
        car.shapeColor = "yellow";
      }
      else if(deformation > 180){
        car.shapeColor = "red";
      }
     }

}