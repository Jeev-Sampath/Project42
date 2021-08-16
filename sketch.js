var bgImg, rocketImg1,rocketImg2,rocketImg3,rocketImg4, rocket,iss, issImg;
var hasDocked = false;

function preload(){
bgImg = loadImage("spacebg.jpg");
rocketImg1 = loadImage("spacecraft1.png");
rocketImg2 = loadImage("spacecraft2.png");
rocketImg3 = loadImage("spacecraft3.png");
rocketImg4 = loadImage("spacecraft4.png");
issImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  rocket = createSprite(400, 300, 50, 50);
  rocket.addImage(rocketImg1);
  rocket.scale = 0.2;
 
  iss = createSprite(500,150,50,50);
  iss.addImage(issImg);
  iss.scale = 0.8;
}

function draw() {
  background(bgImg); 
  
  

  if(rocket.x > 440   && rocket.y === 225){
    hasDocked = true;
    textSize(25);
    fill("white");
    textAlign(CENTER);
    text("Docking Successful!",200,300)
  }

if(hasDocked === false){
  if(keyDown(UP_ARROW)){
    rocket.addImage(rocketImg2);
    rocket.y = rocket.y-5;
  }else 
  if(keyDown(RIGHT_ARROW)){
    rocket.addImage(rocketImg3);
    rocket.x=rocket.x+5;
  }else
  if(keyDown(LEFT_ARROW)){
    rocket.addImage(rocketImg4);
    rocket.x=rocket.x-5;
  }else
  if(keyDown(DOWN_ARROW)){
    rocket.addImage(rocketImg1);
    rocket.y=rocket.y+5;
  }else{
    rocket.addImage(rocketImg1);
  }

  rocket.x = rocket.x + random(-1,1);
}

  console.log(rocket.position);
  drawSprites();
}