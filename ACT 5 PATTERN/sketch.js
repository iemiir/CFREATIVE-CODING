function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Use degrees for rotation
  noLoop();
  noStroke();
  drawPattern();
}

function draw() {
  // Left empty intentionally
}

function drawPattern() {
  background("#1A1A1D"); // Deep dark background

  let cols = 10;
  let rows = 10;
  let w = width / cols;
  let h = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w + w / 2;
      let y = j * h + h / 2;
      let isEven = (i + j) % 2 == 0;

      // Dark-themed color palette
      let baseColor = isEven
        ? color(random(100, 160), 60, random(90, 130))   // Muted purples & teals
        : color(random(180, 255), random(100, 160), 50); // Warm oranges & pinks

      fill(baseColor);

      // Push and pop for isolated transformations
      push();
      translate(x, y);
      rotate(random(-20, 20)); // Slight random rotation
      drawDistortedRect(w * 0.6, h * 0.6); // Scaled to fit within the grid
      pop();
    }
  }
}

// Draw a slightly distorted rectangle
function drawDistortedRect(w, h) {
  beginShape();
  vertex(-w/2 + random(-5, 5), -h/2 + random(-5, 5));
  vertex(w/2 + random(-5, 5), -h/2 + random(-5, 5));
  vertex(w/2 + random(-5, 5), h/2 + random(-5, 5));
  vertex(-w/2 + random(-5, 5), h/2 + random(-5, 5));
  endShape(CLOSE);
}

function mousePressed() {
  drawPattern(); // Regenerate pattern on click
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawPattern();
}
