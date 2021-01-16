//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage,happyDogImage
var food = 2000000000000000

function preload(){
 dogImage = loadImage("images/dogimg.png")
 happyDogImage = loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(400,250,10,10)
  dog.addImage(dogImage);
  dog.scale = 0.2

  //foodStock = database.ref('food')
  //foodStock.on("value",readStock);
}


function draw() { 
  background(124,252,0);

  if (keyDown("up")) {
    food = food-1
  }
  drawSprites();
  text("food: "+ food,200,200)
  //add styles here

}



