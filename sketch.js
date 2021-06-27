const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperImage;
function preload(){
	//paperImage = loadImage("paper0.png");
}


function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(225)


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 150, width, 10 , {isStatic:true} );
	World.add(world, ground);

	ground = new Ground(600,665,1200,20);
	pPaper= new Paper(45,650,50);
	dustbin1 = new Dustbin(450,650,200,20);
	dustbin2 = new Dustbin(360,620,20,100);
	dustbin3 = new Dustbin(560,620,20,100);
	Engine.run(engine);
 chain = new SlingShot  (pPaper.body,{x:40,y:400})
}


function draw() {
	background(225);
	text(mouseX+","+mouseY,30,50);
    ground.display();
    pPaper.display();
	chain.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
  drawSprites();
}



	function keyPressed() {
		 if (keyCode === RIGHT_ARROW) {
			  Matter.Body.applyForce(pPaper.body,pPaper.body.position,{x:200,y:-100}); } }
function mouseDragged(){
Matter.Body.setPosition(pPaper.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	chain.fly();
	
	}