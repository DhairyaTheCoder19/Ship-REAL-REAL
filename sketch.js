
function preload(){
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  if (sea.x < 0){
    sea.x = sea.width/2

  }




}

function setup(){
  createCanvas(400,400);
  ship = createSprite(130,200,30,30); 
  ship.addAnimation("movingShip",shipImg1); 
  ship.scale =0.25;


  
}

function draw() {
  background("blue")
  drawSprites()

 
}