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
    

    }else if(keyIsDown(32) && gameState == "play"  && jumpCounter <  maxJump && player.velocityY > -18.6 && ability2 == 0){
        player.velocityY = -20
        jumpCounter = jumpCounter + 1; 
        jumpStop = 1;

    }else if(keyIsDown(LEFT_ARROW) && gameState == "play"){
        if(keyIsDown(16)){
            player.x = player.x-26
        } else{
            player.x = player.x-16
            player.mirrorX(-1)
            player.changeAnimation("Run")
            player.setCollider("rectangle", 100,0, 200, 450)
            jumpStop = 0;
        }
    } else if(keyIsDown(RIGHT_ARROW) && gameState == "play"){
        if(keyIsDown(16)){
            player.x = player.x+26
        } else{
            player.x = player.x+16
            player.mirrorX(1)
            player.setCollider("rectangle", -180,0, 200, 450)
            player.changeAnimation("Run")
            jumpStop = 0;
        }
    } else{
        player.changeAnimation("Idle")
        jumpStop = 0;
    }

      if(gameState == "play"  && !jumpCounter == 0){
        player.changeAnimation("Jump")
    }

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

    player.velocityY += 1.3

    if(player.isTouching(ground1) && jumpStop == 0){
        jumpCounter = 0
    }

    if(player.isTouching(stageEnd1) && placeHolder2 == 0){
        stage = 2
        stageNeed = 2
    }

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
        abilityItem1.addAnimation("Rotating", abilityItem1Animation);
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
        platform3inv = createSprite(70,250.25,120,35)
        platform3.addImage(platformImg)
        platform3.scale = 2

        stageEnd2 = createSprite((displayWidth-displayWidth),displayHeight-900)

        if(stage == 2 && stageNeed == 2 && player.x == 300 && player.y == 400 ){
            stageNeed = 1
        } 
    }
    
    if(stage == 2){
        if(player.isTouching(abilityItem1)){
            ability1 = 1
            abilityItem1.destroy()
        }

        if (ability1 == 1) {
            maxJump = 2.1
        }
        
        
        if(player.isTouching(platform1inv) || player.isTouching(platform2inv) || player.isTouching(platform3inv)){
            jumpCounter = 0
        } 

        if(player.isTouching(stageEnd2)){
            stage = 3
            stageNeed = 3
        }
    }
    
    
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
        abilityItem2.addAnimation("Rotating", abilityItem2Animation);
        abilityItem2.changeAnimation("Rotating")
        maxJump = 1


        if(stage == 3 && stageNeed == 3 && player.x == (displayWidth)/2 && player.y == (displayHeight)/2 ){
            stageNeed = 1
        } 
    }

    if(stage == 3){

        if(player.isTouching(abilityItem2)){
            ability2 = 1;
            abilityItem2.destroy()
            player.scale = 0.6
        }
        
        if(keyIsDown(32) && jumpCounter <  maxJump && ability2 == 1){
            player.velocityY = -30
            jumpCounter = jumpCounter + 1; 
            jumpStop = 1;
        }
        if(player.isTouching(stagePlatform1inv)||player.isTouching(stagePlatform2inv)){
            jumpCounter = 0
        }

        
         
    }






















































}


