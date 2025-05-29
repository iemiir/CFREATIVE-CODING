let img;

function preload() {
  img = loadImage('WhatsApp Image 2025-05-27 at 12.17.42 AM.jpeg');
}

function setup() {
  createCanvas(400, 400);
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      // Invert brightness
      img.pixels[index] = 255 - r;
      img.pixels[index + 1] = 255 - g;
      img.pixels[index + 2] = 255 - b;
    }
  }

  img.updatePixels();

  // Draw the image scaled to fit the 400x400 canvas
  // Use image(img, x, y, width, height) to scale it
  image(img, 0, 0, width, height);
}
