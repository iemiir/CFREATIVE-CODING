let img;

function preload() {
  img = loadImage('WhatsApp Image 2025-05-27 at 12.17.42 AM.jpeg');
}

function setup() {
  createCanvas(400, 400);
  img.loadPixels();

  // Reduce colors to 4 levels per channel
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let i = (x + y * img.width) * 4;
      for (let j = 0; j < 3; j++) {
        img.pixels[i + j] = floor(img.pixels[i + j] / 64) * 64;
      }
    }
  }

  img.updatePixels();

  // Draw the processed image scaled to fit 400x400 canvas
  image(img, 0, 0, width, height);
}
