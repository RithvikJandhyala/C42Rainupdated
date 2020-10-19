const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var rain;
var rainimg
var thunder;
var thunderimg1;
var thunderimg2;
var thunderimg3;
var thunderimg4;
var person;
var personimg;
var umbrella;
var rain;
var particles = [];
function preload(){
    rainimg = loadImage("rain.png");
    thunderimg1 = loadImage("thunderbolt/1.png");
    thunderimg2 = loadImage("thunderbolt/2.png");
    thunderimg3 = loadImage("thunderbolt/3.png");
    thunderimg4 = loadImage("thunderbolt/4.png");
    personimg = loadImage("walking_1.png");

}

function setup(){
    engine = Engine.create();
    world = engine.world;
   createCanvas(500,500);
   /*person = createSprite(255,420);
   person.addImage("person",personimg);
   person.scale=0.3;*/
   ground = new Ground(600,height,1200,20);
   umbrella = new Umbrella(255,400,100,100);
   //drop = new Drop(10,10,10,10);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    if(frameCount%1===0){
        particles.push(new Drop(random(0,500),-15,10,10));
      }
      umbrella.display();
    for(var j = 0;j<particles.length;j++){
        particles[j].display();    
      }
    
    
      
    if(frameCount%80===0){
        thunder = createSprite(random(0,400),50,10,10);
        var rand = Math.round(random(1,4));
        switch(rand){
          case 1:thunder.addImage("thunder",thunderimg1); 
          
          break;
          case 2:thunder.addImage("thunder",thunderimg2); 
          
          break;
          case 3:thunder.addImage("thunder",thunderimg3); 
         
          break;
          case 4:thunder.addImage("thunder",thunderimg4); 
          
          break;
          default:break;
        }
        thunder.scale = 0.7;
        thunder.lifetime = 5;
    }
    

   
        
    
    drawSprites();
    }
    



