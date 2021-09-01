
class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }

    move() {
        this.x += random(-5,5);
        this.y += random(-5,5);
    }
    
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
  
  
  }