var hero ,heroImg, villainImg , villain;
var villainImg1 , villain1 , villainImg2;
var heroImg2,heroImg3, backg;
var  score = 0;
var msg = ""
var f = 0;

function preload(){
 heroImg = loadImage("hero.png")
 heroImg1 = loadImage("hero2.png")
 backg = loadImage("bggg.png")
 villainImg = loadImage("villain2.png")
 villainImg1 = loadImage("villain1.png")
 villainImg2 = loadImage("villainw.gif")
}
function setup() {
  createCanvas(windowWidth/2,windowHeight);
  background1  = createSprite(width/2,height/2,width,height);
background1.addImage(backg);


  hero = createSprite(width/2, height/4, 50, 50);
  hero.addImage(heroImg1);
  hero.scale=0.4
 
  villiansGroup = new Group();
  villiansGroup1 = new Group();
  edges = createEdgeSprites();
}

function draw() {
  background("orange"); 
  textSize(20) ;
  fill("white");
  text("Villans Killed :"+score,320,50);
  text("Press k to change Hero image",width/2-100,height/4-50)
  if(f==1){
    text("Villan killed Successfully",width/2-100,height/4)
  }
  hero.bounceOff(edges)
console.log(score)
if (keyDown(RIGHT_ARROW)){
  hero.x = hero.x+3
}
if (keyDown(LEFT_ARROW)){
  
  hero.x = hero.x-3
}

if (keyDown(UP_ARROW)){
  hero.y = hero.y-3
}
if (keyDown(DOWN_ARROW)){
  hero.y = hero.y+3
}
spawnVillan()
//spawnVillan1()


if(keyWentDown("k")){
  hero.addImage(heroImg1);
  hero.scale = 0.5
}
if(keyWentUp("k")){
  hero.addImage(heroImg);
  hero.scale = 0.1
}
if(villiansGroup.isTouching(hero) || villiansGroup1.isTouching(hero)){
  hero.addImage(heroImg);
  hero.scale = 0.2
  villiansGroup.destroyEach();
  villiansGroup1.destroyEach();
  f=1;
 score = score+1;
}



  drawSprites();
}

/*
function spawnVillan() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    villain = createSprite(0, 400,50,50)
 villain.addImage(villainImg);
 villain.scale=0.2
    //villain.x = Math.round(random(100,700));
    villain.y = Math.round(random(100,350));
    villain.velocityX =3;
    
     //assign lifetime to the variable
    villain.lifetime = 200;
   
    //add each cloud to the group
  villiansGroup.add(villain);
  }
  
}

function spawnVillan1() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    villain1 = createSprite(750, 400,50,50)
 villain1.addImage(villainImg1);
 villain1.scale=0.2
   // villain1.x = Math.round(random(100,700));
    villain1.y = Math.round(random(100,350));
    villain1.velocityX =-3;
    
     //assign lifetime to the variable
    villain1.lifetime = 200;
   
    //add each cloud to the group
  villiansGroup1.add(villain1);
  }
}*/

function spawnVillan() {
  //write code here to spawn the clouds
  if(frameCount % 120 === 0){
    f=0;
  var number = Math.round(random(1,3))
  console.log("random no"+number)
  switch(number){
    case 1: villain = createSprite(width-50, height/2,50,50)
    villain.addImage(villainImg1);
    villain.scale=0.2
      // villain1.x = Math.round(random(100,700));
       villain.y = Math.round(random(0,height));
       villain.velocityX =-3;
       villiansGroup.add(villain)
       break;
    case 2: villain = createSprite(0, height/2,50,50)
    villain.addImage(villainImg);
    villain.scale=0.2
       //villain.x = Math.round(random(100,700));
       villain.y = Math.round(random(0,height));
       villain.velocityX =3;
       villiansGroup.add(villain)
       break;
    case 3: 
        villain = createSprite(width/2, 50,50,50)
        villain.addImage(villainImg2);
        villain.scale=0.2
       //villain.x = Math.round(random(100,700));
       //villain.y = Math.round(random(100,350));
       villain.velocityY =3;
       villiansGroup.add(villain)
       break;
       default: break;
       
  }
}
}
