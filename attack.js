function dinoAttack(){
    if(dinoHead1.isTouching(player) ){
        dino1.destroy()
        dinoHead1.destroy()
    }

    if(dinoHead2.isTouching(player) ){
        dino2.destroy()
        dinoHead2.destroy()
    }

    if(dinoHead3.isTouching(player) ){
        dino3.destroy()
        dinoHead3.destroy()
    }

    if(dinoHead4.isTouching(player) ){
        dino4.destroy()
        dinoHead4.destroy()
    }
}

function playerAttack(){
    if(player.isTouching(dino1)){
        dinoHead1.destroy()
        player.lifetime = 25
        dino1.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino2)){
        dinoHead2.destroy()
        player.lifetime = 25
        dino2.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino3)){
        dinoHead3.destroy()
        player.lifetime = 25
        dino3.velocityX = -6.1
        placeHolder2 = 1
    }

    if(player.isTouching(dino4)){
        dinoHead4.destroy()
        player.lifetime = 25
        dino4.velocityX = -6.1
        placeHolder2 = 1
    }

    }