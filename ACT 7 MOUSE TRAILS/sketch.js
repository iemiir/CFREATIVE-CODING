let trail = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor(); // Hide default cursor
}

function draw() {
  background(30, 30, 40, 30); // Dark fading background

  // Add a new trail particle
  trail.push(new TrailParticle(mouseX, mouseY));

  // Limit trail length
  if (trail.length > 100) {
    trail.splice(0, 1);
  }

  // Update and show trail particles
  for (let i = 0; i < trail.length; i++) {
    trail[i].update();
    trail[i].show();
  }

  // Decorative rotating square at mouse
  push();
  translate(mouseX, mouseY);
  rotate(frameCount * 0.05);
  stroke(255, 150);
  noFill();
  rect(0, 0, 40, 40); // Larger center rotating square
  pop();
}

class TrailParticle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.size = random(30, 60); // Increased size range
    this.lifespan = 255;
    this.isCircle = random() < 0.5; // Circle or square
    this.col = color(random(100, 255), random(100, 255), random(100, 255), this.lifespan);
  }

  update() {
    this.lifespan -= 4;
    this.col.setAlpha(this.lifespan);
  }

  show() {
    noStroke();
    fill(this.col);

    if (this.isCircle) {
      ellipse(this.pos.x, this.pos.y, this.size);
    } else {
      rectMode(CENTER);
      rect(this.pos.x, this.pos.y, this.size, this.size);
    }
  }
}
