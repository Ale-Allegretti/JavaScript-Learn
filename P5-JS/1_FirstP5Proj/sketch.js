
let circleX = 100;
var col = 0;

function setup() {
  createCanvas(400, 400);
  circleX = 0;
}



function draw() {  // ridisegna in loop 60fps
  
  let bubble = new Bubble();
  col = map(mouseX, 0, 400, 0, 400);  
        //rimappa il range da 0-255 a 0-400 per mouseX
  background(col);
  rectMode(CENTER);
  rect(175, 175, 20, 100);
  fill(mouseX);
  //ellipse(circleX, 150, 75, 75);
  bubble.move();
  bubble.show();

  
  circleX += 5;
  
}

function mousePressed() {
  circleX = 0;
}

