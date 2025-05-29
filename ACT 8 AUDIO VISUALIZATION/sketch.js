let sound;
let fft;
let particles = [];
let playing = false;

function preload() {
  sound = loadSound('AUDIO.mp3'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  fft = new p5.FFT();
  noStroke();
}

function draw() {
  background(260, 30, 15, 0.1); // Soft dark purple w/ trail

  translate(width / 2, height / 2);
  let spectrum = fft.analyze();
  let energy = fft.getEnergy("mid");

  // Emit new particles based on energy
  if (energy > 150) {
    for (let i = 0; i < 10; i++) {
      particles.push(new Particle());
    }
  }

  // Update and show particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }

  // Central pulse
  let size = map(energy, 0, 255, 20, 100);
  fill((frameCount % 360), 60, 100, 0.1);
  ellipse(0, 0, size * 2);
  fill((frameCount % 360), 60, 100, 0.15);
  ellipse(0, 0, size);
  
  // UI text
  resetMatrix();
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text("CLICK 2 PLAY/PAUSE", width / 2, height - 30);
}

function mousePressed() {
  if (!sound.isPlaying()) {
    sound.loop();
    playing = true;
  } else {
    sound.pause();
    playing = false;
  }
}

class Particle {
  constructor() {
    this.angle = random(360);
    this.r = 0;
    this.speed = random(1, 3);
    this.size = random(3, 6);
    this.lifespan = 255;
    this.hue = (frameCount + random(60)) % 360;
  }

  update() {
    this.r += this.speed;
    this.lifespan -= 2;
  }

  show() {
    let x = this.r * cos(this.angle);
    let y = this.r * sin(this.angle);

    fill(this.hue, 60, 100, this.lifespan / 255);
    ellipse(x, y, this.size);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
