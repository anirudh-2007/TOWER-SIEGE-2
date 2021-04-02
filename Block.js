class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png");
      this.width = width;
      this.height = height;
      this.visiblity = 255;
    
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<4){
        var pos= this.body.position;

        push();
        translate(pos.x ,pos.y)
        strokeWeight(2);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }else{
        push();
      World.remove(world ,this.body);
      this.visiblity = this.visiblity-3;
      tint(255,this.visiblity);
      image(this.image,this.body.position.x, this.body.position.y,0,0);
       pop();

      }
     
    }
}