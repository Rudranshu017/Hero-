const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies

var ground1, hero1, block1;

function preload() {
//preload the images here
  bg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create()
  world = engine.world
  // create sprites here
    ground = new Ground(600,600,1200,20)
    hero1 = new hero(300,200,250);
    block1 = new block(900,100,70,70);
    rope2 = new rope(hero1.body,{x:300, y:50})
    monster1 = new monster(1100,300,300);
    block2 = new block(900,100,70,70);
    block3 = new block(900,100,70,70);
    block4 = new block(900,100,70,70);
    block5 = new block(900,100,70,70);
    block6 = new block(900,100,70,70);

    block7 = new block(800,100,70,70);
    block8 = new block(800,100,70,70);
    block9 = new block(800,100,70,70);
    block10 = new block(800,100,70,70);
    block11 = new block(800,100,70,70);
    block12 = new block(800,100,70,70);
    block13 = new block(800,100,70,70);
    block14 = new block(800,100,70,70);

    block15 = new block(700,100,70,70);
    block16 = new block(700,100,70,70);
    block17 = new block(700,100,70,70);
    block18 = new block(700,100,70,70);
    block19 = new block(700,100,70,70);
    block20 = new block(700,100,70,70);

    block21 = new block(600,100,70,70);
    block22 = new block(600,100,70,70);
    block23 = new block(600,100,70,70);
    block24 = new block(600,100,70,70);
    block25 = new block(600,100,70,70);
    block26 = new block(600,100,70,70);
}

function draw() {
  background(bg);
  Engine.update(engine)
 ground.display();
hero1.display();
monster1.display();
rope2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
}
function mouseDragged() {
  Matter.Body.setPosition(hero1.body,{x:mouseX, y:mouseY})
}
