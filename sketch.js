//Create variables here
var dog, happydog;
var dogImg, happyImg;
var foodS, foodStock;
var database;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500 ,500);
  
  database = firebase.database();
 
  dog = createSprite(250,250);
  dog.scale = 0.3;
  dog.addImage(dogImg);
 

  
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);




 if(keyWentDown(UP_ARROW)){
 writeStock(foodS);
  dog.addImage(happyImg);

}
  drawSprites();

  //add styles here
   textSize(15);
   fill (255);
   stroke (2);
   text("Note:  Press UP_ARROW Key To Feed The Dog", 30,30);

}

function writeStock(x){
 

  if(x <= 0){
    x=0;
  }

  else{
    x=x -1;
  }

  database.ref("/").update({
    food:x
  })
}


function readStock(data){
  foodS = data.val();

}

