class paper {
  constructor(x,y){
      var option = {
      isStatic:true,
      restitution:0.3,
      friction:100,
      density:1.2
      }
    this.r=r;

    this.image = loadImage("papper.png");
    this.body = Bodies.circle(x,y,r,option);
    World.add(world,this.bodies);
    }

   display(){
     var paperpos = this.body.position;

     push()
     translate(papperpos.x, papperpos.y);
	 rectMode(CENTER);
	 fill(255);
     imageMod(CENTER);
     image(this.image,0,0,2*this.r,2*this.r);
	 pop()
    }
}









