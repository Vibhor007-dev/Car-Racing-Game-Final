class Form
{
    constructor(){this.input=createInput("Name")
    this.button=createButton("Play!");
    this.greeting=createElement("h5");
    this.restart=createButton("Restart! Press the reload button again if you have finished the game");
}
    display(){
        var title = createElement("h4");
        title.html("Racers🚗");
        title.position(displayWidth/2-20,10);
       
        this.input.position(displayWidth/2-20,200);
        
        this.button.position(displayWidth/2-20,300);
        this.restart.position(100,50);
        this.restart.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
            database.ref("/").update({players:null});
            Player.updateCarsAtEnd(0);
        })



        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.position(100,200);
            this.greeting.html("Welcome to the game!"+player.name);
        })
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}