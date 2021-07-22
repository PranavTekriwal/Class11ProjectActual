
var player, playerAni;
var ledge, redge;
var lane, laneImg;

function preload(){
  //pre-load images

  playerAni = loadAnimation("Runner-1.png","Runner-2.png");
  laneImg = loadImage("path.png");

}

function setup(){
  createCanvas(300,503.5);
  //create sprites here

  lane = createSprite(150,0);
  lane.addImage("road", laneImg);
  lane.velocityY = 5;

  player = createSprite(150,377.5,20,20);
  player.addAnimation("run", playerAni);
  player.scale = 0.08;
    
  ledge = createSprite(-5,251.75,10,503.5);
  redge = createSprite(305,251.75,10,503.5);

}

function draw() {
  background(0);

  if (keyIsDown(RIGHT_ARROW)) {

    player.x = player.x + 5;

  }

  if (keyIsDown(LEFT_ARROW)) {

    player.x = player.x - 5;

  }

  player.collide(ledge);
  player.collide(redge);

  if(lane.y > 503.5) {

    lane.y = 0;

  }

  drawSprites();

}
