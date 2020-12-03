var bananaImage, obstacleImage, obstacleGroup, score, foodGroup, player,backImage,background2;

function preload() {
  backImage = loadImage("jungle.jpg");
   
  player.addAnimation("Monkey_01.png", "Monkey_02.png",           "Monkey_03.png", "Monkey_04.png", "Monkey_05.png",         "Monkey_06.png", "Monkey_07.png", "Monkey_08.png",         "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  
}

function setup() {
  createCanvas(400, 400);
  background2 = createSprite(0,0);
  background2.addImage(backImage);
  background2.velocityX = - 5;
  //ground.visiblity = false;
  //player.addAnimation(player_running);
  //foodGroup.createGroup();
}

function draw() {
  background(220);
  setup();  
  //if (foodGroup.isTouching(player) ) {
      
//      }
}