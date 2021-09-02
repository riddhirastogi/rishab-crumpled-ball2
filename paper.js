class Paper{
    constructor(x,y,r){
        var options={ isStatic:false,
            restitution:0.3,
        friction:0,
        density:1.2}
        this.ball = Bodies.circle(this.x,this.y,r/2,options);
        this.image  = loadImage('crumpled ball.png')
        this.x = x
        this.y = y
        this.r = r
        World.add(world,this.ball);
    }
    display(){
        var pos = this.ball.position
        push ()
        translate(pos.x,pos.y)
       // imageMode(CENTER)
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        //image(this.image,0,0,this.r,this.r)
        pop()
    }
}
