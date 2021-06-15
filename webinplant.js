let particles = [];

class Particle {

  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  createParticle() {
    noStroke();
    fill(0);
    circle(this.x,this.y,8);
  }

  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  
   contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < 10) {
      return true;
    } else {
      return false;
    }
  }
}

function setup() {
  var canvas = createCanvas(windowWidth/2, windowHeight/2);
  canvas.parent('webinplant');
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}

function draw() {
  background(255);
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();

  }
  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].contains(mouseX, mouseY)) {
      particles.splice(i, 1);
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth/2, windowHeight/2);
  }






