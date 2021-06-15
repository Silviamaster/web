var sketch1 = function(p) {
    
    p.setup = function() {
        
        var canvas = p.createCanvas(300, 300);
        canvas.parent('#sketch1');
        p.background(255,255,255,80);
    };

    p.draw = function() {
        
        p.strokeWeight(4);
        p.stroke(255,0,0,100);
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    };
};

var sketch2 = function(p) {
   
    p.setup = function() {
        var canvas = p.createCanvas(300, 300);
        canvas.parent('#sketch2');
    };

    p.draw = function() {
        p.background(246,246,246);
        p.text("HAVE A NICE DAY!",p.mouseX+15, p.mouseY+15, 40, 400);
        p.fill(255,0,0,100);
        
    };
};

var sketch3 = function(p) {
   
    var x=0;
    var speed=3;

    p.setup = function() {
        var canvas = p.createCanvas(300, 300);
        canvas.parent('#sketch3');
    };

    p.draw = function() {
        p.background(246,246,246);
        p.stroke(100);
        p.noFill();
        p.ellipse(x, 150, 50, 50);

        x += speed;
        if(x>p.width||x<0) {
            speed = speed * -1;
        }
        
        
    };
};

var sketch4 = function(p) {
   var angle=0;
    p.setup = function() {
        var canvas = p.createCanvas(300, 300);
        canvas.parent('#sketch4');
        p.stroke(50,100);
        p.background(0,0,0,5);
        p.rectMode(p.CENTER);
    };

    p.draw = function() {
        
        p.translate(p.mouseX, p.mouseY);
        p.rotate(angle);
        angle += 0.1;
        p.rect(0,0,10,70,5,5,5,5);
        
    };
};

var sketch5 = function(p) {
    var x=0;
    var y=0;
    var px=0;
    var py=0;
    var easing=0.4;
     p.setup = function() {
         var canvas = p.createCanvas(300, 300);
         canvas.parent('#sketch5');
         p.stroke(255,0,0,100);
     };
 
     p.draw = function() {
        var targetX = p.mouseX;
        x += (targetX-x) * easing;
        var targetY = p.mouseY;
        y += (targetY-y) * easing;
        var weight = p.dist(x, y, px, py);
        p.strokeWeight(weight);
        p.line(x, y, px, py);
        py=y;
        px=x;

        if (p.mouseIsPressed) {
            p.stroke(0, 0, 0, 100);
          } else {
            p.stroke(255, 0, 0, 100);
          }
         
     };
 };

 var sketch6 = function(p) {
    
     p.setup = function() {
         var canvas = p.createCanvas(300, 300);
         canvas.parent('#sketch6');
         
         p.noStroke();
         p.rectMode(p.CENTER);
         
     };
 
     p.draw = function() {
         if (p.frameCount % 10 == 0) {
             p.fill(p.random(255), p.random(150), p.random(60), 100);
             p.push();
             p.translate(150,150);
             p.rotate(p.radians(p.frameCount));
             p.rect(0,0,200,25);
             p.pop();
         }
         
         
     };
 };


 var sketch7 = function(p) {
    let r, g, b;
     p.setup = function() {
         var canvas = p.createCanvas(300, 300);
         canvas.parent('#sketch7');
         p.background(255, 80);
         
     };
 
     p.draw = function() {
        r = p.random(255);
        g = p.random(150);
        b = p.random(60);
        p.noStroke();
        p.fill(r, g, b);
        p.circle(p.mouseX, p.mouseY, 20);
    };
      
      function mousePressed(){
        p.background(0);
             
     };
 };








var myFirstSketch = new p5(sketch1);

var mySecondSketch = new p5(sketch2);

var myThirdSketch = new p5(sketch3);

var myForthSketch = new p5(sketch4);

var myFifthSketch = new p5(sketch5);

var mySixthSketch = new p5(sketch6);

var mySeventhSketch = new p5(sketch7);







