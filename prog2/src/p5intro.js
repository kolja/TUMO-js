
function setup() {
  createCanvas(1000, 1000);
  frameRate(10);
  colorMode(HSL, 100);
  noStroke();
}

function draw() {
  background(60, 100, 50);
  fill(frameCount % 100, 100, 50);
  rect(200, 200, 100, 100); // try replacing some values with mouseX and mouseY...
}
