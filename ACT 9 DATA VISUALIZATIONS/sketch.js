// Sketch Name: Data Visualization - Most Popular Video Games 2024

let gameData = [
  { name: "Fortnite", hours: 390 },
  { name: "Minecraft", hours: 270 },
  { name: "Roblox", hours: 250 },
  { name: "Call of Duty: Warzone", hours: 220 },
  { name: "Valorant", hours: 210 },
  { name: "League of Legends", hours: 200 },
  { name: "GTA V", hours: 180 }
];

let barWidth;
let maxHours;

function setup() {
  createCanvas(900, 600);
  textFont("Arial");
  maxHours = max(gameData.map(g => g.hours));
  barWidth = width / gameData.length;
}

function draw() {
  background("#121212");
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("Most Played Games of 2024 (Monthly Hours)", width / 2, 40);
  textSize(12);

  for (let i = 0; i < gameData.length; i++) {
    let game = gameData[i];
    let barHeight = map(game.hours, 0, maxHours, 0, height - 150);
    let x = i * barWidth + barWidth * 0.2;
    let y = height - 100 - barHeight;

    // Change color on hover
    if (
      mouseX > x &&
      mouseX < x + barWidth * 0.6 &&
      mouseY > y &&
      mouseY < height - 100
    ) {
      fill("#FFD166");
      textSize(14);
      text(`${game.name}: ${game.hours} hrs`, x + barWidth * 0.3, y - 10);
    } else {
      fill("#06D6A0");
    }

    rect(x, y, barWidth * 0.6, barHeight, 10);
    fill(255);
    textSize(12);
    textAlign(CENTER);
    text(game.name, x + barWidth * 0.3, height - 80);
  }
}
