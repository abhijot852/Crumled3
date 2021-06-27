class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
         friction:5,
density:1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      //this.width = width;
      this.radius = 50;
      this.image=loadImage("paper0.png");
      World.add(world, this.body);
    }
    display(){
    //var pos =this.body.position;
    // this.body.position.x=mouseX;
     //this.body.position.y=mouseY;
      imageMode(CENTER);
     image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius);
      
    }
  };
 
  