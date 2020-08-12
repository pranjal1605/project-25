class Paper{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.2,
            density:1.2,
        }
        this.body = Matter.Bodies.circle(x,y,20,options)
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Sprites/paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
       imageMode(CENTER)
       image(this.image,0,0,this.width,this.height);
        pop();
    }
}

