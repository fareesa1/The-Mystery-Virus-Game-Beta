function movement(){

    //changing the animation to "dead"
    if(placeHolder2 == 1 && player.isTouching(ground1)){
        player.changeAnimation("dead", player_Dead_img)

    //switching stages to stage 2
    }else if(keyIsDown(UP_ARROW) && gameState == "play" && stage == 1){
        stage = 2
        stageNeed = 2

    //switching stages to stage 2
    }else if(keyIsDown(DOWN_ARROW) && gameState == "play" && stage == 2){
        stage = 3
        stageNeed = 3
    
    //allows the player to jump
    }else if(keyIsDown(32) && gameState == "play"  && jumpCounter <  maxJump && player.velocityY > -18.6 && ability2 == 0){
        player.velocityY = -20
        jumpCounter = jumpCounter + 1; 
        jumpStop = 1;

    //allows the player to walk left
    }else if(keyIsDown(65) && gameState == "play"){
        
        player.x = player.x-16
        player.mirrorX(-1)
        player.changeAnimation("Run")
        player.setCollider("rectangle", 100,0, 200, 450)
        jumpStop = 0;

    //allows the player to walk right
    } else if(keyIsDown(68) && gameState == "play"){
        
        player.x = player.x+16
        player.mirrorX(1)
        player.setCollider("rectangle", -180,0, 200, 450)
        player.changeAnimation("Run")
        jumpStop = 0;

    //changes the playes animation to "idle"
    } else{
        player.changeAnimation("Idle")
        jumpStop = 0;
    }

    //changes the players animation to "jump"
      if(gameState == "play"  && !jumpCounter == 0){
        player.changeAnimation("Jump")
    }

    //changes the gameState to "play"
    if(keyDown(ENTER)){
        gameState = "play"
        story.destroy()
        
        dino1.velocityX = -7
        dinoHead1.velocityX = -7
    
        dino2.velocityX = -7
        dinoHead2.velocityX = -7
    
        dino3.velocityX = -7
        dinoHead3.velocityX = -7
    
        dino4.velocityX = -7
        dinoHead4.velocityX = -7
      }  

    //adds gravity to the player
        player.velocityY += 1.3

    //allows the jump function to work
    if(player.isTouching(ground1) && jumpStop == 0){
        jumpCounter = 0
    }

    //switches stage "1" to stage "2"
    if(player.isTouching(stageEnd1) && placeHolder2 == 0){
        stage = 2
        stageNeed = 2
    }

    //stage "2" start
    if(stage == 2 && stageNeed == 2){
        player.x = 300
        player.y = 400
        stageEnd1.destroy()
        dino1.destroy()
        dinoHead1.destroy()
        dino2.destroy()
        dinoHead2.destroy()
        dino3.destroy()
        dinoHead3.destroy()
        dino4.destroy()
        dinoHead4.destroy()

        abilityItem1 = createSprite(displayWidth/2,650,30,30)
        abilityItem1.addAnimation("Rotating", abilityItem1Img);
        abilityItem1.changeAnimation("Rotating")   
        
        platform1 = createSprite(1468,500,50,20)
        platform1inv = createSprite(1468,480.25,70,20)
        platform1.addImage(platformImg)
        platform1.scale = 1

        platform2 = createSprite(800,400,50,20)
        platform2inv = createSprite(800,380.25,70,20)
        platform2.addImage(platformImg)
        platform2.scale = 1

        platform3 = createSprite(70,300,50,20)
        platform3inv = createSprite(70,250.25,120,20)
        platform3.addImage(platformImg)
        platform3.scale = 2

        stageEnd2 = createSprite((displayWidth-displayWidth),displayHeight-900)

        if(stage == 2 && stageNeed == 2 && player.x == 300 && player.y == 400 ){
            stageNeed = 1
        } 
    }
    
    //stage "2" function
    if(stage == 2){

        //creates "double jump"
        if(player.isTouching(abilityItem1)){
            ability1 = 1
            abilityItem1.destroy()
        }

        //allows the player to have "double jump"
        if (ability1 == 1) {
            maxJump = 2.1
        }
        
        //allows the player to jump off of platforms
        if(player.isTouching(platform1inv) || player.isTouching(platform2inv) || player.isTouching(platform3inv)){
            jumpCounter = 0
        } 

        //switches stage "2" to stage "3"
        if(player.isTouching(stageEnd2)){
            stage = 3
            stageNeed = 3
        }
    }
    
    //stage "3" start
    if(stage == 3 && stageNeed == 3){
        player.x = (displayWidth)/2
        player.y = (displayHeight)/2
        stageEnd2.destroy()
        
        abilityItem1.destroy()

        platform1.destroy()
        platform2.destroy()
        platform3.destroy()

        platform1inv.destroy()
        platform2inv.destroy()
        platform3inv.destroy()

        
        stagePlatform1 = createSprite(400,500,50,20)
        stagePlatform1inv = createSprite(400,480.25,200,20)
        stagePlatform1.addImage(stagePlatformImg)
        stagePlatform1.scale = 0.6

        stagePlatform2 = createSprite(1200,500,50,20)
        stagePlatform2inv = createSprite(1200,480.25,200,20)
        stagePlatform2.addImage(stagePlatformImg)
        stagePlatform2.scale = 0.6


        abilityItem2 = createSprite(displayWidth/2,650,30,30)
        abilityItem2.addAnimation("Rotating", abilityItem2Img);
        abilityItem2.changeAnimation("Rotating")
        maxJump = 1


        if(stage == 3 && stageNeed == 3 && player.x == (displayWidth)/2 && player.y == (displayHeight)/2 ){
            stageNeed = 1
        } 
        
        //dino minions
        // Moving Left
        dino3_1 = createSprite(displayWidth+100,700, 50, 50);
        dinoHead3_1 = createSprite(dino3_1.x, dino3_1.y-30, 40, 70);
        // dinoHead3_1.visible = false;
        dino3_1.scale = 6
        dino3_1.mirrorX(-1)
        dino3_1.addAnimation("move", dino1Img)
        dino3_1.debug = true
        dino3_1.setCollider("rectangle", 0,0, 10, 10)
        dino3_1.velocityX = -7
        //dinoHead3_1.velocityX = -7

        dino3_2 = createSprite(displayWidth+500,700, 50, 50);
        dinoHead5_2 = createSprite(dino3_2.x, dino3_2.y-30, 40, 70);
        //dinoHead5_2.visible = false;
        dino3_2.scale = 6
        dino3_2.mirrorX(-1)
        dino3_2.addAnimation("move", dino2Img)
        dino3_2.debug = true
        dino3_2.setCollider("rectangle", 0,0, 10, 10)
        dino3_2.velocityX = -7
        // dinoHead5_2.velocityX = -7

        dino3_3 = createSprite(displayWidth+900,700, 50, 50);
        dinoHead5_3 = createSprite(dino3_3.x, dino3_3.y-30, 40, 70);
        //dinoHead5_3.visible = false;
        dino3_3.scale = 6
        dino3_3.mirrorX(-1)
        dino3_3.addAnimation("move", dino3Img)
        dino3_3.debug = true
        dino3_3.setCollider("rectangle", 0,0, 10, 10)
        dino3_3.velocityX = -7
        // dinoHead5_3.velocityX = -7

        dino3_4 = createSprite(displayWidth+1300,700, 50, 50);
        dinoHead5_4 = createSprite(dino3_4.x, dino3_4.y-30, 40, 70);
        //dinoHead5_4.visible = false;
        dino3_4.scale = 6
        dino3_4.mirrorX(-1)
        dino3_4.addAnimation("move", dino4Img)
        dino3_4.debug = true
        dino3_4.setCollider("rectangle", 0,0, 10, 10)
        dino3_4.velocityX = -7
        // dinoHead5_4.velocityX = -7


        //Moving Right
        dino3_5 = createSprite(-100,700, 50, 50);
        dinoHead5 = createSprite(dino3_1.x, dino3_1.y-30, 40, 70);
        // dinoHead5_5.visible = false;
        dino3_5.scale = 6
        dino3_5.mirrorX(1)
        dino3_5.addAnimation("move", dino1Img)
        dino3_5.debug = true
        dino3_5.setCollider("rectangle", 0,0, 10, 10)
        dino3_5.velocityX = 7
        // dinoHead5_5.velocityX = 7

        dino3_6 = createSprite(-500,700, 50, 50);
        dinoHead5_6 = createSprite(dino3_2.x, dino3_2.y-30, 40, 70);
        //dinoHead5_6.visible = false;
        dino3_6.scale = 6
        dino3_6.mirrorX(1)
        dino3_6.addAnimation("move", dino2Img)
        dino3_6.debug = true
        dino3_6.setCollider("rectangle", 0,0, 10, 10)
        dino3_6.velocityX = 7
        // dinoHead5_6.velocityX = 7

        dino3_7 = createSprite(-900,700, 50, 50);
        dinoHead5_7 = createSprite(dino3_3.x, dino3_3.y-30, 40, 70);
        //dinoHead5_7.visible = false;
        dino3_7.scale = 6
        dino3_7.mirrorX(1)
        dino3_7.addAnimation("move", dino3Img)
        dino3_7.debug = true
        dino3_7.setCollider("rectangle", 0,0, 10, 10)
        dino3_7.velocityX = 7
        // dinoHead5_7.velocityX = 7

        dino3_8 = createSprite(-1300,700, 50, 50);
        dinoHead5_8 = createSprite(dino3_8.x, dino3_8.y-30, 40, 70);
        //dinoHead5_8.visible = false;
        dino3_8.scale = 6
        dino3_8.mirrorX(1)
        dino3_8.addAnimation("move", dino4Img)
        dino3_8.debug = true
        dino3_8.setCollider("rectangle", 0,0, 10, 10)
        dino3_8.velocityX = 7
        // dinoHead5_8.velocityX = 7

        dino3_9 = createSprite(-1700,700, 50, 50);
        dinoHead5_9 = createSprite(dino3_9.x, dino3_9.y-30, 40, 70);
        //dinoHead5_9.visible = false;
        dino3_9.scale = 6
        dino3_9.mirrorX(1)
        dino3_9.addAnimation("move", dino1Img)
        dino3_9.debug = true
        dino3_9.setCollider("rectangle", 0,0, 10, 10)
        dino3_9.velocityX = 7
        // dinoHead5_9.velocityX = 7
        
        dino3_10 = createSprite(-1100,700, 50, 50);
        dinoHead5_10 = createSprite(dino3_10.x, dino3_10.y-30, 40, 70);
        //dinoHead5_10.visible = false;
        dino3_10.scale = 6
        dino3_10.mirrorX(1)
        dino3_10.addAnimation("move", dino2Img)
        dino3_10.debug = true
        dino3_10.setCollider("rectangle", 0,0, 10, 10)
        dino3_10.velocityX = 7
        // dinoHead5_10.velocityX = 7

    }

    //stage "3" function
    if(stage == 3){

        //creates "bigger jump"
        if(player.isTouching(abilityItem2)){
            ability2 = 1;
            abilityItem2.destroy()
            player.scale = 0.6
        }
        
        //allows the player to have "bigger jump"
        if(keyIsDown(32) && jumpCounter <  maxJump && ability2 == 1){
            player.velocityY = -30
            jumpCounter = jumpCounter + 1; 
            jumpStop = 1;
        }
        
        if(player.isTouching(stagePlatform1inv)||player.isTouching(stagePlatform2inv)){
            jumpCounter = 0
        }

        // dinoHead5_1.x = dino3_1.x

        
         
    }






















































}


