class Player {
    constructor() {
        this.distance = 0;
        this.name=null;
        this.index=null;
        this.rank=0;
        this.reached=false;
        
    }
    getCount(){
        database.ref("playerCount").on("value", (data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({playerCount:count});
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({name:this.name,distance:this.distance, rank:this.rank, reached:this.reached});
    }
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers=data.val();
        })
    }
    getCarsAtEnd(){
        database.ref("carsAtEnd").on("value",(data)=>{
            this.rank=data.val();
        })
    }
    static updateCarsAtEnd(data){
        database.ref("/").update({
            carsAtEnd:data

        })
    }
}