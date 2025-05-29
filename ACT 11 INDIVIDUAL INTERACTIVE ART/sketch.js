let plants = [];

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  background(0); // Slight fade to create soft trails

  // Update and draw all plants
  for (let i = plants.length - 1; i >= 0; i--) {
    plants[i].grow();
    plants[i].display();

    // Remove if too small (pruned)
    if (plants[i].size <= 0) {
      plants.splice(i, 1);
    }
  }
}

// Plant class
class Plant {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.growthRate = 0.2;
  }

  grow() {
    // If mouse is close, grow faster (watering)
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 50) {
      this.size += this.growthRate * 3;
    } else {
      this.size += this.growthRate;
    }

    // Limit max size
    this.size = constrain(this.size, 0, 60);
  }

  display() {
    noStroke();
    fill(34, 139, 34, 200); // Green with some transparency
    ellipse(this.x, this.y, this.size);
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    // Plant a new seed at mouse position
    plants.push(new Plant(mouseX, mouseY));
  } else if (mouseButton === RIGHT) {
    // Prune plants near mouse
    for (let i = plants.length - 1; i >= 0; i--) {
      let d = dist(mouseX, mouseY, plants[i].x, plants[i].y);
      if (d < 30) {
        plants[i].size -= 10; // Reduce size (prune)
      }
    }
  }
}

// Disable context menu on right click for pruning
document.oncontextmenu = () => false;
