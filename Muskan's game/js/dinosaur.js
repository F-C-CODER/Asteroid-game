class Dinosaur{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 3
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 200;
      this.height = 100;
      this.image = loadImage("images/dinosaur.png")
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        image(this.image, pos.x, pos.y, this.width, this.height);

        //Matter.Body.applyForce(this.body,this.body.position,{x:-0.5, y:-0.75})
        if(pos.x>800){
        var newAngle = 65;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.01);
        
        Matter.Body.setVelocity(this.body, {
          x: velocity.x *(-180/3.14), y: velocity.y * (-180/3.14)}); 
        }
        else if(pos.x<800 && pos.x>450){
            var newAngle = 45;
            newAngle = newAngle *(3.14/180)
            var velocity = p5.Vector.fromAngle(newAngle);
            velocity.mult(0.01);
            
            Matter.Body.setVelocity(this.body, {
              x: velocity.x *(-180/3.14), y: velocity.y * (-180/3.14)}); 
            }
            else if(pos.x<450 && pos.x>250)
            {
                var newAngle = 5;
            newAngle = newAngle *(3.14/180)
            var velocity = p5.Vector.fromAngle(newAngle);
            velocity.mult(0.01);
                Matter.Body.setVelocity(this.body, {
                    x: velocity.x *(-180/3.14), y: velocity.y * (180/3.14)});  
            }
        else{
            var newAngle = 15;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.01);
            Matter.Body.setVelocity(this.body, {
                x: velocity.x *(-180/3.14), y: velocity.y * (180/3.14)});  
        }
    }
}
