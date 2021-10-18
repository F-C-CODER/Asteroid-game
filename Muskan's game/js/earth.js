class Earth {
    constructor(){
        this.x=width/2
        this.y=height-100
        this.width=1000
        this.height=400
        this.image=loadImage("images/earth.png")
    }
    display(){
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    }
}