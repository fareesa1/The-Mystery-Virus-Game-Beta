//character varaibles
var player, dino1, dino2, dino3, dino4, boss;
//lvl 3 dinos
var dino3_1, dino3_2, dino3_3, dino3_4, dino3_5, dino3_6, dino3_7, dino3_8, dino3_9, dino3_10, dino3_11, dino3_12, dino3_13, dino3_14, dino3_15, dino3_16, dino3_17, dino3_18, dino3_19, dino3_20;
var dinoHead5_1, dinoHead5_2, dinoHead5_3, dinoHead5_4, dinoHead5_5, dinoHead5_6, dinoHead5_7, dinoHead5_8, dinoHead5_9, dinoHead5_10, dinoHead5_11, dinoHead5_12, dinoHead5_13, dinoHead5_14;
var dinoHead5_15, dinoHead5_16, dinoHead5_17, dinoHead5_18, dinoHead5_19, dinoHead5_20;

//character aniamations
var player_img, player_run_img, player_dead_img, player_jump_img, boss;

//hidden dino varaibles
var dino1Img, dino2Img, dino3Img, dino4Img;
var dinoHead1, dinoHead2, dinoHead3, dinoHead4

var bgImage, bgImage2, bgImage3;
var ground, story, ground1, stageEnd1, stageEnd2, boundryUp, boundryLeft, boundryRight;
var platform1,platform2,platform3,platform1inv,platform2inv,platform3inv;
var platformImg, platformImg2, stagePlatform, stagePlatform1, stagePlatform2, stagePlatforminv1, stagePlatform2inv, stagePlatformImg;
var gameState = "start";

var placeHolder2 = 0;
var stage = 1;
var stageNeed = 1;
var jumpCounter = 0;
var maxJump = 1;
var jumpStop = 0;

var ability1 = 0, ability2 = 0, ability3, ability4;
var abilityItem1, abilityItem2, abilityItem3, abilityItem4;
var abilityItem1Img, abilityItem2Img, abilityItem3Img, abilityItem4Img;

function preload(){
  bgImage = loadImage("backgrounds/Main-Menu.jpg");
  bgImage2 = loadImage("backgrounds/beach.PNG");
  bgImage3 = loadImage("backgrounds/boneBeach.PNG");
  platformImg = loadImage("backgrounds/platform.png")
  stagePlatformImg = loadImage("backgrounds/stagePlatform.png")
  
  player_img= loadAnimation("./flatboy/png/Idle1.png","./flatboy/png/Idle2.png","./flatboy/png/Idle3.png","./flatboy/png/Idle4.png",
    "./flatboy/png/Idle5.png","./flatboy/png/Idle6.png","./flatboy/png/Idle7.png","./flatboy/png/Idle8.png","./flatboy/png/Idle9.png",
    "./flatboy/png/Idle10.png","./flatboy/png/Idle11.png","./flatboy/png/Idle12.png","./flatboy/png/Idle13.png","./flatboy/png/Idle14.png",
    "./flatboy/png/Idle15.png")

   player_dead_img= loadAnimation("./flatboy/png/dead1.png","./flatboy/png/dead2.png","./flatboy/png/dead3.png","./flatboy/png/dead4.png",
    "./flatboy/png/dead5.png","./flatboy/png/dead6.png","./flatboy/png/dead7.png","./flatboy/png/dead8.png","./flatboy/png/dead9.png",
    "./flatboy/png/dead10.png","./flatboy/png/dead11.png","./flatboy/png/dead12.png","./flatboy/png/dead13.png","./flatboy/png/Idle14.png",
    "./flatboy/png/Idle15.png")

  player_run_img= loadAnimation("./flatboy/png/Run1.png","./flatboy/png/Run2.png","./flatboy/png/Run3.png","./flatboy/png/Run4.png",
    "./flatboy/png/Run5.png","./flatboy/png/Run6.png","./flatboy/png/Run7.png","./flatboy/png/Run8.png","./flatboy/png/Run9.png",
    "./flatboy/png/Run10.png","./flatboy/png/Run11.png","./flatboy/png/Run12.png","./flatboy/png/Run13.png","./flatboy/png/Run14.png",
    "./flatboy/png/Run15.png")

  player_jump_img= loadAnimation("./flatboy/png/Jump1.png","./flatboy/png/Jump2.png","./flatboy/png/Jump3.png","./flatboy/png/Jump4.png",
    "./flatboy/png/Jump5.png","./flatboy/png/Jump6.png","./flatboy/png/Jump7.png","./flatboy/png/Jump8.png","./flatboy/png/Jump9.png",
    "./flatboy/png/Jump10.png","./flatboy/png/Jump11.png","./flatboy/png/Jump12.png","./flatboy/png/Jump13.png","./flatboy/png/Jump14.png",
    "./flatboy/png/Jump15.png")

  dino1Img = loadAnimation("./Mini-Dinos/DinoSprites_doux-0/0.png","./Mini-Dinos/DinoSprites_doux-0/1.png","./Mini-Dinos/DinoSprites_doux-0/2.png",
    "./Mini-Dinos/DinoSprites_doux-0/3.png","./Mini-Dinos/DinoSprites_doux-0/4.png","./Mini-Dinos/DinoSprites_doux-0/5.png","./Mini-Dinos/DinoSprites_doux-0/6.png",
    "./Mini-Dinos/DinoSprites_doux-0/7.png","./Mini-Dinos/DinoSprites_doux-0/8.png","./Mini-Dinos/DinoSprites_doux-0/9.png",
    "./Mini-Dinos/DinoSprites_doux-0/10.png","./Mini-Dinos/DinoSprites_doux-0/11.png","./Mini-Dinos/DinoSprites_doux-0/12.png","./Mini-Dinos/DinoSprites_doux-0/13.png",
    "./Mini-Dinos/DinoSprites_doux-0/14.png")  

  dino2Img = loadAnimation("./Mini-Dinos/DinoSprites_mort-0/0.png","./Mini-Dinos/DinoSprites_mort-0/1.png","./Mini-Dinos/DinoSprites_mort-0/2.png",
    "./Mini-Dinos/DinoSprites_mort-0/3.png","./Mini-Dinos/DinoSprites_mort-0/4.png","./Mini-Dinos/DinoSprites_mort-0/5.png","./Mini-Dinos/DinoSprites_mort-0/6.png",
    "./Mini-Dinos/DinoSprites_mort-0/7.png","./Mini-Dinos/DinoSprites_mort-0/8.png","./Mini-Dinos/DinoSprites_mort-0/9.png",
    "./Mini-Dinos/DinoSprites_mort-0/10.png","./Mini-Dinos/DinoSprites_mort-0/11.png","./Mini-Dinos/DinoSprites_mort-0/12.png","./Mini-Dinos/DinoSprites_mort-0/13.png",
    "./Mini-Dinos/DinoSprites_mort-0/14.png") 

  dino3Img = loadAnimation("./Mini-Dinos/DinoSprites_tard-0/0.png","./Mini-Dinos/DinoSprites_tard-0/1.png","./Mini-Dinos/DinoSprites_tard-0/2.png",
    "./Mini-Dinos/DinoSprites_tard-0/3.png","./Mini-Dinos/DinoSprites_tard-0/4.png","./Mini-Dinos/DinoSprites_tard-0/5.png","./Mini-Dinos/DinoSprites_tard-0/6.png",
    "./Mini-Dinos/DinoSprites_tard-0/7.png","./Mini-Dinos/DinoSprites_tard-0/8.png","./Mini-Dinos/DinoSprites_tard-0/9.png",
    "./Mini-Dinos/DinoSprites_tard-0/10.png","./Mini-Dinos/DinoSprites_tard-0/11.png","./Mini-Dinos/DinoSprites_tard-0/12.png","./Mini-Dinos/DinoSprites_tard-0/13.png",
    "./Mini-Dinos/DinoSprites_tard-0/14.png") 

  dino4Img = loadAnimation("./Mini-Dinos/DinoSprites_vita-0/0.png","./Mini-Dinos/DinoSprites_vita-0/1.png","./Mini-Dinos/DinoSprites_vita-0/2.png",
    "./Mini-Dinos/DinoSprites_vita-0/3.png","./Mini-Dinos/DinoSprites_vita-0/4.png","./Mini-Dinos/DinoSprites_vita-0/5.png","./Mini-Dinos/DinoSprites_vita-0/6.png",
    "./Mini-Dinos/DinoSprites_vita-0/7.png","./Mini-Dinos/DinoSprites_vita-0/8.png","./Mini-Dinos/DinoSprites_vita-0/9.png",
    "./Mini-Dinos/DinoSprites_vita-0/10.png","./Mini-Dinos/DinoSprites_vita-0/11.png","./Mini-Dinos/DinoSprites_vita-0/12.png","./Mini-Dinos/DinoSprites_vita-0/13.png",
    "./Mini-Dinos/DinoSprites_vita-0/14.png")   

  abilityItem1Img = loadAnimation("./Coins/Blue/blueCoin1.png","./Coins/Blue/blueCoin2.png","./Coins/Blue/blueCoin3.png",
    "./Coins/Blue/blueCoin4.png","./Coins/Blue/blueCoin5.png","./Coins/Blue/blueCoin6.png")

  abilityItem2Img = loadAnimation("./Coins/Bronze/bronzeCoin1.png","./Coins/Bronze/bronzeCoin2.png","./Coins/Bronze/bronzeCoin3.png",
    "./Coins/Bronze/bronzeCoin4.png","./Coins/Bronze/bronzeCoin5.png","./Coins/Bronze/bronzeCoin6.png")

  abilityItem3Img = loadAnimation("./Coins/Gold/goldCoin1.png","./Coins/Gold/goldCoin2.png","./Coins/Gold/goldCoin3.png",
    "./Coins/Gold/goldCoin4.png","./Coins/Gold/goldCoin5.png","./Coins/Gold/goldCoin6.png")

  abilityItem4Img= loadAnimation("./Coins/Silver/silverCoin1.png","./Coins/Silver/silverCoin2.png","./Coins/Silver/silverCoin3.png",
    "./Coins/Silver/silverCoin4.png","./Coins/Silver/silverCoin5.png","./Coins/Silver/silverCoin6.png")

}

function setup() {
  createCanvas(displayWidth-70,displayHeight-180);
  background("lightblue")

  
  //dino minions
  dino1 = createSprite(displayWidth+100,700, 50, 50);
  dinoHead1 = createSprite(dino1.x, dino1.y-30, 40, 70);
  // dinoHead1.visible = false;
  dino1.scale = 6
  dino1.mirrorX(-1)
  dino1.addAnimation("move", dino1Img)
  dino1.debug = true
  dino1.setCollider("rectangle", 0,0, 10, 10)

  dino2 = createSprite(displayWidth+500,700, 50, 50);
  dinoHead2 = createSprite(dino2.x, dino2.y-30, 40, 70);
  //dinoHead2.visible = false;
  dino2.scale = 6
  dino2.mirrorX(-1)
  dino2.addAnimation("move", dino2Img)
  dino2.debug = true
  dino2.setCollider("rectangle", 0,0, 10, 10)

  dino3 = createSprite(displayWidth+900,700, 50, 50);
  dinoHead3 = createSprite(dino3.x, dino3.y-30, 40, 70);
  //dinoHead3.visible = false;
  dino3.scale = 6
  dino3.mirrorX(-1)
  dino3.addAnimation("move", dino3Img)
  dino3.debug = true
  dino3.setCollider("rectangle", 0,0, 10, 10)

  dino4 = createSprite(displayWidth+1300,700, 50, 50);
  dinoHead4 = createSprite(dino4.x, dino4.y-30, 40, 70);
  //dinoHead4.visible = false;
  dino4.scale = 6
  dino4.mirrorX(-1)
  dino4.addAnimation("move", dino4Img)
  dino4.debug = true
  dino4.setCollider("rectangle", 0,0, 10, 10)
  
  //technicall sprites
  ground = createSprite((displayWidth-70)/2,displayHeight-320, displayWidth*2, 30)
  ground1 = createSprite((displayWidth-70)/2,displayHeight-320.00000000000009, displayWidth, 30)
  stageEnd1 = createSprite(displayWidth-100,displayHeight-450)

  boundryLeft = createSprite((displayWidth-displayWidth)-250,displayHeight/2,500,displayHeight)
  boundryRight = createSprite(displayWidth+250,displayHeight/2,500,displayHeight)
  boundryUp = createSprite(displayWidth/2,-400,displayWidth,500)

  
  story = createSprite((displayWidth-70)/2,(displayHeight-180)/2, 600, 600)
  story.shapeColor = "black"
  //ground.visible = true
  //ground1.visible = true
  //stageEnd1.visible = true


  //player 
  player = createSprite(300, 400, 50, 50);
  player.addAnimation("Idle", player_img);
  player.addAnimation("Run", player_run_img);
  player.addAnimation("Jump", player_jump_img);
  player.addAnimation("dead",  player_dead_img);
  player.debug = true;
  player.setCollider("rectangle", -180, 0, 200, 450)
  player.scale = 0.45


}

function draw() {
  background("lightblue")
  if(stage == 1){
    image(bgImage,0,0,displayWidth-70,displayHeight-180)
  } else if(stage == 2){
    image(bgImage2,0,0,displayWidth-70,displayHeight-180)
  } else if (stage == 3){
    image(bgImage3,0,0,displayWidth-70,displayHeight-180)
  }
  

  //functions
  drawSprites();
  playerAttack();
  dinoAttack();
  collide();
  movement();
  
  //the console
  console.log(player.velocityY)
  
  

}


function virus(){

}

function Boss(){

}

function collide(){
  player.collide(ground)
  player.collide(boundryLeft)
  player.collide(boundryRight)
  player.collide(boundryUp)

  if(stage == 2){
    player.collide(platform1)
    player.collide(platform2)
    player.collide(platform3)
  }
  if(stage == 3){
    player.collide(stagePlatform1)
    player.collide(stagePlatform2)
  }
}