var abc, spcbg, craft1, craft2, craft3, craft4
var iss, spacecraft;
var hasDocked=false; 

function preload(){
  abc=loadImage("Docking-undocking/iss.png");
  spcbg=loadImage("Docking-undocking/spacebg.jpg");
  craft1=loadImage("Docking-undocking/spacecraft1.png");
  craft2=loadImage("Docking-undocking/spacecraft2.png");
  craft3=loadImage("Docking-undocking/spacecraft3.png");
  craft4=loadImage("Docking-undocking/spacecraft4.png");
  }

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg=createSprite(400, 200, displayWidth, displayHeight);
  bg.addImage(spcbg);

  iss=createSprite(450, 100, 150, 150)
  iss.addImage(abc)
  iss.scale=0.35;

  spacecraft=createSprite(500, 150, 150, 150);
  spacecraft.addImage(craft1)
  spacecraft.scale=0.20;
}

function draw() {
  background(255,255,255);
   drawSprites();

   if(!hasDocked){
     spacecraft.x=500

     if(keyDown("left")){
      spacecraft.addImage(craft3);
      spacecraft.x=spacecraft.x-3
     }

     if(keyDown("right")){
      spacecraft.addImage(craft4);
      spacecraft.x=spacecraft.x+3
     }

     if(keyDown("down")){
      spacecraft.addImage(craft2);
      spacecraft.y=spacecraft.y+5
     }

     if(keyDown("UP_ARROW")){
     spacecraft.y=spacecraft.y-5
     }
   }


   if(spacecraft.isTouching(iss)){
     hasDocked=true;
     text("Game Over", 400, 350)
   }
}













