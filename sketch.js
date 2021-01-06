var movingrect, fixedrect;
var rect1,rect2;

function setup() {


  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  fixedrect = createSprite(600,200,50,50);
   rect1 = createSprite(400,400,50,50);
   rect2 = createSprite(600,400,50,50);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  rect1.shapeColor = "pink";
  rect2.shapeColor = "blue";
  rect1.velocityX = 3
  rect2.velocityX = -3
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  
  if(isTouching(fixedrect, movingrect)){

    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";

  }
   else{

    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";

   }

   


  bounceOff(rect1,rect2);
  

  drawSprites();
}


//algortihms - solution to some problem

