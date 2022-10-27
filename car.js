//car variables
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 260, 318];
let carVelocity = [2, 2.5, 3.2, 5, 3, 2.3];

function showCar(){
  for (let i = 0; i < cars.length; i++){
    image(cars[i], xCars[i], yCars[i], 60, 40)
  }
}

function movementCar(){
  for (let i = 0; i < cars.length; i++){
    xCars[i] -= carVelocity[i];
  }
}  

function returnCars(){
  for (let i = 0; i < cars.length; i++){
    if (xCars[i] <=-50){
      xCars[i] = 600;
    }
  }
}
