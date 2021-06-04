class Game
{
    constructor(){}
    getState(){
        
        database.ref("gameState").on("value", function(data){
            gameState=data.val();
        })
        
    }
    start(){
       
        if(gameState===0){
            player= new Player();
            form= new Form();
            form.display();
            car1 = createSprite(100,300,20,20);
            car2= createSprite(400, 300, 20, 20);
            car3 = createSprite(700, 300, 20, 20);
            car4 = createSprite(900, 300, 20, 20);
            cars=[car1, car2, car3, car4];
            car1.addImage(car1Img);
            car2.addImage(car2Img);
            car3.addImage(car3Img);
            car4.addImage(car4Img);
        }
    }
    updateState(data){
        database.ref("/").update({gameState:data});
    }
    play(){
        background("brown");
        image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
        
        form.hide();
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers!=undefined){
            var x = 200;
            var y = 0;
            var index=0;
            for(var plr in allPlayers){
                x=x+200;
                y=displayHeight-allPlayers[plr].distance-70;
                cars[index].x=x;
                cars[index].y=y;
                index=index+1;
                if(index===player.index){
                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                    rectMode(CENTER);
                    fill("red");
                    textSize(20);
                    text(allPlayers[plr].name,cars[index-1].x-20, cars[index-1].y+100);
                    ellipse(cars[index-1].x, cars[index-1].y, 60,60);
                    
                }
                else{
                    fill("black")
                    textSize(20);
                    text(allPlayers[plr].name,cars[index-1].x-10, cars[index-1].y+100);
                }
            }
            
        }
        if(keyDown("UP")&& player.index!=null&& player.reached==false){
            player.distance=player.distance+50;
            console.log("Key is working!");
            player.update();
        }
        if(player.distance>=3865&& player.reached==false){
           player.reached=true;
           player.rank=player.rank+1;
           player.update();
           Player.updateCarsAtEnd(player.rank);
           /*if(player.rank===4){
               gameState=2;
               game.updateState(2);
           }*/
        }
        drawSprites();
    }
    end(){
        
        background("yellow");
        form.hide();
        fill("red");
        textSize(20);
        text("Thank you for playing the Car Racing Game! A game made by Vibhor Singh and Mounika Ma'am.", displayWidth/2-200, 300);
       Player.getPlayerInfo();
       console.log(allPlayers);
    }
    
}
