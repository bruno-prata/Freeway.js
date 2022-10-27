function setup() {
  createCanvas(500, 400);
  sound.loop();
}

function draw() {
  background(road);
  showCow();
  movementCow();
  showCar();
  movementCar();
  returnCars();
  collision();
  createPoints();
  newPoint()
}

