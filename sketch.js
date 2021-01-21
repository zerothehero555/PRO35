//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage,happyDogImage
var foodS

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

  foodStock = database.ref('food')
  foodStock.on("value",readStock);
}
function readStock(data){
  foodS = data.val()
}

function draw() { 
  background(124,252,0);

  if (keyWentDown("up")) {
    writeStock(foodS)
    dog.addImage(happyDogImage)
  }
  drawSprites();
  text("food remaining: "+ foodS,200,200)
  //add styles here

}
function writeStock(x){
  if(x<=0){
    x = 0
  }
else{
  x = x-1 
}
database.ref('/').update({
  food:x
})
}



