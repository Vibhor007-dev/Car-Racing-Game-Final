var gameState=0, database;
var game;
var form;
var player;
var playerCount=0;
var allPlayers=[];
var car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img;
var cars=[];
var trackImg;

function preload(){
   car1Img=loadImage("images/car1.png");
   car2Img=loadImage("images/car2.png");
   car3Img=loadImage("images/car3.png");
   car4Img=loadImage("images/car4.png");
   trackImg=loadImage("images/track.jpg");
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);
  game=new Game();
  game.getState();
  game.start();

}
 function draw(){
   player.getCount();
   console.log(playerCount);
  if(playerCount===4&& gameState==0){
    game.updateState(1);
  }
  if(player.rank===4){
      game.updateState(2);
  }
  if(gameState===1){
    game.play();
  }
  if(gameState===2){
    //clear();
    game.end();
  }
 } 
