function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#FFFFFF');
  
  // Head
  fill('#7FFFD4');
  ellipse(200, 200, 80, 100);
  
  // Eyes
  fill('#800080');
  ellipse(180, 190, 35, 35);
  ellipse(220, 190, 35, 35);
  
  // Antennas
  line(180, 155, 160, 100);
  line(220, 155, 240, 100);
  ellipse(160, 100, 15, 15);
  ellipse(240, 100, 15, 15);
  
  // Body
  fill('#7FFFD4');
  ellipse(200, 270, 60, 90);
  
  // Legs
  line(185, 305, 170, 370);
  line(215, 305, 235, 370);
  
  // Arms
  fill('#800080');
  line(170, 260, 150, 280);
  line(230, 260, 255, 280);
}