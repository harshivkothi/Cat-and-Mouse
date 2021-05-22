var cat,catImage1,catImage2,catImage3
var mouse,mouseImage1,mouseImage2,mouseImage3
var garden,gardenImage



function preload() {
    //load the images here
    catImage1 = loadImage("images/cat1.png")
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImage3 = loadAnimation("images/cat4.png")
    mouseImage1 = loadImage("images/mouse1.png")
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3 = loadAnimation("images/mouse4.png")
    gardenImage = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600)
    cat.addImage(catImage1)
    cat.scale = 0.1
    mouse =createSprite(200,600)
    mouse.addImage(mouseImage1)
    mouse.scale = 0.1

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    console.log(cat.x-mouse.x)
    console.log(cat.width/2-mouse.width/2)
     if(cat.x-mouse.x<cat.width/2-mouse.width/2) {
       cat.velocityX = 0
       cat.addAnimation("tomLastImage",catImage3)
       mouse.addAnimation("jerryLastImage",mouseImage3)
       cat.changeAnimation("tomLastImage")
       mouse.changeAnimation("jerryLastImage") 
     }
    
  


    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW) {
    cat.addAnimation("tomRunning",catImage2)
    cat.changeAnimation("tomRunning")
    cat.velocityX = -6
    mouse.addAnimation("mouseTeasing",mouseImage2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25  

  }



}