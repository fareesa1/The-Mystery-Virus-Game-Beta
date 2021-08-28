function movement(){

    if(placeHolder2 == 1 && player.isTouching(ground1)){
        player.changeAnimation("dead", player_Dead_img)

    }else if(keyIsDown(32) && gameState == "play"  && jumpCounter < maxJump){
        player.velocityY = -20
        jumpCounter = jumpCounter + 1; 

    }else if(keyIsDown(LEFT_ARROW) && gameState == "play"){
        player.x = player.x-16
        player.mirrorX(-1)
        player.changeAnimation("Run")
        player.setCollider("rectangle", 100,0, 200, 450)

    } else if(keyIsDown(RIGHT_ARROW) && gameState == "play"){
        player.x = player.x+16
        player.mirrorX(1)
        player.setCollider("rectangle", -180,0, 200, 450)
        player.changeAnimation("Run")

    } else{
        player.changeAnimation("Idle")
    }

      if(gameState == "play"  && player.y < ground.y-116.25){
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

    if(player.isTouching(ground1)){
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

        if(stage == 2 && stageNeed == 2 && player.x == 300 && player.y == 400 ){
            stageNeed = 1
        } 
    }
    
    if(stage == 2){
        if(player.isTouching(abilityItem1)){
            ability1 = 1
            abilityItem1.destroy()
            maxJump = 3
        }
        if(ability1 == 1){
            maxJump = 3; 
        }
    
        platform1 = createSprite(1468,500,50,20)
        platform1inv = createSprite(1468,480.25,50,20)
        platform1.addImage(platformImg)
        player.collide(platform1, platform2)

        if(player.isTouching(platform1inv)){
            player.changeAnimation("Idle")
        }

        // if(gameState == "play"  && player.y < ground.y-116.25){
        // player.changeAnimation("Jump")
        // }

        


    }


}


