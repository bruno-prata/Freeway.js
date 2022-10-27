//global images
let road;
let cow;
let car;
let car2;
let car3;

//sounds
let sound;
let soundCollision;
let soundPoint;

function preload(){
  road = loadImage("img/road.png");
  cow = loadImage("img/cow.png");
  car = loadImage("img/car-1.png");
  car2 = loadImage("img/car-2.png");
  car3 = loadImage("img/car-3.png");
  car4 = loadImage("img/car-2.png");
  car5 = loadImage("img/car-3.png");
  car6 = loadImage("img/car-1.png");
  cars = [car, car2, car3, car4, car5, car6]
  sound = loadSound("sounds/back.mp3");
  soundCollision = loadSound("sounds/collision.mp3")
  soundPoint= loadSound("sounds/points.wav");
}