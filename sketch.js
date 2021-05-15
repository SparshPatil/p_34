

function preload() {
//prconstructor(x,y,r)
{
  var options= {
  density: 1,
  frictionAir: 1
  };
  this.x=x;
  this.y=y;
  this.r=r;
  this.image=loadImage("Superhero-01.png");
  this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
  World.add(world, this.body);
  }

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here


}

function draw() {
  background("GamingBackground.png")
  

}

