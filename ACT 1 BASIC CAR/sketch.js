function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(44);
  
  fill(0, 0, 200)
  //CAR BODY
  strokeWeight(5);
  rect(100, 200, 200, 50, 10);
 
  //CAR TOP
  rect(140, 160, 120, 40, 10);
  
  //CAR WHEELS
  fill(0);
  ellipse(130, 260, 40, 40);
  ellipse(270, 260, 40, 40);
  
  //CAR HEADLIGHT
  fill(255, 255, 102);
  ellipse(300, 220, 20, 20);
  
  //CAR WINDOWS
  fill(0);
  rect(160, 170, 30, 20, 5);
  rect(210, 170, 30, 20, 5);
  
}