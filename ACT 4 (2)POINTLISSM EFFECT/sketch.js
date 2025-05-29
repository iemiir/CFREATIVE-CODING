let img;

function preload() {
  img = loadImage('WhatsApp Image 2025-05-27 at 12.17.42 AM.jpeg');
}

function setup() {
  createCanvas(400, 400);
  img.loadPixels();

  // Invert image colors
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      img.pixels[index] = 255 - img.pixels[index];       // R
      img.pixels[index + 1] = 255 - img.pixels[index + 1]; // G
      img.pixels[index + 2] = 255 - img.pixels[index + 2]; // B
    }
  }
  img.updatePixels();

  background(255);
  noStroke();

  frameRate(60);  // Fast drawing speed
}

function draw() {
  let x = floor(random(img.width));
  let y = floor(random(img.height));

  let pix = img.get(x, y);

  let scaledX = map(x, 0, img.width, 0, width);
  let scaledY = map(y, 0, img.height, 0, height);

  fill(pix);
  ellipse(scaledX, scaledY, 20, 20);  // Bigger circles
}
