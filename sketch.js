var starI,bgI;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var hada, hadaI;
var paredes;
var sonido;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

function preload()
{
	bgI = loadImage("images/starryNight.jpg");
	starI = loadImage ("images/starImage.png");
	hadaI = loadAnimation ("images/fairyImage1.png", "images/fairyImage2.png");
sonido = loadSound ("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

    

	hada = createSprite (400, 300, 20, 50);
	hada.addAnimation ("viva",hadaI);
	hada.scale = 0.1;

	star = createSprite(650,30);
	star.addImage (starI);
	star.scale = 0.05;


	engine = Engine.create();
	world = engine.world;

	
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);



hada.setCollider ("rectangle", 200,100, 600, 500);
	
	Engine.run(engine);

	
}


function draw() {
  background(bgI);
  sonido.play ();

  paredes = createEdgeSprites ();
  hada.bounceOff (paredes);

  star.x= starBody.position.x;
  star.y= starBody.position.y;

  if (keyDown ("DOWN_ARROW")) {
	Matter.Body.setStatic(starBody,false); 
}


//escribe el código para mover al hada a la izquierda y derecha
if (keyIsDown(RIGHT_ARROW)){
	hada.velocityX = + 5;
}
if (keyIsDown(LEFT_ARROW)){
	hada.velocityX = - 5;
}
if (star.collide (hada)){
	Matter.Body.setStatic(starBody,true);
	hada.velocityX = 0; 
}


  drawSprites();

}