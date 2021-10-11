class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':12
      }
      this.body = Bodies.rectangle(x, y,60,60,options);
      this.width = 60;
      this.height = 60;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("#696969");
      fill("#4F4F4F");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };