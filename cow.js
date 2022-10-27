//cow variables
let yCow = 370;
let xCow = 85;
let roadKill = false;

//points
let points = 0;

function showCow(){
  image(cow, xCow, yCow, 26, 26)
}

function movementCow(){
  if (keyIsDown(UP_ARROW)){
    yCow -=2;
  }
  if (keyIsDown(DOWN_ARROW)){
      if(movementYControl()){
            yCow +=2;
      }
  }
    if (keyIsDown(LEFT_ARROW)){
    xCow -=2;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xCow +=2;
  }
}

function collision(){
  for (let i = 0; i < cars.length; i++){
    roadKill = collideRectCircle (xCars[i], yCars[i], 60, 40, xCow, yCow, 22)
      if (roadKill){
        yCow = 370;
        if (points > 0){
          points--;
          soundCollision.play();
      }
    }
  }
}

function createPoints(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 240, 60))
  text(points, width/5, 25)
}

function newPoint(){
  if (yCow < 15){
    points += 1;
    soundPoint.play();
    yCow = 370;
  }
}

function movementYControl(){
  return yCow < 370;
}