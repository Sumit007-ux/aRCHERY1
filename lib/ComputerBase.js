class ComputerBase {

constructor(x,y,width,height) {

    var options = {
    isStatic: true    
};

this.bodies = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
this.image = loadImage ("./assets/base2.png");

World.add(world,this.bodies)

}
display() {
var pos = this.bodies.position;
var angle = this.bodies.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image , 0, 0,this.width,this.height)
pop ();
}





}