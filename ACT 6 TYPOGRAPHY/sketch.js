let font;
let points = [];
let colors = [];
let fontSize = 120;
let waveAmplitude = 15;
let waveFrequency = 0.1;
let shake = false;

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
  createCanvas(1000, 1000);
  textFont(font);
  textSize(fontSize);

  // Get the width and height of the text for centering
  let bounds = font.textBounds('Abdullah Mir', 0, 0, fontSize);
  let x = (width - bounds.w) / 2;
  let y = (height + bounds.h) / 2;

  // Generate the text points centered on canvas
  points = font.textToPoints('Abdullah Mir', x, y, fontSize, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });

  // Assign random colors to each point
  for (let i = 0; i < points.length; i++) {
    colors[i] = color(random(100, 255), random(100, 255), random(100, 255));
  }
}

function draw() {
  background(30);
  let time = millis() / 1000;

  noStroke();
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let x = pt.x;
    let y = pt.y + sin(pt.x * waveFrequency + time * 3) * waveAmplitude;

    if (shake) {
      x += random(-2, 2);
      y += random(-2, 2);
    }

    fill(colors[i]);
    ellipse(x, y, 6, 6); // Circle points forming the text
  }
}

function mousePressed() {
  shake = !shake; // Toggle shake effect
  // Change all colors randomly
  for (let i = 0; i < colors.length; i++) {
    colors[i] = color(random(100, 255), random(100, 255), random(100, 255));
  }
}
