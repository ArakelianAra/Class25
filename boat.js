class Boat{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h)
        this.width=w
        this.height=h
        this.image=loadImage("assets/boat.png")
        World.add(world,this.body)
        
    }
    display(){
        push()
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}
