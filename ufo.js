class Ufo{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'density':1.0
        }
        this.image = loadImage("animatedRocket.jpg");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}