const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var bg, bgImage;
var engine, world;
var canvas;
var lives = 3;
var score = 0;
var bullet, bulletGroup;

function preload() {
    //load the images here
   bgImage=loadImage("images/space.jpg")
   heartImage=loadImage("images/heart.png");
   bulletImage=loadImage("images/bullet.png")
}

function setup(){
    canvas = createCanvas(1000,600);
    engine=Engine.create();
    world=engine.world;
    //bg = createSprite(width/2, height/2,20,20);
    //bg.addImage("bg", bgImage);
    //bg.scale=1

    heart1 = createSprite(800, 50, 20, 20)
    heart1.addImage("heart1",heartImage);
    heart1.scale=.1;
    
    heart2 = createSprite(850, 50, 20, 20)
    heart2.addImage("heart2",heartImage);
    heart2.scale=.1;

    heart3 = createSprite(900, 50, 20, 20)
    heart3.addImage("heart3",heartImage);
    heart3.scale=.1;

    bulletGroup=createGroup();

    planet = new Earth ()
    asteroid = new Asteroid ();
    plane = new Plane();
    dinosaur = new Dinosaur(1000,650)

}

function draw() {

    background(bgImage);

    Engine.update(engine);

    if(keyDown("space")){
        shootBullet();
    }

    if(asteroid.asteroidGroup.collide(bulletGroup)){
        score=score+20;
        asteroid.asteroidGroup.destroyEach();
        bulletGroup.destroyEach();
    }

    drawSprites();

    textSize(25);
    text("score : " + score, 800,100)

    planet.display();
    asteroid.display();
    plane.display();
    dinosaur.display();
    plane.handlePlaneMovement();

    
}


/*function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }*/

function shootBullet(){
    bullet= createSprite(500, 200, 50,20)
    bullet.x= plane.x
    bullet.addImage(bulletImage)
    bullet.scale=0.12
    bullet.velocityY= -7
    bulletGroup.add(bullet);
  }

