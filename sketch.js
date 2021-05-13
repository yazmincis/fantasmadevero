var fantasma,fantasmaimg;
var torre,torreimg;
var estado;
var puertaimg;
var climber,climberimg;
var grupopuerta,grupobalcon,grupoinvisible;
var musica;
var grupoinvisible2;
function preload(){
torreimg = loadImage("tower.png");
  fantasmaimg = loadAnimation("ghost-jumping.png");
  puertaimg = loadImage("door.png");
  climberimg = loadImage("climber.png");
  musica=loadSound("spooky.wav");
}
function setup(){
 createCanvas (400,600);
  torre = createSprite(200,300,20,20);
  torre.addImage(torreimg);
  torre.scale = 0.7;
  fantasma = createSprite(200,300,20,20);
  fantasma.addAnimation("fantasma",fantasmaimg);
  fantasma.scale = 0.3;
  estado = "inicio";
  grupopuerta = new Group();
  grupobalcon =  new Group();
  grupoinvisible = new Group();
  grupoinvisible2 = new Group();
  fantasma.debug = true;
  fantasma.setCollider("circle",0,35,100);
}
function draw(){
  background(0);
 drawSprites(); 
  if(estado==="inicio"&&keyDown("space")){
  estado = "juego";  
  }
  if(estado==="juego"){
    torre.velocityY=2;
    puertesitas();
 if(keyDown("left_arrow")){
   fantasma.x= fantasma.x-5;
   
   
 } 
    if(fantasma.isTouching(grupoinvisible2)){
      estado = "fin";
      fantasma.velocityY =3;
    }
    //musica.play();
    if(fantasma.y>600){
  estado = "fin";
    }
    
  if(fantasma.isTouching(grupoinvisible)){
    fantasma.velocityY = 0;
  }  

    fantasma.velocityY=fantasma.velocityY+0.8;
 if(keyDown("space")){
 fantasma.velocityY = -10;  
 }  
    if(keyDown("right_arrow")){
   fantasma.x= fantasma.x+5;
 }   
  }
  if(estado==="fin"){
 grupopuerta.setVelocityYEach(0); 
    grupobalcon.setVelocityYEach(0);
    grupoinvisible.setVelocityYEach(0);
    torre.velocityY = 0;
  }

  
  if(torre.y>400){
  torre.y = torre.height/4;
}

}
function puertesitas(){
  if(frameCount%100===0){
    var puerta= createSprite(random (50,350),10,20,20);
    puerta.shapeColor = "blue";
    puerta.velocityY = 3;
    puerta.addImage(puertaimg);
    puerta.scale = 0.65;  
    var balconcito = createSprite(puerta.x,55,20,20);
    balconcito.velocityY = 3;
    balconcito.addImage(climberimg);
    balconcito.scale = 0.55;
    puerta.depth = fantasma.depth;
    balconcito.depth = fantasma.depth;
    fantasma.depth = fantasma.depth+1;
    var pisoinvisible = createSprite(puerta.x,45,45,5);
    pisoinvisible.visible = true;
    pisoinvisible.velocityY = 3;
    grupopuerta.add(puerta);
    grupobalcon.add(balconcito);
    grupoinvisible.add(pisoinvisible);
    pisoinvisible.debug = true;
  var  pisoinvisibledown = createSprite(puerta.x,60,45,5);
    pisoinvisibledown.velocityY = 3;
    pisoinvisibledown.shapeColor = "red";
    grupoinvisible2.add(pisoinvisibledown);
    
    
  }
  }