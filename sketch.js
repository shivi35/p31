const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var drop=[];
var maxdrops=100;

function preload(){
    
}

function setup(){
   createCanvas (1000,1200);
    engine=Engine.create()
    world=engine.world;
    Engine.run(engine)

    for(var i=0;i<maxdrops;i++){
        drop.push(new drops(random(0,1000) ,random(0,1200)))
    }
}

function draw(){
    background ("black");
    for(var i=0;i<maxdrops;i++){
    drop[i].display()
drop [i].update()}
}   

