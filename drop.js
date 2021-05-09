class  drops{
    constructor(x,y){
    var options={
        restitution:0.4,
        friction:0.1,
        density:0.1
    }
        this.drop = Bodies.circle(x,y,5)
        this.radius=5;
        World.add(world,this.drop)
        }
        update(){
            if(this.drop.position.y>height){
               Matter.Body.setPosition(this.drop,{x:random(0,1000),y:random(0,1200)})
            }
        }
        display(){
            fill ("oceanblue");
            ellipseMode(RADIUS)
            ellipse(this.drop.position.x,this.drop.position.y,this.radius,this .radius)
        }
}