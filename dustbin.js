class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        isStatic: "true"
       
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("dustbingreen.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
   rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
     image(this.image,460,600,250,150);
  }
};
