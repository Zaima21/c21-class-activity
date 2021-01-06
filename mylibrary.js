//if two objects are colliding
//it can return value

//yes or no - true(1) or false(0) - boolean
//parameters or arguments
function isTouching(sprite1, sprite2){

    //if the distance between the centers is equal to diff in the xpos and sum of half the widths

    if( sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2 &&
      sprite2.x - sprite1.x < sprite1.width/2 + sprite2.width/2 &&
      sprite1.y - sprite2.y < sprite1.height/2 + sprite2.height/2 &&
      sprite2.y - sprite1.y < sprite1.height/2 + sprite2.height/2 )
       {
    
            return true;
       }
 
    else
        {
 
          return false;

        }
}      

function bounceOff(sprite1,sprite2){
    

  //bounce off when two objects hit each other
 if ( sprite1.x - sprite2 .x < sprite1.width/2 + sprite2.width/2 &&
  sprite2.x - sprite1.x < sprite1.width/2 + sprite2.width/2 ){
 //reverse the velocities when they collide

 sprite1.velocityX =  sprite1.velocityX *(-1); // -3
 sprite2.velocityX = sprite2.velocityX *(-1); // 3
}
}