const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var b1, b2, b3, b4, b5, b6;
var ground, ground2;
var ball, slingShot;
function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,385,1200,20);
    ground2 = new Ground(544,190,200,20);

    box1 = new Box(900,320,50,50,0,"yellow");
    box2 = new Box(950,320,50,50,0,"red");
    box3 = new Box(850,320,50,50,0,"green");
    box4 = new Box(870,245,50,50,0,"orange");
    box5 = new Box(920,245,50,50,0,"brown");
    box6 = new Box(895,220,50,50,0,"white");
    b1 = new Box(490,90,50,50,0,"yellow");
    b2 = new Box(540,90,50,50,0,"green");
    b3 = new Box(590,90,50,50,0,"white");
    b4 = new Box(510,40,50,50,0,"red");
    b5 = new Box(560,40,50,50,0,"orange");
    b6 = new Box(535,10,50,50,0,"blue");
    ball = new Ball(276,276);
    slingShot = new Slingshot(ball.body,{x:277,y:277});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    ground.display();
    ground2.display();
    console.log(mouseX);
    console.log(mouseY);
    ball.display();
    slingShot.display(); 
    textSize(16);
    fill("yellow");
    text("Press space to bring the ball again",50,60);

}
function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingShot.fly();
}
function keyPressed()
{
    if(keyCode === 32)
    {
        slingShot.attach(ball.body);
    }
}